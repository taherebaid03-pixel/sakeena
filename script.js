const defaultProperties = [
  {
    id: 1, title: "شقة فاخرة بإطلالة مفتوحة", area: "التجمع الخامس", city: "القاهرة الجديدة",
    price: 2850000, kind: "للبيع", type: "شقة", beds: 3, baths: 2, size: 165, lat: 30.018, lng: 31.433,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    publisher: "محمود حسن", initials: "م ح", phone: "201000000001"
  },
  {
    id: 2, title: "فيلا مستقلة بحديقة خاصة", area: "الشيخ زايد", city: "الشيخ زايد",
    price: 4200000, kind: "للبيع", type: "فيلا", beds: 4, baths: 3, size: 280, lat: 30.061, lng: 30.976,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    publisher: "سارة علي", initials: "س ع", phone: "201000000002"
  },
  {
    id: 3, title: "شقة مفروشة بتصميم هادئ", area: "المعادي", city: "المعادي، القاهرة",
    price: 25000, kind: "للإيجار", type: "شقة", beds: 2, baths: 2, size: 130, lat: 29.961, lng: 31.257,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    publisher: "ياسمين فؤاد", initials: "ي ف", phone: "201000000003"
  },
  {
    id: 4, title: "وحدة عصرية في كمبوند راقٍ", area: "العاصمة الإدارية", city: "العاصمة الإدارية",
    price: 2500000, kind: "للبيع", type: "شقة", beds: 3, baths: 2, size: 155, lat: 30.012, lng: 31.755,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    publisher: "كريم عادل", initials: "ك ع", phone: "201000000004"
  },
  {
    id: 5, title: "دوبلكس واسع بتشطيبات مميزة", area: "التجمع الخامس", city: "القاهرة الجديدة",
    price: 3650000, kind: "للبيع", type: "دوبلكس", beds: 4, baths: 3, size: 220, lat: 30.004, lng: 31.426,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    publisher: "أحمد سامي", initials: "أ س", phone: "201000000005"
  },
  {
    id: 6, title: "شاليه قريب من البحر", area: "الساحل الشمالي", city: "الساحل الشمالي",
    price: 3100000, kind: "للبيع", type: "شاليه", beds: 2, baths: 1, size: 110, lat: 30.82, lng: 28.95,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    publisher: "نورهان عادل", initials: "ن ع", phone: "201000000006"
  },
  {
    id: 7, title: "شقة واسعة قريبة من الخدمات", area: "مدينة نصر", city: "مدينة نصر، القاهرة",
    price: 1850000, kind: "للبيع", type: "شقة", beds: 3, baths: 2, size: 145, lat: 30.056, lng: 31.329,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    publisher: "منى إبراهيم", initials: "م إ", phone: "201000000007"
  },
  {
    id: 8, title: "شقة مفروشة للإيجار في الإسكندرية", area: "الإسكندرية", city: "الإسكندرية",
    price: 22000, kind: "للإيجار", type: "شقة", beds: 2, baths: 1, size: 115, lat: 31.205, lng: 29.924,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    publisher: "عمر يوسف", initials: "ع ي", phone: "201000000008"
  },
  {
    id: 9, title: "شاليه بإطلالة على البحر في العين السخنة", area: "العين السخنة", city: "العين السخنة",
    price: 3200000, kind: "للبيع", type: "شاليه", beds: 2, baths: 2, size: 125, lat: 29.596, lng: 32.338,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    publisher: "دينا خالد", initials: "د خ", phone: "201000000009"
  },
  {
    id: 10, title: "شقة عائلية بتشطيب حديث", area: "السادس من أكتوبر", city: "السادس من أكتوبر، الجيزة",
    price: 2400000, kind: "للبيع", type: "شقة", beds: 3, baths: 2, size: 160, lat: 29.959, lng: 30.912,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    publisher: "حسام علي", initials: "ح ع", phone: "201000000010"
  },
  {
    id: 11, title: "شاليه للإيجار في الساحل الشمالي", area: "الساحل الشمالي", city: "الساحل الشمالي",
    price: 18000, kind: "للإيجار", type: "شاليه", beds: 2, baths: 1, size: 105, lat: 30.825, lng: 28.96,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    publisher: "ليلى سمير", initials: "ل س", phone: "201000000011"
  },
  {
    id: 12, title: "شقة بإطلالة هادئة في المعادي", area: "المعادي", city: "المعادي، القاهرة",
    price: 2650000, kind: "للبيع", type: "شقة", beds: 3, baths: 2, size: 150, lat: 29.968, lng: 31.267,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    publisher: "طارق أحمد", initials: "ط أ", phone: "201000000012"
  },
  {
    id: 13, title: "شقة أنيقة للإيجار في الشيخ زايد", area: "الشيخ زايد", city: "الشيخ زايد",
    price: 32000, kind: "للإيجار", type: "شقة", beds: 2, baths: 2, size: 135, lat: 30.045, lng: 30.985,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    publisher: "ريم محمود", initials: "ر م", phone: "201000000013"
  },
  {
    id: 14, title: "شاليه عائلي في العين السخنة", area: "العين السخنة", city: "العين السخنة",
    price: 24000, kind: "للإيجار", type: "شاليه", beds: 3, baths: 2, size: 140, lat: 29.583, lng: 32.35,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    publisher: "زياد حسن", initials: "ز ح", phone: "201000000014"
  }
];

