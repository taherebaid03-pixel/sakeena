(async () => {
  const query = new URLSearchParams(window.location.search);
  const propertyId = query.get("id");
  const supabaseClient = window.SakeenaBackend?.createClient() || null;
  let property = null;
  let databaseLoadError = null;

  try {
    const stored = sessionStorage.getItem("sakeena-selected-property");
    if (stored) {
      const selected = JSON.parse(stored);
      if (String(selected.id) === propertyId) property = selected;
    }
  } catch (error) {
    console.error("Could not read the selected property details:", error);
  }

  if (!property && propertyId) {
    try {
      const saved = JSON.parse(localStorage.getItem("tito-properties") || "[]");
      if (!Array.isArray(saved)) throw new Error("Saved property data must be an array.");
      property = saved.find((savedProperty) => String(savedProperty.id) === propertyId) || null;
    } catch (error) {
      console.error("Could not read saved properties for the details page:", error);
    }
  }

  if (propertyId && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(propertyId)
    && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from("property_listings")
        .select("id,title,area,city,kind,property_type,price,beds,baths,size,description,images,lat,lng,publisher,phone,status,created_at")
        .eq("id", propertyId)
        .eq("status", "published")
        .maybeSingle();
      if (error) throw error;
      property = data ? window.SakeenaBackend.mapPropertyRow(data) : null;
    } catch (error) {
      databaseLoadError = error;
      console.error("Could not load the property details from Supabase:", error);
    }
  }

  const content = document.getElementById("property-detail-content");
  const notFound = document.getElementById("details-not-found");
  if (!property) {
    if (databaseLoadError) {
      notFound.querySelector("h1").textContent = "تعذر تحميل بيانات العقار";
      notFound.querySelector("p").textContent = "تحقق من اتصال Supabase وإعداد الجداول، ثم حاول مرة أخرى.";
    }
    notFound.hidden = false;
    return;
  }

  try {
    const stored = JSON.parse(localStorage.getItem("sakeena-viewed-properties") || "[]");
    if (!Array.isArray(stored) || stored.some((id) => typeof id !== "string" && typeof id !== "number")) {
      throw new Error("Viewed property history must be an array of IDs.");
    }
    const viewed = [String(property.id), ...stored.map(String).filter((id) => id !== String(property.id))].slice(0, 10);
    localStorage.setItem("sakeena-viewed-properties", JSON.stringify(viewed));
  } catch (error) {
    console.error("Could not save recently viewed properties:", error);
    document.getElementById("detail-message").textContent =
      document.documentElement.lang === "en" ? "Could not save viewing history in this browser." : "تعذر حفظ سجل المشاهدات في هذا المتصفح.";
  }

  const locale = () => document.documentElement.lang === "en" ? "en-US" : "ar-EG";
  const currency = () => document.documentElement.lang === "en" ? "EGP" : "جنيه";
  const images = (Array.isArray(property.images) ? property.images : [property.image])
    .filter((image) => typeof image === "string" && /^https?:\/\//i.test(image));
  if (!images.length) {
    images.push("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85");
  }

  const setText = (id, value) => {
    document.getElementById(id).textContent = String(value ?? "");
  };
  const imageElement = document.getElementById("detail-image");
  const thumbnails = document.getElementById("gallery-thumbnails");
  let currentImage = 0;

  function renderGallery() {
    imageElement.src = images[currentImage];
    imageElement.alt = `${property.title} - ${currentImage + 1}`;
    document.getElementById("gallery-counter").textContent =
      `${new Intl.NumberFormat(locale()).format(currentImage + 1)} / ${new Intl.NumberFormat(locale()).format(images.length)}`;
    thumbnails.replaceChildren();
    images.forEach((image, index) => {
      const thumbnail = document.createElement("button");
      thumbnail.type = "button";
      thumbnail.className = `gallery-thumbnail${index === currentImage ? " active" : ""}`;
      thumbnail.setAttribute("aria-label", `${document.documentElement.lang === "en" ? "Show photo" : "عرض الصورة"} ${index + 1}`);
      const thumbnailImage = document.createElement("img");
      thumbnailImage.src = image;
      thumbnailImage.alt = "";
      thumbnail.append(thumbnailImage);
      thumbnail.addEventListener("click", () => {
        currentImage = index;
        renderGallery();
      });
      thumbnails.append(thumbnail);
    });
  }

  setText("detail-title", property.title);
  setText("detail-location", `${property.area} · ${property.city}`);
  setText("detail-tag", `${property.kind} · ${property.type}`);
  const price = new Intl.NumberFormat(locale()).format(property.price);
  document.getElementById("detail-price").innerHTML =
    `${price} <small>${currency()}${property.kind === "للإيجار" ? (locale() === "en-US" ? " / month" : " / شهر") : ""}</small>`;
  const areaPrice = Number(property.price) / Number(property.size);
  setText("detail-unit-price", `${document.documentElement.lang === "en" ? "Price per m²" : "سعر المتر"}: ${new Intl.NumberFormat(locale(), { maximumFractionDigits: 0 }).format(areaPrice)} ${currency()}`);
  setText("detail-type", `${property.kind} · ${property.type}`);
  setText("detail-size", `${new Intl.NumberFormat(locale()).format(property.size)} m²`);
  setText("detail-beds", `${new Intl.NumberFormat(locale()).format(property.beds)}`);
  setText("detail-baths", `${new Intl.NumberFormat(locale()).format(property.baths)}`);
  setText("detail-city", property.city);
  setText("detail-description", property.description || (
    document.documentElement.lang === "en"
      ? `${property.type} listed ${property.kind.toLowerCase()} in ${property.area}, ${property.size} m². Contact the owner for further details.`
      : `${property.type} ${property.kind} في ${property.area} بمساحة ${property.size} متر مربع. تواصل مع صاحب الإعلان لمزيد من التفاصيل.`
  ));
  setText("detail-initials", property.initials || String(property.publisher || "").slice(0, 2));
  setText("detail-publisher", property.publisher || (document.documentElement.lang === "en" ? "Property owner" : "صاحب العقار"));

  const contact = document.getElementById("detail-contact");
  contact.href = `https://wa.me/${encodeURIComponent(property.phone)}?text=${encodeURIComponent(`مرحباً، أنا مهتم بإعلان: ${property.title}`)}`;
  const mapLink = document.getElementById("detail-map");
  if (Number.isFinite(Number(property.lat)) && Number.isFinite(Number(property.lng))) {
    mapLink.href = `https://www.openstreetmap.org/?mlat=${encodeURIComponent(property.lat)}&mlon=${encodeURIComponent(property.lng)}#map=15/${encodeURIComponent(property.lat)}/${encodeURIComponent(property.lng)}`;
  } else {
    mapLink.hidden = true;
  }
  const roiLink = document.getElementById("roi-calculator-link");
  roiLink.hidden = property.kind !== "للبيع";
  roiLink.href = `financing.html?price=${encodeURIComponent(property.price)}`;
  const galleryPrevious = document.getElementById("gallery-previous");
  const galleryNext = document.getElementById("gallery-next");
  galleryPrevious.hidden = images.length < 2;
  galleryNext.hidden = images.length < 2;
  galleryPrevious.addEventListener("click", () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    renderGallery();
  });
  galleryNext.addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    renderGallery();
  });

  const favoriteButton = document.getElementById("detail-favorite");
  const favoritesKey = "sakeena-pinned-properties";
  let favoriteIds = new Set();
  try {
    const savedIds = JSON.parse(localStorage.getItem(favoritesKey) || "[]");
    if (!Array.isArray(savedIds) || savedIds.some((id) => typeof id !== "string" && typeof id !== "number")) {
      throw new Error("Saved favorites must be an array of IDs.");
    }
    favoriteIds = new Set(savedIds.map(String));
  } catch (error) {
    console.error("Could not load property favorites:", error);
    document.getElementById("detail-message").textContent =
      document.documentElement.lang === "en" ? "Favorites could not be loaded from this browser." : "تعذر تحميل المفضلة من هذا المتصفح.";
  }

  function updateFavoriteButton() {
    const selected = favoriteIds.has(String(property.id));
    favoriteButton.classList.toggle("active", selected);
    favoriteButton.setAttribute("aria-pressed", String(selected));
    favoriteButton.textContent = selected
      ? (document.documentElement.lang === "en" ? "♥ Saved to favorites" : "♥ محفوظ في المفضلة")
      : (document.documentElement.lang === "en" ? "♡ Save to favorites" : "♡ حفظ في المفضلة");
  }
  favoriteButton.addEventListener("click", () => {
    const id = String(property.id);
    const wasFavorite = favoriteIds.has(id);
    if (wasFavorite) favoriteIds.delete(id);
    else favoriteIds.add(id);
    try {
      localStorage.setItem(favoritesKey, JSON.stringify([...favoriteIds]));
    } catch (error) {
      console.error("Could not save property favorites:", error);
      if (wasFavorite) favoriteIds.add(id);
      else favoriteIds.delete(id);
      updateFavoriteButton();
      document.getElementById("detail-message").textContent =
        document.documentElement.lang === "en" ? "Could not save favorites in this browser." : "تعذر حفظ المفضلة في هذا المتصفح.";
      return;
    }
    updateFavoriteButton();
  });
  renderGallery();
  updateFavoriteButton();
  content.hidden = false;

  async function setupAppointmentForm() {
    const panel = document.getElementById("appointment-panel");
    const accessMessage = document.getElementById("appointment-access-message");
    const form = document.getElementById("appointment-form");
    const message = document.getElementById("appointment-message");
    if (property.source !== "supabase") {
      panel.hidden = false;
      accessMessage.textContent = "حجز المعاينة متاح للإعلانات المنشورة عبر حسابات المستخدمين.";
      return;
    }

    panel.hidden = false;
    if (!supabaseClient) {
      accessMessage.textContent = "تعذر الاتصال بنظام الحجز. تحقق من إعداد Supabase.";
      return;
    }

    let session;
    try {
      const { data, error } = await supabaseClient.auth.getSession();
      if (error) throw error;
      session = data.session;
    } catch (error) {
      console.error("Could not check the session before booking:", error);
      accessMessage.textContent = "تعذر التحقق من تسجيل الدخول. أعد تحميل الصفحة.";
      return;
    }

    if (!session?.user) {
      accessMessage.textContent = "سجّل الدخول أولًا لإرسال طلب معاينة.";
      const loginLink = document.createElement("a");
      loginLink.href = "index.html?login=1";
      loginLink.textContent = "تسجيل الدخول";
      accessMessage.append(" ", loginLink);
      return;
    }

    accessMessage.textContent = "اختر موعدًا مناسبًا، وسيراجع صاحب الإعلان طلبك.";
    const dateInput = form.elements.namedItem("scheduled-at");
    const minimumDate = new Date(Date.now() + 60 * 60 * 1000);
    const maximumDate = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000);
    const asLocalDateTime = (date) => {
      const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      return localDate.toISOString().slice(0, 16);
    };
    dateInput.min = asLocalDateTime(minimumDate);
    dateInput.max = asLocalDateTime(maximumDate);
    form.hidden = false;
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      message.textContent = "";
      try {
        const scheduledAt = new Date(dateInput.value);
        if (!Number.isFinite(scheduledAt.getTime())) throw new Error("Choose a valid appointment time.");
        const { error } = await supabaseClient.from("property_appointments").insert({
          property_id: property.id,
          requester_id: session.user.id,
          requester_phone: String(new FormData(form).get("phone")).trim(),
          scheduled_at: scheduledAt.toISOString(),
          note: String(new FormData(form).get("note") || "").trim()
        });
        if (error) throw error;
        form.reset();
        dateInput.min = asLocalDateTime(new Date(Date.now() + 60 * 60 * 1000));
        message.textContent = "تم إرسال طلب المعاينة. يمكنك متابعة حالته من صفحة مواعيدي.";
      } catch (error) {
        console.error("Could not submit the property appointment:", error);
        message.textContent = error.code === "23505"
          ? "هذا الموعد محجوز بالفعل. اختر وقتًا آخر."
          : error.code === "P0001" && String(error.message).includes("own property")
            ? "لا يمكنك حجز معاينة لعقارك."
            : "تعذر إرسال الطلب. تحقق من التاريخ والاتصال وحاول مرة أخرى.";
      } finally {
        submitButton.disabled = false;
      }
    });
  }

  await setupAppointmentForm();

  window.addEventListener("sakeena:languagechange", () => {
    setText("detail-location", `${property.area} · ${property.city}`);
    const currentPrice = new Intl.NumberFormat(locale()).format(property.price);
    document.getElementById("detail-price").innerHTML =
      `${currentPrice} <small>${currency()}${property.kind === "للإيجار" ? (locale() === "en-US" ? " / month" : " / شهر") : ""}</small>`;
    setText("detail-unit-price", `${document.documentElement.lang === "en" ? "Price per m²" : "سعر المتر"}: ${new Intl.NumberFormat(locale(), { maximumFractionDigits: 0 }).format(areaPrice)} ${currency()}`);
    setText("detail-size", `${new Intl.NumberFormat(locale()).format(property.size)} m²`);
    setText("detail-beds", new Intl.NumberFormat(locale()).format(property.beds));
    setText("detail-baths", new Intl.NumberFormat(locale()).format(property.baths));
    setText("detail-description", property.description || (
      document.documentElement.lang === "en"
        ? `${property.type} listed ${property.kind.toLowerCase()} in ${property.area}, ${property.size} m². Contact the owner for further details.`
        : `${property.type} ${property.kind} في ${property.area} بمساحة ${property.size} متر مربع. تواصل مع صاحب الإعلان لمزيد من التفاصيل.`
    ));
    renderGallery();
    updateFavoriteButton();
  });
})().catch((error) => {
  console.error("Could not initialize the property details page:", error);
  const message = document.getElementById("appointment-message");
  if (message) message.textContent = "تعذر تحميل بيانات الصفحة. أعد المحاولة بعد التحقق من الاتصال.";
  document.getElementById("details-not-found").hidden = false;
});
