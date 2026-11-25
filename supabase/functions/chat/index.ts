import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" }
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return jsonResponse({ error: "الطريقة غير مدعومة." }, 405);
  }

  const authorization = request.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return jsonResponse({ error: "سجّل الدخول لاستخدام المساعد." }, 401);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
  const geminiApiKey = Deno.env.get("GEMINI_API_KEY");
  if (!supabaseUrl || !supabaseAnonKey || !geminiApiKey) {
    console.error("Chat function is missing required server configuration.");
    return jsonResponse({ error: "خدمة المساعد غير مكتملة الإعداد." }, 503);
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false }
  });
  const accessToken = authorization.slice("Bearer ".length);
  let userId: string | null = null;
  let authError: { message: string } | null = null;
  try {
    const authResult = await supabase.auth.getUser(accessToken);
    userId = authResult.data.user?.id ?? null;
    authError = authResult.error;
  } catch (error) {
    console.error("Could not verify the Supabase session:", error);
    return jsonResponse({ error: "تعذر التحقق من جلسة الدخول." }, 502);
  }
  if (authError || !userId) {
    return jsonResponse({ error: "انتهت جلسة الدخول. سجّل الدخول مرة أخرى." }, 401);
  }

  let payload: { message?: unknown; properties?: unknown };
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "تعذر قراءة الرسالة." }, 400);
  }

  if (typeof payload.message !== "string" || !payload.message.trim() || payload.message.length > 1000) {
    return jsonResponse({ error: "اكتب سؤالًا لا يتجاوز 1000 حرف." }, 400);
  }

  const properties = Array.isArray(payload.properties)
    ? payload.properties.slice(0, 20).map((item) => {
      const property = item && typeof item === "object" ? item as Record<string, unknown> : {};
      return {
        title: String(property.title ?? "").slice(0, 100),
        area: String(property.area ?? "").slice(0, 60),
        kind: String(property.kind ?? "").slice(0, 20),
        type: String(property.type ?? "").slice(0, 30),
        price: Number.isFinite(Number(property.price)) ? Number(property.price) : null,
        beds: Number.isFinite(Number(property.beds)) ? Number(property.beds) : null,
        baths: Number.isFinite(Number(property.baths)) ? Number(property.baths) : null,
        size: Number.isFinite(Number(property.size)) ? Number(property.size) : null
      };
    })
    : [];

  let completion: Response;
  try {
    completion = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent", {
      method: "POST",
      headers: {
        "x-goog-api-key": geminiApiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{
            text: "أنت مساعد عقارات لموقع Sakeena في مصر. أجب بالعربية المصرية بلطف وباختصار. استخدم قائمة العقارات المرسلة فقط عند ذكر العقارات أو الأسعار، ولا تخترع بيانات أو توفر أو أرقام تواصل. إذا لم تجد ما يناسب السؤال، وضّح ذلك واقترح استخدام فلاتر البحث. لا تطلب كلمات مرور أو بيانات دفع."
          }]
        },
        contents: [{
          role: "user",
          parts: [{
            text: `العقارات المتاحة (بيانات تجريبية): ${JSON.stringify(properties)}\n\nسؤال المستخدم: ${payload.message.trim()}`
          }]
        }],
        generationConfig: { maxOutputTokens: 450 }
      })
    });
  } catch (error) {
    console.error("Gemini request failed:", error);
    return jsonResponse({ error: "تعذر الاتصال بخدمة المساعد. حاول مرة أخرى." }, 502);
  }

  if (!completion.ok) {
    console.error("Gemini returned status:", completion.status);
    return jsonResponse({ error: "لم يتمكن المساعد من الرد الآن. حاول مرة أخرى." }, 502);
  }

  let result: {
    candidates?: Array<{
      content?: { parts?: Array<{ text?: unknown }> };
    }>;
  };
  try {
    result = await completion.json();
  } catch (error) {
    console.error("Gemini returned invalid JSON:", error);
    return jsonResponse({ error: "وصل رد غير صالح من المساعد." }, 502);
  }
  const reply = result.candidates?.[0]?.content?.parts
    ?.map((part) => typeof part.text === "string" ? part.text : "")
    .join("")
    .trim();
  if (!reply) {
    console.error("Gemini returned an empty response.");
    return jsonResponse({ error: "وصل رد غير مكتمل من المساعد." }, 502);
  }

  return jsonResponse({ reply });
});