const savedPropertiesKey = "tito-properties";
const pinnedPropertiesKey = "sakeena-pinned-properties";
let properties = [...loadSavedProperties(), ...defaultProperties];
let pinnedPropertyIds = loadPinnedPropertyIds();
const grid = document.getElementById("property-grid");
const areaFilter = document.getElementById("area-filter");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const sortFilter = document.getElementById("sort-filter");
const resultsCount = document.getElementById("results-count");
const emptyState = document.getElementById("empty-state");
const mapPanel = document.getElementById("map-panel");
const resultsLayout = document.querySelector(".results-layout");
const mapElement = document.getElementById("real-map");
const mapStatus = document.getElementById("map-status");
const toast = document.getElementById("toast");
const supabaseConfig = window.TITO_SUPABASE_CONFIG;
const rememberSessionField = document.getElementById("remember-session-field");
const rememberSessionInput = document.getElementById("remember-session");
const rememberSessionPreferenceKey = "sakeena-remember-session";
let rememberSession = loadRememberSessionPreference();
rememberSessionInput.checked = rememberSession;
const supabaseClient = createSupabaseClient();
const authForm = document.getElementById("login-form");
const authMessage = document.getElementById("form-message");
const authNameField = document.getElementById("name-field");
const authModeToggle = document.getElementById("auth-mode-toggle");
const authSubmit = document.getElementById("auth-submit");
const loginButton = document.getElementById("open-login");
const logoutButton = document.getElementById("logout-button");
const chatLauncher = document.getElementById("chat-launcher");
const chatPanel = document.getElementById("chat-panel");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
let selectedKind = "الكل";
let toastTimer;
let propertyMap;
let propertyMarkers;
let mapInitialized = false;
let currentUser = null;
let authMode = "login";

function createSupabaseClient() {
  if (!window.supabase?.createClient || !supabaseConfig?.url || !supabaseConfig?.anonKey) return null;
  try {
    return window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey, {
      auth: { storage: createAuthStorage() }
    });
  } catch (error) {
    console.error("Supabase configuration is invalid:", error);
    return null;
  }
}

function loadRememberSessionPreference() {
  try {
    return localStorage.getItem(rememberSessionPreferenceKey) !== "false";
  } catch (error) {
    console.error("Could not read the remember-session preference:", error);
    return true;
  }
}

function createAuthStorage() {
  return {
    getItem(key) {
      return (rememberSession ? localStorage : sessionStorage).getItem(key);
    },
    setItem(key, value) {
      const activeStorage = rememberSession ? localStorage : sessionStorage;
      const inactiveStorage = rememberSession ? sessionStorage : localStorage;
      inactiveStorage.removeItem(key);
      activeStorage.setItem(key, value);
    },
    removeItem(key) {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    }
  };
}

function getSupabaseSetupMessage() {
  if (!window.supabase?.createClient) return "تعذر تحميل مكتبة Supabase. تحقق من اتصال الإنترنت.";
  if (!supabaseConfig?.url || !supabaseConfig?.anonKey) {
    return "لم يتم إعداد اتصال Supabase بعد. أكمل الإعدادات في ملف supabase-config.js.";
  }
  return "تعذر تهيئة Supabase. تحقق من رابط المشروع والمفتاح العام.";
}

