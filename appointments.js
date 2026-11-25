(() => {
  const feedback = document.getElementById("appointments-feedback");
  const loginPanel = document.getElementById("appointment-login");
  const content = document.getElementById("appointments-content");
  const client = window.SakeenaBackend?.createClient() || null;
  let currentUser = null;
  let appointments = [];

  const labels = {
    pending: ["بانتظار الرد", "Pending"],
    approved: ["تمت الموافقة", "Approved"],
    rejected: ["مرفوض", "Declined"]
  };
  const english = () => document.documentElement.lang === "en";
  const text = (arabic, translated) => english() ? translated : arabic;

  function setFeedback(message, isError = false) {
    feedback.textContent = message;
    feedback.classList.toggle("error", isError);
  }

  function makeText(tag, className, value) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = value;
    return element;
  }

  function createAppointmentCard(appointment, isOwner) {
    const card = document.createElement("article");
    card.className = "appointment-card";
    const property = Array.isArray(appointment.property) ? appointment.property[0] : appointment.property;
    card.append(makeText("h3", "", property?.title || text("إعلان عقاري", "Property listing")));
    card.append(makeText("p", "appointment-location", `${property?.area || ""}${property?.city ? ` · ${property.city}` : ""}`));
    const date = new Date(appointment.scheduled_at);
    card.append(makeText("p", "appointment-date", new Intl.DateTimeFormat(
      english() ? "en-US" : "ar-EG",
      { dateStyle: "medium", timeStyle: "short" }
    ).format(date)));
    const status = labels[appointment.status] || labels.pending;
    const statusBadge = makeText("span", `appointment-status status-${appointment.status}`, status[english() ? 1 : 0]);
    card.append(statusBadge);
    if (appointment.note) card.append(makeText("p", "appointment-note", appointment.note));
    if (isOwner) {
      const requester = document.createElement("div");
      requester.className = "appointment-requester";
      requester.append(makeText("strong", "", appointment.requester_name));
      const email = document.createElement("a");
      email.href = `mailto:${encodeURIComponent(appointment.requester_email)}`;
      email.textContent = appointment.requester_email;
      requester.append(email);
      const phone = document.createElement("a");
      phone.href = `tel:${encodeURIComponent(appointment.requester_phone)}`;
      phone.textContent = appointment.requester_phone;
      requester.append(phone);
      card.append(requester);

      if (appointment.status === "pending") {
        const actions = document.createElement("div");
        actions.className = "appointment-actions";
        [["approved", text("موافقة", "Approve")], ["rejected", text("رفض", "Decline")]].forEach(([statusValue, label]) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = statusValue === "approved" ? "search-button" : "appointment-decline";
          button.textContent = label;
          button.addEventListener("click", () => updateAppointmentStatus(appointment.id, statusValue));
          actions.append(button);
        });
        card.append(actions);
      }
    }
    return card;
  }

  function renderAppointments() {
    if (!currentUser) return;
    const requested = appointments.filter((appointment) => appointment.requester_id === currentUser.id);
    const received = appointments.filter((appointment) => appointment.owner_id === currentUser.id);
    const requestedList = document.getElementById("requested-appointments");
    const receivedList = document.getElementById("received-appointments");
    requestedList.replaceChildren(...requested.map((appointment) => createAppointmentCard(appointment, false)));
    receivedList.replaceChildren(...received.map((appointment) => createAppointmentCard(appointment, true)));
    document.getElementById("requested-empty").hidden = requested.length > 0;
    document.getElementById("received-empty").hidden = received.length > 0;
  }

  async function loadAppointments() {
    setFeedback(text("جارٍ تحميل المواعيد...", "Loading appointments..."));
    try {
      const { data, error } = await client
        .from("property_appointments")
        .select("id,property_id,owner_id,requester_id,requester_name,requester_email,requester_phone,scheduled_at,note,status,property:property_listings(title,area,city)")
        .order("scheduled_at", { ascending: true });
      if (error) throw error;
      appointments = data;
      renderAppointments();
      setFeedback("");
    } catch (error) {
      console.error("Could not load property appointments:", error);
      setFeedback(text("تعذر تحميل المواعيد. تحقق من تشغيل ترحيل قاعدة البيانات.", "Could not load appointments. Check that the database migration has been applied."), true);
    }
  }

  async function updateAppointmentStatus(appointmentId, status) {
    setFeedback(text("جارٍ تحديث الطلب...", "Updating request..."));
    try {
      const { data, error } = await client
        .from("property_appointments")
        .update({ status })
        .eq("id", appointmentId)
        .eq("status", "pending")
        .select("id")
        .maybeSingle();
      if (error) throw error;
      if (!data) throw new Error("The appointment is no longer pending or is not owned by this user.");
      await loadAppointments();
      setFeedback(text("تم تحديث حالة طلب المعاينة.", "Appointment status updated."));
    } catch (error) {
      console.error("Could not update the property appointment:", error);
      setFeedback(text("تعذر تحديث الطلب. قد يكون تم الرد عليه بالفعل.", "Could not update the request. It may already have been answered."), true);
    }
  }

  async function initialize() {
    if (!client) {
      loginPanel.hidden = false;
      document.getElementById("appointment-login-message").textContent =
        text("تعذر الاتصال بـ Supabase. تحقق من إعدادات المشروع.", "Could not connect to Supabase. Check the project configuration.");
      loginPanel.querySelector("a").hidden = true;
      return;
    }

    try {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      currentUser = data.session?.user || null;
      if (!currentUser) {
        loginPanel.hidden = false;
        document.getElementById("appointment-login-message").textContent =
          text("سجّل الدخول لمتابعة طلباتك ومواعيد معاينة عقاراتك.", "Sign in to review your requests and property appointments.");
        return;
      }
      content.hidden = false;
      await loadAppointments();
      client.auth.onAuthStateChange((_event, session) => {
        currentUser = session?.user || null;
        if (currentUser) void loadAppointments();
        else window.location.reload();
      });
    } catch (error) {
      console.error("Could not initialize the appointments page:", error);
      setFeedback(text("تعذر التحقق من الحساب. أعد تحميل الصفحة.", "Could not verify the account. Reload this page."), true);
    }
  }

  window.addEventListener("sakeena:languagechange", renderAppointments);
  void initialize();
})();