const areaCoordinates = {
  "التجمع الخامس": [30.018, 31.433],
  "الشيخ زايد": [30.061, 30.976],
  "المعادي": [29.961, 31.257],
  "العاصمة الإدارية": [30.012, 31.755],
  "الساحل الشمالي": [30.82, 28.95],
  "مدينة نصر": [30.056, 31.329],
  "الإسكندرية": [31.205, 29.924],
  "العين السخنة": [29.596, 32.338],
  "السادس من أكتوبر": [29.959, 30.912]
};

const areaCities = {
  "التجمع الخامس": "القاهرة الجديدة",
  "الشيخ زايد": "الشيخ زايد",
  "المعادي": "المعادي، القاهرة",
  "العاصمة الإدارية": "العاصمة الإدارية",
  "الساحل الشمالي": "الساحل الشمالي",
  "مدينة نصر": "مدينة نصر، القاهرة",
  "الإسكندرية": "الإسكندرية",
  "العين السخنة": "العين السخنة",
  "السادس من أكتوبر": "السادس من أكتوبر، الجيزة"
};

function loadSavedProperties() {
  try {
    const saved = localStorage.getItem(savedPropertiesKey);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new Error("Saved property data must be an array.");
    return parsed;
  } catch (error) {
    console.error("Could not load saved Sakeena listings:", error);
    return [];
  }
}

function loadPinnedPropertyIds() {
  try {
    const saved = localStorage.getItem(pinnedPropertiesKey);
    if (!saved) return new Set();
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.some((id) => typeof id !== "string" && typeof id !== "number")) {
      throw new Error("Pinned property data must be an array of IDs.");
    }
    return new Set(parsed.map(String));
  } catch (error) {
    console.error("Could not load pinned Sakeena listings:", error);
    return new Set();
  }
}

function savePinnedPropertyIds(ids) {
  try {
    localStorage.setItem(pinnedPropertiesKey, JSON.stringify([...ids]));
    return true;
  } catch (error) {
    console.error("Could not save pinned Sakeena listings:", error);
    return false;
  }
}

function saveProperties() {
  try {
    localStorage.setItem(savedPropertiesKey, JSON.stringify(properties.filter((property) => property.userAdded)));
    return true;
  } catch (error) {
    console.error("Could not save Sakeena listings:", error);
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function safeImageUrl(value) {
  if (!value) return "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80";
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? escapeHTML(url.href)
      : "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80";
  } catch (error) {
    return "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80";
  }
}

function formatPrice(price, kind) {
  if (kind === "للإيجار") {
    return `${new Intl.NumberFormat("ar-EG").format(price)} <small>جنيه / شهر</small>`;
  }
  if (price >= 1000000) {
    const millions = (price / 1000000).toLocaleString("ar-EG", { maximumFractionDigits: 2 });
    return `${millions} مليون <small>جنيه</small>`;
  }
  return `${new Intl.NumberFormat("ar-EG").format(price)} <small>جنيه</small>`;
}

function renderProperties() {
  const minimum = Number(minPrice.value) || 0;
  const maximum = Number(maxPrice.value) || Infinity;
  const selectedArea = areaFilter.value;
  let visibleProperties = properties.filter((property) => {
    return (!selectedArea || property.area === selectedArea)
      && (selectedKind === "الكل" || property.kind === selectedKind)
      && property.price >= minimum
      && property.price <= maximum;
  });

  visibleProperties.sort((a, b) => {
    const aPinned = pinnedPropertyIds.has(String(a.id));
    const bPinned = pinnedPropertyIds.has(String(b.id));
    if (aPinned !== bPinned) return aPinned ? -1 : 1;
    if (sortFilter.value === "low") return a.price - b.price;
    if (sortFilter.value === "high") return b.price - a.price;
    return 0;
  });

  grid.innerHTML = visibleProperties.map((property) => `
    <article class="property-card" data-property-id="${escapeHTML(property.id)}">
      <div class="card-image">
        <img src="${safeImageUrl(property.image)}" alt="${escapeHTML(property.title)}" loading="lazy">
        <span class="property-tag">${escapeHTML(property.kind)} · ${escapeHTML(property.type)}</span>
        <button class="favorite${pinnedPropertyIds.has(String(property.id)) ? " active" : ""}" type="button" aria-label="${pinnedPropertyIds.has(String(property.id)) ? "إلغاء تثبيت" : "تثبيت"} ${escapeHTML(property.title)}" title="${pinnedPropertyIds.has(String(property.id)) ? "إلغاء التثبيت" : "تثبيت العقار"}" aria-pressed="${pinnedPropertyIds.has(String(property.id))}">${pinnedPropertyIds.has(String(property.id)) ? "♥" : "♡"}</button>
      </div>
      <div class="card-content">
        <div class="property-price">${formatPrice(property.price, property.kind)}</div>
        <h3>${escapeHTML(property.title)}</h3>
        <div class="property-location"><span>⌖</span>${escapeHTML(property.city)}</div>
        <div class="property-meta">
          <span>▤ ${property.beds} غرف</span>
          <span>▣ ${property.baths} حمام</span>
          <span>⌗ ${new Intl.NumberFormat("ar-EG").format(property.size)} م²</span>
        </div>
        <div class="card-footer">
          <div class="publisher"><span class="publisher-avatar">${escapeHTML(property.initials)}</span>${escapeHTML(property.publisher)}</div>
          <a class="contact-button" href="https://wa.me/${escapeHTML(property.phone)}?text=${encodeURIComponent(`مرحباً، أنا مهتم بإعلان: ${property.title}`)}" target="_blank" rel="noopener noreferrer">تواصل واتساب ↗</a>
        </div>
      </div>
    </article>
  `).join("");

  resultsCount.textContent = `(${new Intl.NumberFormat("ar-EG").format(visibleProperties.length)} عقارات)`;
  emptyState.hidden = visibleProperties.length !== 0;
  grid.hidden = visibleProperties.length === 0;
  renderMapMarkers(visibleProperties);
}

function createPopup(property) {
  const popup = document.createElement("div");
  popup.className = "map-popup";

  const title = document.createElement("strong");
  title.textContent = property.title;

  const location = document.createElement("span");
  location.textContent = `${property.area} · ${property.kind}`;

  const price = document.createElement("b");
  price.textContent = `${new Intl.NumberFormat("ar-EG").format(property.price)} جنيه${property.kind === "للإيجار" ? " / شهر" : ""}`;

  const contact = document.createElement("a");
  contact.textContent = "تواصل واتساب";
  contact.href = `https://wa.me/${property.phone}?text=${encodeURIComponent(`مرحباً، أنا مهتم بإعلان: ${property.title}`)}`;
  contact.target = "_blank";
  contact.rel = "noopener noreferrer";

  popup.append(title, location, price, contact);
  return popup;
}

function getPropertyCoordinates(property) {
  if (Number.isFinite(Number(property.lat)) && Number.isFinite(Number(property.lng))) {
    return [Number(property.lat), Number(property.lng)];
  }
  return areaCoordinates[property.area] || null;
}

function renderMapMarkers(visibleProperties) {
  if (!propertyMap || !propertyMarkers) return;
  propertyMarkers.clearLayers();
  visibleProperties.forEach((property) => {
    const coordinates = getPropertyCoordinates(property);
    if (!coordinates) return;
    const priceText = property.price >= 1000000
      ? `${(property.price / 1000000).toLocaleString("ar-EG", { maximumFractionDigits: 2 })}م`
      : `${new Intl.NumberFormat("ar-EG").format(property.price)}`;
    const icon = L.divIcon({
      className: "property-map-icon",
      html: `<span>${escapeHTML(priceText)}</span>`,
      iconSize: [74, 34],
      iconAnchor: [37, 34]
    });

    L.marker(coordinates, { icon })
      .bindPopup(createPopup(property), { maxWidth: 240 })
      .addTo(propertyMarkers);
  });
}

function initializeMap() {
  if (mapInitialized) return;
  if (!window.L) {
    mapStatus.hidden = false;
    mapStatus.textContent = "تعذّر تحميل الخريطة. تأكد من اتصال الإنترنت ثم أعد تحميل الصفحة.";
    return;
  }

  propertyMap = L.map(mapElement, {
    zoomControl: false,
    scrollWheelZoom: true
  }).setView([30.0444, 31.2357], 8);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
  }).addTo(propertyMap);

  propertyMarkers = L.featureGroup().addTo(propertyMap);
  mapInitialized = true;
  renderMapMarkers(properties);
  if (propertyMarkers.getLayers().length) {
    propertyMap.fitBounds(propertyMarkers.getBounds().pad(0.18), { maxZoom: 9 });
  }
  mapStatus.hidden = true;
}

function focusMapOnArea(area) {
  const coordinates = areaCoordinates[area];
  if (propertyMap && coordinates) propertyMap.setView(coordinates, 13);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function getUserDisplayName(user) {
  const displayName = user.user_metadata?.display_name;
  if (typeof displayName === "string" && displayName.trim()) return displayName.trim();
  return user.email?.split("@")[0] || "صديقنا";
}

function setAuthMessage(message, isError = false) {
  authMessage.textContent = message;
  authMessage.classList.toggle("error", isError);
}

function configureAuthMode(mode) {
  authMode = mode;
  const isRegistering = mode === "register";
  authNameField.hidden = !isRegistering;
  rememberSessionField.hidden = isRegistering;
  authNameField.querySelector("input").required = isRegistering;
  authForm.querySelector('input[type="password"]').autocomplete = isRegistering
    ? "new-password"
    : "current-password";
  document.getElementById("login-title").textContent = isRegistering ? "إنشاء حساب جديد" : "سجّل دخولك";
  document.getElementById("login-description").textContent = isRegistering
    ? "سيُحفظ اسمك وبريدك في حساب Sakeena. لا نخزن كلمة المرور بأنفسنا."
    : "سجّل دخولك لمتابعة العقارات واستخدام مساعد Sakeena.";
  authSubmit.textContent = isRegistering ? "إنشاء الحساب" : "تسجيل الدخول";
  authModeToggle.textContent = isRegistering ? "لديك حساب؟ سجّل الدخول" : "إنشاء حساب جديد";
  setAuthMessage("");
}

function updateAuthState(user) {
  currentUser = user;
  logoutButton.hidden = !user;
  loginButton.textContent = user ? "حسابي" : "تسجيل الدخول";
  authModeToggle.hidden = Boolean(user);
  authNameField.hidden = Boolean(user) || authMode !== "register";
  rememberSessionField.hidden = Boolean(user) || authMode === "register";
  authNameField.querySelector("input").required = !authNameField.hidden;
  if (user) {
    const displayName = getUserDisplayName(user);
    setAuthMessage(`أنت مسجل الدخول باسم ${displayName}.`);
  } else {
    setAuthMessage("");
  }
}

function appendChatMessage(message, sender) {
  const bubble = document.createElement("p");
  bubble.className = `chat-message ${sender}-message`;
  bubble.textContent = message;
  chatMessages.append(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.addEventListener("click", (event) => {
  const icon = event.target.closest(".favorite, .map-expand, .map-controls button, .menu-toggle, .modal-close, .chat-header button, .chat-form button");
  if (!icon) return;
  icon.classList.remove("icon-burst");
  void icon.offsetWidth;
  icon.classList.add("icon-ray-source", "icon-burst");
});

document.getElementById("search-button").addEventListener("click", renderProperties);
areaFilter.addEventListener("change", () => {
  renderProperties();
  initializeMap();
  if (areaFilter.value) focusMapOnArea(areaFilter.value);
  else if (propertyMap) propertyMap.setView([30.0444, 31.2357], 8);
});
sortFilter.addEventListener("change", renderProperties);
minPrice.addEventListener("input", renderProperties);
maxPrice.addEventListener("input", renderProperties);

document.querySelectorAll(".search-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".search-tab.selected").classList.remove("selected");
    tab.classList.add("selected");
    selectedKind = tab.dataset.kind;
    renderProperties();
  });
});

document.getElementById("clear-filters").addEventListener("click", () => {
  areaFilter.value = "";
  minPrice.value = "";
  maxPrice.value = "";
  selectedKind = "الكل";
  document.querySelectorAll(".search-tab").forEach((tab) => {
    tab.classList.toggle("selected", tab.dataset.kind === "الكل");
  });
  renderProperties();
  if (propertyMap) propertyMap.setView([30.0444, 31.2357], 8);
});

grid.addEventListener("click", (event) => {
  const favorite = event.target.closest(".favorite");
  if (!favorite) return;
  const propertyId = favorite.closest(".property-card")?.dataset.propertyId;
  if (!propertyId) return;
  const isPinned = pinnedPropertyIds.has(propertyId);
  const nextPinnedPropertyIds = new Set(pinnedPropertyIds);
  if (isPinned) nextPinnedPropertyIds.delete(propertyId);
  else nextPinnedPropertyIds.add(propertyId);
  if (!savePinnedPropertyIds(nextPinnedPropertyIds)) {
    showToast("تعذر حفظ العقار المثبت. تحقق من مساحة التخزين في المتصفح.");
    return;
  }
  pinnedPropertyIds = nextPinnedPropertyIds;
  renderProperties();
  showToast(isPinned ? "تم إلغاء تثبيت العقار." : "تم تثبيت العقار وسيظهر أولاً.");
});

document.getElementById("map-toggle").addEventListener("click", () => {
  const isMobile = window.matchMedia("(max-width: 620px)").matches;
  if (isMobile) {
    mapPanel.classList.toggle("visible");
    document.getElementById("map-toggle").innerHTML = mapPanel.classList.contains("visible")
      ? "<span>⌖</span> إخفاء الخريطة"
      : "<span>⌖</span> عرض الخريطة";
  } else {
    resultsLayout.classList.toggle("map-expanded");
    document.getElementById("map-toggle").innerHTML = resultsLayout.classList.contains("map-expanded")
      ? "<span>⌖</span> تصغير الخريطة"
      : "<span>⌖</span> تكبير الخريطة";
  }
  initializeMap();
  window.setTimeout(() => propertyMap?.invalidateSize(), 100);
});

document.getElementById("map-expand").addEventListener("click", () => {
  resultsLayout.classList.toggle("map-expanded");
  const expanded = resultsLayout.classList.contains("map-expanded");
  const button = document.getElementById("map-expand");
  button.setAttribute("aria-label", expanded ? "تصغير الخريطة" : "تكبير الخريطة");
  button.title = expanded ? "تصغير الخريطة" : "تكبير الخريطة";
  button.textContent = expanded ? "↙" : "⛶";
  initializeMap();
  window.setTimeout(() => propertyMap?.invalidateSize(), 100);
});

document.getElementById("map-zoom-in").addEventListener("click", () => {
  initializeMap();
  propertyMap?.zoomIn();
});
document.getElementById("map-zoom-out").addEventListener("click", () => {
  initializeMap();
  propertyMap?.zoomOut();
});
document.getElementById("map-reset").addEventListener("click", () => {
  initializeMap();
  if (!propertyMap) return;
  if (areaFilter.value) {
    focusMapOnArea(areaFilter.value);
    return;
  }
  if (propertyMarkers?.getLayers().length) propertyMap.fitBounds(propertyMarkers.getBounds().pad(0.18), { maxZoom: 12 });
  else propertyMap.setView([30.0444, 31.2357], 8);
});

grid.addEventListener("click", (event) => {
  if (event.target.closest(".favorite, a")) return;
  const card = event.target.closest(".property-card");
  if (!card) return;
  const property = properties.find((item) => String(item.id) === card.dataset.propertyId);
  const coordinates = property && getPropertyCoordinates(property);
  if (!coordinates) return;
  initializeMap();
  if (!propertyMap) return;
  if (window.matchMedia("(max-width: 620px)").matches) mapPanel.classList.add("visible");
  propertyMap.setView(coordinates, 15);
  propertyMarkers.eachLayer((marker) => {
    if (marker.getLatLng().lat === coordinates[0] && marker.getLatLng().lng === coordinates[1]) {
      marker.openPopup();
    }
  });
});

document.getElementById("search-button").addEventListener("click", () => {
  initializeMap();
  if (areaFilter.value) focusMapOnArea(areaFilter.value);
});

const loginModal = document.getElementById("login-modal");
const propertyModal = document.getElementById("property-modal");
loginButton.addEventListener("click", () => {
  loginModal.hidden = false;
  authForm.querySelector('input[type="email"]').focus();
});
document.getElementById("close-login").addEventListener("click", () => {
  loginModal.hidden = true;
});
authModeToggle.addEventListener("click", () => {
  configureAuthMode(authMode === "login" ? "register" : "login");
});
authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient) {
    setAuthMessage(getSupabaseSetupMessage(), true);
    return;
  }

  const formData = new FormData(authForm);
  const email = String(formData.get("email")).trim();
  const password = String(formData.get("password"));
  if (authMode === "login") {
    rememberSession = rememberSessionInput.checked;
    try {
      localStorage.setItem(rememberSessionPreferenceKey, String(rememberSession));
    } catch (error) {
      console.error("Could not save the remember-session preference:", error);
      setAuthMessage("تعذر حفظ اختيار تذكّر الدخول على هذا الجهاز.", true);
      return;
    }
  }
  authSubmit.disabled = true;
  setAuthMessage("");

  try {
    const result = authMode === "register"
      ? await supabaseClient.auth.signUp({
        email,
        password,
        options: { data: { display_name: String(formData.get("name")).trim() } }
      })
      : await supabaseClient.auth.signInWithPassword({ email, password });

    if (result.error) {
      console.error("Supabase authentication failed:", result.error);
      setAuthMessage(authMode === "register"
        ? "تعذر إنشاء الحساب. تحقق من البريد وكلمة المرور وإعداد Supabase."
        : "تعذر تسجيل الدخول. تحقق من البريد وكلمة المرور.", true);
      return;
    }

    if (authMode === "register" && !result.data.session) {
      setAuthMessage("تم إنشاء الحساب. راجع بريدك لتأكيده، ثم سجّل الدخول.");
      return;
    }

    const user = result.data.user || result.data.session?.user;
    if (!user) {
      setAuthMessage("اكتملت العملية دون استلام بيانات الحساب. حاول مرة أخرى.", true);
      return;
    }

    configureAuthMode("login");
    updateAuthState(user);
    authForm.reset();
    loginModal.hidden = true;
    showToast(`أهلًا يا ${getUserDisplayName(user)}، نورت Sakeena!`);
  } catch (error) {
    console.error("Supabase authentication request failed:", error);
    setAuthMessage("تعذر الاتصال بخدمة الحسابات. حاول مرة أخرى.", true);
  } finally {
    authSubmit.disabled = false;
  }
});
logoutButton.addEventListener("click", async () => {
  if (!supabaseClient) return;
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
    updateAuthState(null);
    showToast("تم تسجيل الخروج.");
  } catch (error) {
    console.error("Supabase sign-out failed:", error);
    showToast("تعذر تسجيل الخروج. حاول مرة أخرى.");
  }
});
document.getElementById("open-property-form").addEventListener("click", () => {
  propertyModal.hidden = false;
  propertyModal.querySelector("input").focus();
});
document.getElementById("close-property-form").addEventListener("click", () => {
  propertyModal.hidden = true;
});
loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) loginModal.hidden = true;
});
propertyModal.addEventListener("click", (event) => {
  if (event.target === propertyModal) propertyModal.hidden = true;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    loginModal.hidden = true;
    propertyModal.hidden = true;
    chatPanel.hidden = true;
    chatLauncher.setAttribute("aria-expanded", "false");
  }
});

if (supabaseClient) {
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    updateAuthState(session?.user || null);
  });
  supabaseClient.auth.getSession()
    .then(({ data, error }) => {
      if (error) {
        console.error("Could not restore the Supabase session:", error);
        setAuthMessage("تعذر استعادة جلسة الدخول. سجّل الدخول مرة أخرى.", true);
        return;
      }
      updateAuthState(data.session?.user || null);
    })
    .catch((error) => {
      console.error("Could not restore the Supabase session:", error);
      setAuthMessage("تعذر الاتصال بخدمة الحسابات.", true);
    });
}
chatLauncher.addEventListener("click", () => {
  chatPanel.hidden = !chatPanel.hidden;
  chatLauncher.setAttribute("aria-expanded", String(!chatPanel.hidden));
  if (!chatPanel.hidden) chatInput.focus();
});
document.getElementById("chat-close").addEventListener("click", () => {
  chatPanel.hidden = true;
  chatLauncher.setAttribute("aria-expanded", "false");
});
document.getElementById("chat-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;
  appendChatMessage(message, "user");
  chatInput.value = "";

  if (!supabaseClient) {
    appendChatMessage(`${getSupabaseSetupMessage()} أضف أيضًا مفتاح خدمة الذكاء الاصطناعي على الخادم.`, "assistant");
    return;
  }
  if (!currentUser) {
    appendChatMessage("سجّل دخولك أولًا لاستخدام مساعد العقارات.", "assistant");
    loginModal.hidden = false;
    authForm.querySelector('input[type="email"]').focus();
    return;
  }

  const sendButton = event.currentTarget.querySelector('button[type="submit"]');
  sendButton.disabled = true;
  try {
    const listingSummary = properties.slice(0, 20).map(({ title, area, kind, type, price, beds, baths, size }) => ({
      title, area, kind, type, price, beds, baths, size
    }));
    const { data, error } = await supabaseClient.functions.invoke("chat", {
      body: { message, properties: listingSummary }
    });
    if (error) throw error;
    if (typeof data?.reply !== "string" || !data.reply.trim()) {
      throw new Error("Chat function returned no reply.");
    }
    appendChatMessage(data.reply.trim(), "assistant");
  } catch (error) {
    console.error("Sakeena chatbot request failed:", error);
    if (error?.context instanceof Response) {
      try {
        const responseBody = await error.context.clone().json();
        if (error.context.status === 404 && responseBody.code === "NOT_FOUND") {
          appendChatMessage("خدمة الشات غير منشورة في Supabase بعد. انشر Edge Function باسم chat ثم حاول مرة أخرى.", "assistant");
          return;
        }
        if (typeof responseBody.error === "string") {
          appendChatMessage(responseBody.error, "assistant");
          return;
        }
      } catch (responseError) {
        console.error("Could not read the chatbot error response:", responseError);
      }
    }
    appendChatMessage("تعذر الحصول على رد الآن. تحقق من الاتصال وحاول مرة أخرى.", "assistant");
  } finally {
    sendButton.disabled = false;
    chatInput.focus();
  }
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `رسالة تواصل من ${String(data.get("name")).trim()}`;
  const body = [
    `الاسم: ${String(data.get("name")).trim()}`,
    `البريد الإلكتروني: ${String(data.get("email")).trim()}`,
    "",
    String(data.get("message")).trim()
  ].join("\n");
  const gmailUrl = new URL("https://mail.google.com/mail/");
  gmailUrl.searchParams.set("view", "cm");
  gmailUrl.searchParams.set("fs", "1");
  gmailUrl.searchParams.set("to", "taherebaid55@gmail.com");
  gmailUrl.searchParams.set("su", subject);
  gmailUrl.searchParams.set("body", body);

  const composeWindow = window.open(gmailUrl.href, "_blank");
  if (composeWindow) {
    composeWindow.opener = null;
    return;
  }

  const mailtoUrl = new URL("mailto:taherebaid55@gmail.com");
  mailtoUrl.searchParams.set("subject", subject);
  mailtoUrl.searchParams.set("body", body);
  window.location.href = mailtoUrl.href;
});

document.getElementById("financing-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const price = Number(formData.get("price"));
  const years = Number(formData.get("years"));
  const rateValue = String(formData.get("annual-rate") || "").trim();
  const annualRate = rateValue ? Number(rateValue) : 0;
  if (!Number.isFinite(price) || price <= 0
    || !Number.isInteger(years) || years < 1 || years > 40
    || !Number.isFinite(annualRate) || annualRate < 0 || annualRate > 100) {
    showToast("راجع سعر العقار ومدة السداد ونسبة الفائدة.");
    return;
  }

  const months = years * 12;
  const monthlyRate = annualRate / 1200;
  const monthlyPayment = monthlyRate === 0
    ? price / months
    : price * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));

  if (!Number.isFinite(monthlyPayment)) {
    console.error("Could not calculate the estimated monthly installment.");
    showToast("تعذر حساب القسط. راجع البيانات وحاول مرة أخرى.");
    return;
  }

  const totalPayment = monthlyPayment * months;
  const formatCurrency = (amount) =>
    `${new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 2 }).format(amount)} جنيه`;
  document.getElementById("monthly-installment").textContent = formatCurrency(monthlyPayment);
  document.getElementById("total-payment").textContent = formatCurrency(totalPayment);
  document.getElementById("total-interest").textContent = formatCurrency(Math.max(0, totalPayment - price));
  document.getElementById("financing-result").hidden = false;
});

document.getElementById("property-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const title = String(data.get("title")).trim();
  const publisher = String(data.get("publisher")).trim();
  const area = String(data.get("area"));
  const phoneDigits = String(data.get("phone")).replace(/\D/g, "");
  const localPhone = phoneDigits.startsWith("0") ? phoneDigits.slice(1) : phoneDigits;
  const whatsappPhone = `20${localPhone}`;
  const property = {
    id: `user-${Date.now()}`,
    title,
    area,
    city: areaCities[area] || area,
    price: Number(data.get("price")),
    kind: String(data.get("kind")),
    type: String(data.get("type")),
    beds: Number(data.get("beds")),
    baths: Number(data.get("baths")),
    size: Number(data.get("size")),
    image: String(data.get("image")).trim(),
    lat: areaCoordinates[area][0],
    lng: areaCoordinates[area][1],
    publisher,
    initials: publisher.slice(0, 2),
    phone: whatsappPhone,
    userAdded: true
  };

  properties.unshift(property);
  const saved = saveProperties();
  renderProperties();
  initializeMap();
  form.reset();
  propertyModal.hidden = true;
  showToast(saved
    ? "تم نشر إعلانك وحفظه على هذا الجهاز."
    : "تم عرض إعلانك، لكن لم نتمكن من حفظه على هذا الجهاز.");
  document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});

renderProperties();
initializeMap();