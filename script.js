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
const viewedPropertiesKey = "sakeena-viewed-properties";
let properties = [...loadSavedProperties(), ...defaultProperties];
let pinnedPropertyIds = loadPinnedPropertyIds();
const grid = document.getElementById("property-grid");
const areaFilter = document.getElementById("area-filter");
const cityFilter = document.getElementById("city-filter");
const propertyTypeFilter = document.getElementById("property-type-filter");
const bedsFilter = document.getElementById("beds-filter");
const bathsFilter = document.getElementById("baths-filter");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const minSize = document.getElementById("min-size");
const maxSize = document.getElementById("max-size");
const favoritesOnly = document.getElementById("favorites-only");
const sortFilter = document.getElementById("sort-filter");
const resultsCount = document.getElementById("results-count");
const emptyState = document.getElementById("empty-state");
const mapPanel = document.getElementById("map-panel");
const resultsLayout = document.querySelector(".results-layout");
const mapToggle = document.getElementById("map-toggle");
const mapExpand = document.getElementById("map-expand");
const compactMapLayout = window.matchMedia("(max-width: 1000px), (pointer: coarse)");
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
const propertyMessage = document.getElementById("property-message");
const loginButton = document.getElementById("open-login");
const logoutButton = document.getElementById("logout-button");
const chatLauncher = document.getElementById("chat-launcher");
const chatPanel = document.getElementById("chat-panel");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatForm = document.getElementById("chat-form");
const chatVoiceButton = document.getElementById("chat-voice-button");
const assistantVoiceToggle = document.getElementById("assistant-voice-toggle");
const propertyQuery = document.getElementById("property-query");
const voiceSearchButton = document.getElementById("voice-search-button");
let selectedKind = "الكل";
let toastTimer;
let activeVoiceRecognition = null;
let activeVoiceButton = null;
let voiceRepliesEnabled = false;
let propertyMap;
let propertyMarkers;
let mapInitialized = false;
let mapStylesheetPromise;
let mapLibraryPromise;
let currentUser = null;
let authMode = "login";
let comparePropertyIds = [];

function isCompactMapLayout() {
  return compactMapLayout.matches;
}

function updateMapToggleLabel() {
  const isCompact = isCompactMapLayout();
  const isOpen = isCompact
    ? mapPanel.classList.contains("visible")
    : resultsLayout.classList.contains("map-expanded");
  const isEnglish = document.documentElement.lang === "en";
  const label = isCompact
    ? (isOpen ? (isEnglish ? "Hide map" : "إخفاء الخريطة") : (isEnglish ? "Show map" : "عرض الخريطة"))
    : (isOpen ? (isEnglish ? "Shrink map" : "تصغير الخريطة") : (isEnglish ? "Expand map" : "تكبير الخريطة"));
  mapToggle.innerHTML = `<span aria-hidden="true">⌖</span> ${label}`;
  mapToggle.setAttribute("aria-expanded", String(isOpen));
}

function updateMapExpandControl() {
  const expanded = resultsLayout.classList.contains("map-expanded");
  const isEnglish = document.documentElement.lang === "en";
  const label = expanded
    ? (isEnglish ? "Shrink map" : "تصغير الخريطة")
    : (isEnglish ? "Expand map" : "تكبير الخريطة");
  mapExpand.setAttribute("aria-label", label);
  mapExpand.setAttribute("aria-expanded", String(expanded));
  mapExpand.title = label;
}

function scrollMapIntoView() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  mapPanel.scrollIntoView(reduceMotion
    ? true
    : { behavior: "smooth", block: "nearest" });
}

function updateMapSize() {
  if (!propertyMap || mapPanel.getClientRects().length === 0) return;
  window.requestAnimationFrame(() => {
    if (propertyMap && mapPanel.getClientRects().length > 0) {
      propertyMap.invalidateSize({ pan: false });
    }
  });
}

function setMapStatus(arabicMessage, englishMessage) {
  mapStatus.textContent = document.documentElement.lang === "en"
    ? englishMessage
    : arabicMessage;
}

function createSupabaseClient() {
  try {
    return window.SakeenaBackend?.createClient() || null;
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

async function loadDatabaseProperties() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient
      .from("property_listings")
      .select("id,title,area,city,kind,property_type,price,beds,baths,size,description,images,lat,lng,publisher,phone,status,created_at")
      .eq("status", "published")
      .order("created_at", { ascending: false });
    if (error) throw error;
    const databaseProperties = data.map((row) => window.SakeenaBackend.mapPropertyRow(row));
    const databaseIds = new Set(databaseProperties.map((property) => String(property.id)));
    const unpublishedDuringLoad = properties.filter((property) =>
      property.source === "supabase" && !databaseIds.has(String(property.id))
    );
    properties = [...databaseProperties, ...unpublishedDuringLoad, ...loadSavedProperties(), ...defaultProperties];
    propertyRepository.properties = properties;
    renderProperties();
  } catch (error) {
    console.error("Could not load published properties from Supabase:", error);
    showToast(error?.code === "PGRST205"
      ? "جدول إعلانات الحسابات غير ظاهر في مشروع Supabase المرتبط بالموقع. شغّل ترحيل الإعلانات والمواعيد ثم أعد تحميل الصفحة."
      : "تعذر تحميل إعلانات الحسابات. تحقق من اتصال Supabase وصلاحيات القراءة.");
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
      ? url.href
      : "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80";
  } catch (error) {
    return "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80";
  }
}

function formatPrice(price, kind) {
  const locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
  const currency = document.documentElement.lang === "en" ? "EGP" : "جنيه";
  if (kind === "للإيجار") {
    return `${new Intl.NumberFormat(locale).format(price)} <small>${currency} / ${locale === "en-US" ? "month" : "شهر"}</small>`;
  }
  if (price >= 1000000) {
    const millions = (price / 1000000).toLocaleString(locale, { maximumFractionDigits: 2 });
    return `${millions} ${locale === "en-US" ? "million" : "مليون"} <small>${currency}</small>`;
  }
  return `${new Intl.NumberFormat(locale).format(price)} <small>${currency}</small>`;
}

class PropertyRepository {
  constructor(initialProperties) {
    this.properties = initialProperties;
  }

  getAll() {
    return this.properties;
  }

  add(property) {
    this.properties.unshift(property);
  }
}

class VirtualTour {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.image = document.getElementById("tour-image");
    this.title = document.getElementById("tour-title");
    this.counter = document.getElementById("tour-counter");
    this.stage = document.getElementById("tour-stage");
    this.views = [];
    this.index = 0;
    this.dragStartX = null;
    this.bindEvents();
  }

  buildViews(property) {
    const baseImage = safeImageUrl(property.image);
    return [
      { label: "المنظر الرئيسي", image: baseImage },
      { label: "غرفة المعيشة", image: this.withTransform(baseImage, 161182) },
      { label: "مساحة المعيشة", image: this.withTransform(baseImage, 160060) }
    ];
  }

  withTransform(imageUrl, photoId) {
    try {
      const url = new URL(imageUrl);
      if (url.hostname.includes("unsplash.com")) {
        url.pathname = url.pathname.replace(/photo-[^/]+/, `photo-${photoId}`);
      }
      return url.href;
    } catch (error) {
      return imageUrl;
    }
  }

  open(property) {
    this.property = property;
    this.views = this.buildViews(property);
    this.index = 0;
    this.title.textContent = property.title;
    this.modal.hidden = false;
    this.render();
  }

  close() {
    this.modal.hidden = true;
  }

  render() {
    const view = this.views[this.index];
    if (!view) return;
    this.image.style.opacity = "0";
    window.requestAnimationFrame(() => {
      this.image.src = view.image;
      this.image.alt = `${this.property.title} - ${view.label}`;
      this.image.style.opacity = "1";
    });
    this.counter.textContent = `${view.label} · ${this.index + 1} / ${this.views.length}`;
  }

  move(direction) {
    if (!this.views.length) return;
    this.index = (this.index + direction + this.views.length) % this.views.length;
    this.render();
  }

  bindEvents() {
    document.getElementById("tour-close").addEventListener("click", () => this.close());
    document.getElementById("tour-prev").addEventListener("click", () => this.move(-1));
    document.getElementById("tour-next").addEventListener("click", () => this.move(1));
    this.modal.addEventListener("click", (event) => {
      if (event.target === this.modal) this.close();
    });
    this.stage.addEventListener("pointerdown", (event) => {
      this.dragStartX = event.clientX;
      this.stage.classList.add("dragging");
      this.stage.setPointerCapture?.(event.pointerId);
    });
    this.stage.addEventListener("pointerup", (event) => {
      if (this.dragStartX !== null) {
        const distance = event.clientX - this.dragStartX;
        if (Math.abs(distance) > 45) this.move(distance > 0 ? -1 : 1);
      }
      this.dragStartX = null;
      this.stage.classList.remove("dragging");
    });
  }
}

function renderProperties() {
  const locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
  const minimum = Number(minPrice.value) || 0;
  const maximum = Number(maxPrice.value) || Infinity;
  const minimumSize = Number(minSize.value) || 0;
  const maximumSize = Number(maxSize.value) || Infinity;
  const searchStopWords = new Set(["في", "فى", "من", "على", "إلى", "الى", "عن", "and", "the", "for", "in", "near", "me", "i", "want", "find", "looking"]);
  const queryTerms = normalizeSearchText(propertyQuery.value)
    .split(/\s+/)
    .filter((term) => term && !searchStopWords.has(term));
  const selectedArea = areaFilter.value;
  const selectedCity = cityFilter.value;
  const selectedType = propertyTypeFilter.value;
  const selectedBeds = bedsFilter.value;
  const selectedBaths = bathsFilter.value;
  const countMatches = (value, selection) => {
    if (!selection) return true;
    return selection.endsWith("+")
      ? Number(value) >= Number(selection.slice(0, -1))
      : Number(value) === Number(selection);
  };
  let visibleProperties = properties.filter((property) => {
    const searchableText = normalizeSearchText([
      property.title,
      property.area,
      property.city,
      property.type,
      property.kind,
      property.description || ""
    ].join(" "));
    return (!selectedArea || property.area === selectedArea)
      && (!selectedCity || property.city === selectedCity)
      && (!selectedType || property.type === selectedType)
      && (selectedKind === "الكل" || property.kind === selectedKind)
      && property.price >= minimum
      && property.price <= maximum
      && property.size >= minimumSize
      && property.size <= maximumSize
      && countMatches(property.beds, selectedBeds)
      && countMatches(property.baths, selectedBaths)
      && (!favoritesOnly.checked || pinnedPropertyIds.has(String(property.id)))
      && queryTerms.every((term) => searchableText.includes(term));
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
        <img src="${escapeHTML(safeImageUrl(property.image))}" alt="${escapeHTML(property.title)}" loading="lazy">
        <span class="property-tag">${escapeHTML(property.kind)} · ${escapeHTML(property.type)}</span>
        <button class="favorite${pinnedPropertyIds.has(String(property.id)) ? " active" : ""}" type="button" aria-label="${pinnedPropertyIds.has(String(property.id)) ? "إلغاء تثبيت" : "تثبيت"} ${escapeHTML(property.title)}" title="${pinnedPropertyIds.has(String(property.id)) ? "إلغاء التثبيت" : "تثبيت العقار"}" aria-pressed="${pinnedPropertyIds.has(String(property.id))}">${pinnedPropertyIds.has(String(property.id)) ? "♥" : "♡"}</button>
      </div>
      <div class="card-content">
        <div class="property-price">${formatPrice(property.price, property.kind)}</div>
        <div class="property-unit-price">${document.documentElement.lang === "en" ? "Price per m²" : "سعر المتر"}: ${formatUnitPrice(property.price, property.size, property.kind)}</div>
        <h3>${escapeHTML(property.title)}</h3>
        <div class="property-location"><span>⌖</span>${escapeHTML(property.city)}</div>
        <div class="property-meta">
          <span>▤ ${property.beds} غرف</span>
          <span>▣ ${property.baths} حمام</span>
          <span>⌗ ${new Intl.NumberFormat(locale).format(property.size)} م²</span>
        </div>
        <div class="card-footer">
          <div class="publisher"><span class="publisher-avatar">${escapeHTML(property.initials)}</span>${escapeHTML(property.publisher)}</div>
          <div class="card-actions">
            <button class="tour-button" type="button" data-tour-id="${escapeHTML(property.id)}" aria-label="جولة افتراضية في ${escapeHTML(property.title)}">جولة افتراضية</button>
            <button class="compare-toggle${comparePropertyIds.includes(String(property.id)) ? " selected" : ""}" type="button" data-compare-id="${escapeHTML(property.id)}" aria-pressed="${comparePropertyIds.includes(String(property.id))}">قارن</button>
            <a class="details-button" href="property-details.html?id=${encodeURIComponent(String(property.id))}" data-details-id="${escapeHTML(property.id)}">تفاصيل العقار</a>
            <a class="contact-button" href="https://wa.me/${escapeHTML(property.phone)}?text=${encodeURIComponent(`مرحباً، أنا مهتم بإعلان: ${property.title}`)}" target="_blank" rel="noopener noreferrer">تواصل واتساب ↗</a>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  resultsCount.textContent = `(${new Intl.NumberFormat(locale).format(visibleProperties.length)} عقارات)`;
  emptyState.hidden = visibleProperties.length !== 0;
  grid.hidden = visibleProperties.length === 0;
  renderMapMarkers(visibleProperties);
  renderMarketStatistics(locale);
  renderComparisonBar();
  renderRecentlyViewed();
}

function loadViewedPropertyIds() {
  try {
    const stored = JSON.parse(localStorage.getItem(viewedPropertiesKey) || "[]");
    if (!Array.isArray(stored) || stored.some((id) => typeof id !== "string" && typeof id !== "number")) {
      throw new Error("Viewed property history must be an array of IDs.");
    }
    return [...new Set(stored.map(String))].slice(0, 10);
  } catch (error) {
    console.error("Could not load recently viewed properties:", error);
    return [];
  }
}

function renderRecentlyViewed() {
  const section = document.getElementById("recently-viewed-section");
  const list = document.getElementById("recently-viewed-list");
  if (!section || !list) return;
  const viewed = loadViewedPropertyIds()
    .map((id) => properties.find((property) => String(property.id) === id))
    .filter(Boolean);
  section.hidden = viewed.length === 0;
  list.innerHTML = viewed.map((property) => `
    <a class="recently-viewed-card" href="property-details.html?id=${encodeURIComponent(String(property.id))}" data-details-id="${escapeHTML(property.id)}">
      <img src="${escapeHTML(safeImageUrl(property.image))}" alt="" loading="lazy">
      <span class="recently-viewed-copy"><strong>${escapeHTML(property.title)}</strong><span>${formatPrice(property.price, property.kind)}</span></span>
    </a>
  `).join("");
}

function formatUnitPrice(price, size, kind) {
  const locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
  const currency = document.documentElement.lang === "en" ? "EGP" : "جنيه";
  const perMonth = kind === "للإيجار"
    ? (document.documentElement.lang === "en" ? " / m² / month" : " / م² / شهر")
    : (document.documentElement.lang === "en" ? " / m²" : " / م²");
  if (!Number.isFinite(Number(size)) || Number(size) <= 0) return "—";
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(price / size)} ${currency}${perMonth}`;
}

function renderMarketStatistics(locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG") {
  const selectedArea = areaFilter.value;
  const selectedCity = cityFilter.value;
  const matchingProperties = properties.filter((property) => {
    return (!selectedArea || property.area === selectedArea)
      && (!selectedCity || property.city === selectedCity)
      && Number.isFinite(Number(property.size))
      && Number(property.size) > 0;
  });
  const getAverage = (kind) => {
    const values = matchingProperties
      .filter((property) => property.kind === kind && Number.isFinite(Number(property.price)))
      .map((property) => Number(property.price) / Number(property.size));
    if (!values.length) return "—";
    const average = values.reduce((total, value) => total + value, 0) / values.length;
    return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(average)} ${document.documentElement.lang === "en" ? "EGP" : "جنيه"}`;
  };
  const scope = selectedArea || selectedCity
    ? (selectedCity || areaCities[selectedArea] || selectedArea)
    : (document.documentElement.lang === "en" ? "All areas and cities" : "كل المناطق والمدن");
  document.getElementById("market-scope").textContent = `${document.documentElement.lang === "en" ? "Average price per m² · " : "متوسط سعر المتر · "}${scope}`;
  document.getElementById("average-sale-price").textContent = getAverage("للبيع");
  document.getElementById("average-rent-price").textContent = `${getAverage("للإيجار")}${document.documentElement.lang === "en" ? " / m² / month" : " / م² / شهر"}`;
}

function createPopup(property) {
  const locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
  const popup = document.createElement("div");
  popup.className = "map-popup";

  const title = document.createElement("strong");
  title.textContent = property.title;

  const location = document.createElement("span");
  location.textContent = `${property.area} · ${property.kind}`;

  const image = document.createElement("img");
  image.className = "map-popup-image";
  image.src = safeImageUrl(property.image);
  image.alt = property.title;

  const price = document.createElement("b");
  price.textContent = `${new Intl.NumberFormat(locale).format(property.price)} ${locale === "en-US" ? "EGP" : "جنيه"}${property.kind === "للإيجار" ? (locale === "en-US" ? " / month" : " / شهر") : ""}`;

  const contact = document.createElement("a");
  contact.textContent = "تواصل واتساب";
  contact.href = `https://wa.me/${property.phone}?text=${encodeURIComponent(`مرحباً، أنا مهتم بإعلان: ${property.title}`)}`;
  contact.target = "_blank";
  contact.rel = "noopener noreferrer";

  popup.append(image, title, location, price, contact);
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
  const locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
  propertyMarkers.clearLayers();
  visibleProperties.forEach((property) => {
    const coordinates = getPropertyCoordinates(property);
    if (!coordinates) return;
    const priceText = property.price >= 1000000
      ? `${(property.price / 1000000).toLocaleString(locale, { maximumFractionDigits: 2 })}${locale === "en-US" ? "m" : "م"}`
      : `${new Intl.NumberFormat(locale).format(property.price)}`;
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

function loadMapLibrary() {
  if (mapLibraryPromise) return mapLibraryPromise;
  mapStatus.hidden = false;
  setMapStatus("جارٍ تحميل الخريطة...", "Loading map...");
  if (!mapStylesheetPromise) {
    mapStylesheetPromise = new Promise((resolveStylesheet, rejectStylesheet) => {
      const stylesheet = document.createElement("link");
      stylesheet.id = "leaflet-stylesheet";
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      stylesheet.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      stylesheet.crossOrigin = "";
      stylesheet.onload = resolveStylesheet;
      stylesheet.onerror = () => {
        stylesheet.remove();
        mapStylesheetPromise = null;
        rejectStylesheet(new Error("Leaflet styles failed to load."));
      };
      document.head.append(stylesheet);
    });
  }
  mapLibraryPromise = mapStylesheetPromise.then(() => {
    if (window.L) return;
    return new Promise((resolveScript, rejectScript) => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      script.crossOrigin = "";
      script.onload = resolveScript;
      script.onerror = () => {
        script.remove();
        rejectScript(new Error("Leaflet failed to load."));
      };
      document.head.append(script);
    });
  }).catch((error) => {
    mapLibraryPromise = null;
    throw error;
  });
  return mapLibraryPromise;
}

async function initializeMap() {
  if (mapInitialized) return;
  if (!window.L) {
    try {
      await loadMapLibrary();
    } catch (error) {
      console.error("Could not load the property map:", error);
      mapStatus.hidden = false;
      setMapStatus(
        "تعذّر تحميل الخريطة. تأكد من اتصال الإنترنت ثم أعد المحاولة.",
        "Could not load the map. Check your internet connection and try again."
      );
      return;
    }
  }
  if (mapInitialized) return;
  if (!window.L) {
    mapStatus.hidden = false;
    setMapStatus(
      "تعذّر تحميل الخريطة. تأكد من اتصال الإنترنت ثم أعد تحميل الصفحة.",
      "Could not load the map. Check your internet connection and reload the page."
    );
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

function showVoiceMessage(arabicMessage, englishMessage) {
  showToast(document.documentElement.lang === "en" ? englishMessage : arabicMessage);
}

function updateVoiceButton(button, listening = false) {
  const isEnglish = document.documentElement.lang === "en";
  const label = listening
    ? (isEnglish ? button.dataset.listeningEn : button.dataset.listeningAr)
    : (isEnglish ? button.dataset.labelEn : button.dataset.labelAr);
  button.classList.toggle("listening", listening);
  button.setAttribute("aria-pressed", String(listening));
  button.setAttribute("aria-label", label);
  button.title = label;
  button.textContent = listening ? "■" : "🎙";
}

function updateVoiceReplyButton() {
  const isEnglish = document.documentElement.lang === "en";
  const label = voiceRepliesEnabled
    ? (isEnglish ? "Turn off spoken replies" : "إيقاف الردود الصوتية")
    : (isEnglish ? "Turn on spoken replies" : "تفعيل الردود الصوتية");
  assistantVoiceToggle.textContent = voiceRepliesEnabled ? "🔊" : "🔈";
  assistantVoiceToggle.setAttribute("aria-label", label);
  assistantVoiceToggle.title = label;
  assistantVoiceToggle.setAttribute("aria-pressed", String(voiceRepliesEnabled));
}

function setVoiceRepliesEnabled(enabled) {
  if (enabled && (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined")) {
    showVoiceMessage("النطق الصوتي غير مدعوم في هذا المتصفح.", "Spoken replies are not supported in this browser.");
    return false;
  }
  voiceRepliesEnabled = enabled;
  if (!enabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
  updateVoiceReplyButton();
  showVoiceMessage(
    enabled ? "تم تفعيل الردود الصوتية." : "تم إيقاف الردود الصوتية.",
    enabled ? "Spoken replies are on." : "Spoken replies are off."
  );
  return true;
}

function speakAssistantReply(message) {
  if (!voiceRepliesEnabled) return;
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    voiceRepliesEnabled = false;
    updateVoiceReplyButton();
    showVoiceMessage("تعذر تشغيل الرد الصوتي في هذا المتصفح.", "Could not play the spoken reply in this browser.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
  utterance.rate = 0.95;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function normalizeSearchText(value) {
  return value.toLocaleLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[،,.!?؟؛:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeVoiceText(value) {
  return normalizeSearchText(value);
}

function translateEnglishVoiceSearch(value) {
  const replacements = [
    ["new administrative capital", "العاصمة الادارية"],
    ["fifth settlement", "التجمع الخامس"],
    ["north coast", "الساحل الشمالي"],
    ["ain sokhna", "العين السخنه"],
    ["sheikh zayed", "الشيخ زايد"],
    ["nasr city", "مدينة نصر"],
    ["new cairo", "القاهرة الجديدة"],
    ["alexandria", "الاسكندريه"],
    ["october", "السادس من اكتوبر"],
    ["maadi", "المعادي"],
    ["properties", ""],
    ["property", ""],
    ["apartments", "شقه"],
    ["apartment", "شقه"],
    ["villa", "فيلا"],
    ["flat", "شقه"],
    ["shop", "محل"],
    ["land", "ارض"],
    ["duplex", "دوبلكس"],
    ["chalet", "شاليه"],
    ["homes", ""],
    ["home", ""],
    ["houses", ""],
    ["house", ""],
    ["for sale", "للبيع"],
    ["for rent", "للايجار"]
  ];
  return replacements.reduce((text, [english, arabic]) => text.replaceAll(english, arabic), value)
    .replace(/\b(?:in|near|the|a|an)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function handleVoiceCommand(transcript) {
  const text = normalizeVoiceText(transcript);
  const hasAny = (phrases) => phrases.some((phrase) => text.includes(phrase));

  if (hasAny(["اخف الخريطه", "اغلق الخريطه", "close map", "hide map"])) {
    if (isCompactMapLayout()) {
      if (mapPanel.classList.contains("visible")) mapToggle.click();
    } else if (resultsLayout.classList.contains("map-expanded")) {
      mapToggle.click();
    }
    showVoiceMessage("تم إخفاء الخريطة.", "The map is hidden.");
    return true;
  }

  if (hasAny(["افتح الخريطه", "اعرض الخريطه", "اظهر الخريطه", "الخريطه", "open map", "show map", "map view"])) {
    if (isCompactMapLayout()) {
      if (!mapPanel.classList.contains("visible")) mapToggle.click();
    } else if (!resultsLayout.classList.contains("map-expanded")) {
      mapToggle.click();
    }
    showVoiceMessage("تم فتح خريطة العقارات.", "Showing the property map.");
    return true;
  }

  if (hasAny(["افتح التمويل", "التمويل العقاري", "صفحه التمويل", "mortgage", "financing"])) {
    window.location.href = "financing.html";
    return true;
  }

  if (hasAny(["افتح مواعيدي", "المواعيد", "طلبات المعاينه", "appointments", "viewings"])) {
    window.location.href = "appointments.html";
    return true;
  }

  if (hasAny(["افتح المساعد", "مساعد العقارات", "assistant", "chat"])) {
    if (chatPanel.hidden) chatLauncher.click();
    chatInput.focus();
    return true;
  }

  if (hasAny(["المفضله فقط", "اعرض المفضله", "favorites only", "show favorites"])) {
    favoritesOnly.checked = true;
    renderProperties();
    document.getElementById("listings").scrollIntoView({ behavior: "smooth", block: "start" });
    showVoiceMessage("تعرض الآن العقارات المفضلة فقط.", "Showing your favorites.");
    return true;
  }

  if (hasAny(["الوضع الليلي", "الوضع الداكن", "الليل", "dark mode", "dark theme"])) {
    if (document.documentElement.dataset.theme !== "dark") document.getElementById("theme-toggle").click();
    showVoiceMessage("تم تفعيل الوضع الليلي.", "Dark mode is on.");
    return true;
  }

  if (hasAny(["الوضع النهاري", "الوضع الفاتح", "النهار", "light mode", "light theme"])) {
    if (document.documentElement.dataset.theme !== "light") document.getElementById("theme-toggle").click();
    showVoiceMessage("تم تفعيل الوضع النهاري.", "Light mode is on.");
    return true;
  }

  if (hasAny(["بالانجليزي", "اللغة الانجليزية", "english", "in english"])) {
    if (document.documentElement.lang !== "en") document.getElementById("language-toggle").click();
    showVoiceMessage("تم تغيير اللغة إلى الإنجليزية.", "Language changed to English.");
    return true;
  }

  if (hasAny(["بالعربي", "اللغة العربية", "arabic", "in arabic"])) {
    if (document.documentElement.lang !== "ar") document.getElementById("language-toggle").click();
    showVoiceMessage("تم تغيير اللغة إلى العربية.", "Language changed to Arabic.");
    return true;
  }

  if (hasAny(["امسح البحث", "مسح البحث", "clear search"])) {
    propertyQuery.value = "";
    renderProperties();
    showVoiceMessage("تم مسح البحث.", "Search cleared.");
    return true;
  }

  if (hasAny(["كل العقارات", "اعرض كل العقارات", "show all properties"])) {
    favoritesOnly.checked = false;
    propertyQuery.value = "";
    renderProperties();
    showVoiceMessage("تم عرض كل العقارات.", "Showing all properties.");
    return true;
  }

  const searchPrefix = /^(?:ابحث\s+عن|بحث\s+عن|ابحث|عايز|عاوز|عاوزه|عاوزة|اريد|محتاج|find(?:\s+me)?|looking\s+for|i\s+want|search\s+for|search)\s+/;
  const searchText = text.replace(searchPrefix, "").trim();
  const voiceSearch = searchText || transcript.trim();
  propertyQuery.value = document.documentElement.lang === "en"
    ? translateEnglishVoiceSearch(voiceSearch)
    : voiceSearch;
  renderProperties();
  document.getElementById("listings").scrollIntoView({ behavior: "smooth", block: "start" });
  showVoiceMessage(
    searchText ? `تم البحث عن: ${propertyQuery.value}` : "تم تطبيق البحث الصوتي.",
    searchText ? `Searching for: ${propertyQuery.value}` : "Voice search applied."
  );
  return true;
}

function startVoiceRecognition(mode, button) {
  if (activeVoiceRecognition) {
    if (activeVoiceButton === button) {
      activeVoiceRecognition.stop();
    } else {
      showVoiceMessage("أوقف الاستماع الحالي أولًا.", "Stop the current listening session first.");
    }
    return;
  }

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    showVoiceMessage(
      "التعرف على الصوت غير مدعوم هنا. جرّب أحدث إصدار من Safari أو Chrome.",
      "Speech recognition is not supported here. Try the latest Safari or Chrome."
    );
    return;
  }

  const recognition = new Recognition();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    welcomeSpeechRequest += 1;
    welcomeSpeechPending = false;
  }
  recognition.lang = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
  recognition.continuous = false;
  recognition.interimResults = false;
  activeVoiceRecognition = recognition;
  activeVoiceButton = button;
  updateVoiceButton(button, true);

  recognition.onstart = () => {
    showVoiceMessage("جارٍ الاستماع... اضغط زر الإيقاف عند الانتهاء.", "Listening... press stop when you are done.");
  };
  recognition.onresult = (event) => {
    const transcript = event.results?.[0]?.[0]?.transcript?.trim();
    if (!transcript) return;
    if (mode === "chat") {
      setVoiceRepliesEnabled(true);
      chatInput.value = transcript;
      chatForm.querySelector('button[type="submit"]').click();
      return;
    }
    handleVoiceCommand(transcript);
  };
  recognition.onerror = (event) => {
    const messages = {
      "not-allowed": ["اسمح باستخدام الميكروفون وتأكد من فتح الموقع عبر HTTPS أو localhost.", "Allow microphone access and make sure the site is served over HTTPS or localhost."],
      "service-not-allowed": ["خدمة التعرف على الصوت غير متاحة. تحقق من إعدادات المتصفح.", "Speech recognition is unavailable. Check your browser settings."],
      "audio-capture": ["لم يتم العثور على ميكروفون متاح.", "No microphone was found."],
      "no-speech": ["لم أسمع كلامًا واضحًا. حاول مرة أخرى.", "No clear speech was detected. Try again."],
      "network": ["تعذر الاتصال بخدمة التعرف على الصوت.", "Could not connect to the speech recognition service."]
    };
    if (event.error === "aborted") return;
    const message = messages[event.error];
    if (message) showVoiceMessage(message[0], message[1]);
    else {
      console.error("Speech recognition failed:", event.error);
      showVoiceMessage("تعذر تشغيل التعرف على الصوت.", "Speech recognition failed.");
    }
  };
  recognition.onend = () => {
    if (activeVoiceRecognition !== recognition) return;
    activeVoiceRecognition = null;
    const lastButton = activeVoiceButton;
    activeVoiceButton = null;
    updateVoiceButton(lastButton, false);
  };

  try {
    recognition.start();
  } catch (error) {
    activeVoiceRecognition = null;
    activeVoiceButton = null;
    updateVoiceButton(button, false);
    console.error("Could not start speech recognition:", error);
    showVoiceMessage("تعذر بدء الميكروفون. تحقق من الإذن وحاول مرة أخرى.", "Could not start the microphone. Check its permission and try again.");
  }
}

function renderComparisonBar() {
  const bar = document.getElementById("comparison-bar");
  if (!bar) return;
  bar.hidden = comparePropertyIds.length === 0;
  document.body.classList.toggle("comparison-active", comparePropertyIds.length > 0);
  document.getElementById("comparison-count").textContent = String(comparePropertyIds.length);
  document.getElementById("open-comparison").disabled = comparePropertyIds.length < 2;
}

function renderComparison() {
  const selected = comparePropertyIds
    .map((id) => properties.find((property) => String(property.id) === id))
    .filter(Boolean);
  if (selected.length < 2) return;
  const rows = [
    ["الصورة", (property) => `<img class="comparison-image" src="${escapeHTML(safeImageUrl(property.image))}" alt="${escapeHTML(property.title)}">`],
    ["العنوان", (property) => escapeHTML(property.title)],
    ["نوع الإعلان", (property) => escapeHTML(property.kind)],
    ["نوع العقار", (property) => escapeHTML(property.type)],
    ["السعر", (property) => formatPrice(property.price, property.kind)],
    ["سعر المتر", (property) => formatUnitPrice(property.price, property.size, property.kind)],
    ["المنطقة", (property) => escapeHTML(property.area)],
    ["المدينة", (property) => escapeHTML(property.city)],
    ["الغرف", (property) => escapeHTML(property.beds)],
    ["الحمامات", (property) => escapeHTML(property.baths)],
    ["المساحة (م²)", (property) => {
      const locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
      return `${new Intl.NumberFormat(locale).format(property.size)} m²`;
    }],
    ["وصف العقار", (property) => escapeHTML(property.description || "—")],
    ["عدد الصور", (property) => new Intl.NumberFormat(document.documentElement.lang === "en" ? "en-US" : "ar-EG")
      .format(Array.isArray(property.images) && property.images.length ? property.images.length : property.image ? 1 : 0)],
    ["المعلن", (property) => escapeHTML(property.publisher)],
    ["رقم التواصل", (property) => `<a href="https://wa.me/${escapeHTML(property.phone)}" target="_blank" rel="noopener noreferrer">${escapeHTML(property.phone)}</a>`],
    ["الموقع التقريبي", (property) => {
      const coordinates = getPropertyCoordinates(property);
      return coordinates ? `${coordinates[0]}, ${coordinates[1]}` : "غير متاح";
    }]
  ];
  document.getElementById("comparison-table").innerHTML = `
    <table>
      <thead><tr><th>التفاصيل</th>${selected.map((property) => `<th>${escapeHTML(property.title)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([label, render]) => `
        <tr><th>${label}</th>${selected.map((property) => `<td>${render(property)}</td>`).join("")}</tr>
      `).join("")}</tbody>
    </table>`;
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
  if (sender === "assistant") speakAssistantReply(message);
}

document.addEventListener("click", (event) => {
  const icon = event.target.closest(".favorite, .map-expand, .map-controls button, .menu-toggle, .modal-close, .chat-header button, .chat-form button");
  if (!icon) return;
  icon.classList.remove("icon-burst");
  void icon.offsetWidth;
  icon.classList.add("icon-ray-source", "icon-burst");
});

document.getElementById("search-button").addEventListener("click", renderProperties);
propertyQuery.addEventListener("input", renderProperties);
voiceSearchButton.addEventListener("click", () => startVoiceRecognition("search", voiceSearchButton));
chatVoiceButton.addEventListener("click", () => startVoiceRecognition("chat", chatVoiceButton));
assistantVoiceToggle.addEventListener("click", () => setVoiceRepliesEnabled(!voiceRepliesEnabled));
areaFilter.addEventListener("change", () => {
  renderProperties();
  if (areaFilter.value) focusMapOnArea(areaFilter.value);
  else if (propertyMap) propertyMap.setView([30.0444, 31.2357], 8);
});
[
  cityFilter,
  propertyTypeFilter,
  bedsFilter,
  bathsFilter,
  favoritesOnly
].forEach((filter) => {
  filter.addEventListener("change", renderProperties);
});
minSize.addEventListener("input", renderProperties);
maxSize.addEventListener("input", renderProperties);
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
  cityFilter.value = "";
  propertyTypeFilter.value = "";
  bedsFilter.value = "";
  bathsFilter.value = "";
  minPrice.value = "";
  maxPrice.value = "";
  minSize.value = "";
  maxSize.value = "";
  favoritesOnly.checked = false;
  selectedKind = "الكل";
  document.querySelectorAll(".search-tab").forEach((tab) => {
    tab.classList.toggle("selected", tab.dataset.kind === "الكل");
  });
  renderProperties();
  if (propertyMap) propertyMap.setView([30.0444, 31.2357], 8);
});

grid.addEventListener("click", (event) => {
  const compareButton = event.target.closest(".compare-toggle");
  if (compareButton) {
    const propertyId = compareButton.dataset.compareId;
    const alreadySelected = comparePropertyIds.includes(propertyId);
    if (alreadySelected) {
      comparePropertyIds = comparePropertyIds.filter((id) => id !== propertyId);
    } else if (comparePropertyIds.length >= 3) {
      showToast("يمكنك مقارنة ٣ عقارات كحد أقصى.");
      return;
    } else {
      comparePropertyIds = [...comparePropertyIds, propertyId];
    }
    renderProperties();
    return;
  }
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

document.getElementById("map-toggle").addEventListener("click", async () => {
  const isCompact = isCompactMapLayout();
  if (isCompact) {
    mapPanel.classList.toggle("visible");
    if (mapPanel.classList.contains("visible")) scrollMapIntoView();
  } else {
    resultsLayout.classList.toggle("map-expanded");
  }
  updateMapToggleLabel();
  await initializeMap();
  window.setTimeout(updateMapSize, 100);
});

mapExpand.addEventListener("click", async () => {
  resultsLayout.classList.toggle("map-expanded");
  updateMapExpandControl();
  mapExpand.textContent = resultsLayout.classList.contains("map-expanded") ? "↙" : "⛶";
  updateMapToggleLabel();
  await initializeMap();
  window.setTimeout(updateMapSize, 100);
});

document.getElementById("map-zoom-in").addEventListener("click", async () => {
  await initializeMap();
  propertyMap?.zoomIn();
});
document.getElementById("map-zoom-out").addEventListener("click", async () => {
  await initializeMap();
  propertyMap?.zoomOut();
});
document.getElementById("map-reset").addEventListener("click", async () => {
  await initializeMap();
  if (!propertyMap) return;
  if (areaFilter.value) {
    focusMapOnArea(areaFilter.value);
    return;
  }
  if (propertyMarkers?.getLayers().length) propertyMap.fitBounds(propertyMarkers.getBounds().pad(0.18), { maxZoom: 12 });
  else propertyMap.setView([30.0444, 31.2357], 8);
});

grid.addEventListener("click", (event) => {
  const detailLink = event.target.closest(".details-button");
  if (detailLink) {
    event.preventDefault();
    const property = properties.find((item) => String(item.id) === detailLink.dataset.detailsId);
    if (!property) {
      showToast("تعذر العثور على تفاصيل العقار.");
      return;
    }
    try {
      sessionStorage.setItem("sakeena-selected-property", JSON.stringify(property));
    } catch (error) {
      console.error("Could not save the selected listing for its details page:", error);
      showToast("تعذر فتح التفاصيل. تحقق من مساحة التخزين في المتصفح.");
      return;
    }
    window.location.href = detailLink.href;
    return;
  }
  if (event.target.closest(".favorite, .compare-toggle, a")) return;
  const card = event.target.closest(".property-card");
  if (!card) return;
  const property = properties.find((item) => String(item.id) === card.dataset.propertyId);
  const coordinates = property && getPropertyCoordinates(property);
  if (!coordinates) return;
  void initializeMap().then(() => {
    if (!propertyMap) return;
    if (isCompactMapLayout()) {
      mapPanel.classList.add("visible");
      updateMapToggleLabel();
      scrollMapIntoView();
    }
    propertyMap.setView(coordinates, 15);
    propertyMarkers.eachLayer((marker) => {
      if (marker.getLatLng().lat === coordinates[0] && marker.getLatLng().lng === coordinates[1]) {
        marker.openPopup();
      }
    });
  });
});

document.getElementById("search-button").addEventListener("click", () => {
  if (areaFilter.value) focusMapOnArea(areaFilter.value);
});

window.addEventListener("sakeena:languagechange", () => {
  updateVoiceButton(voiceSearchButton, activeVoiceButton === voiceSearchButton);
  updateVoiceButton(chatVoiceButton, activeVoiceButton === chatVoiceButton);
  updateVoiceReplyButton();
  renderProperties();
  updateMapToggleLabel();
  updateMapExpandControl();
  if (!document.getElementById("comparison-modal").hidden) renderComparison();
});
window.addEventListener("resize", () => {
  updateMapToggleLabel();
  updateMapExpandControl();
  updateMapSize();
}, { passive: true });

updateMapToggleLabel();
updateVoiceButton(voiceSearchButton);
updateVoiceButton(chatVoiceButton);
updateVoiceReplyButton();
window.addEventListener("pageshow", renderRecentlyViewed);

document.getElementById("open-comparison").addEventListener("click", () => {
  if (comparePropertyIds.length < 2) return;
  renderComparison();
  document.getElementById("comparison-modal").hidden = false;
});
document.getElementById("close-comparison").addEventListener("click", () => {
  document.getElementById("comparison-modal").hidden = true;
});
document.getElementById("clear-comparison").addEventListener("click", () => {
  comparePropertyIds = [];
  renderProperties();
  document.getElementById("comparison-modal").hidden = true;
});
document.getElementById("comparison-modal").addEventListener("click", (event) => {
  if (event.target.id === "comparison-modal") event.currentTarget.hidden = true;
});

const loginModal = document.getElementById("login-modal");
const propertyModal = document.getElementById("property-modal");
loginButton.addEventListener("click", () => {
  loginModal.hidden = false;
  authForm.querySelector('input[type="email"]').focus();
});
if (new URLSearchParams(window.location.search).get("login") === "1") {
  loginModal.hidden = false;
  authForm.querySelector('input[type="email"]').focus();
}
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
  if (!currentUser) {
    loginModal.hidden = false;
    setAuthMessage("سجّل الدخول أولًا لإضافة إعلان وربطه بحسابك.", true);
    authForm.querySelector('input[type="email"]').focus();
    return;
  }
  propertyMessage.textContent = "";
  propertyMessage.classList.remove("error");
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
    document.getElementById("comparison-modal").hidden = true;
    chatPanel.hidden = true;
    virtualTour.close();
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
let chatWelcomeHasPlayed = false;
function playChatWelcome() {
  if (chatWelcomeHasPlayed || !voiceRepliesEnabled || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  welcomeSpeechRequest += 1;
  welcomeSpeechPending = false;
  welcomeHasPlayed = true;
  const utterance = new SpeechSynthesisUtterance(
    "أهلاً بك في سكينة، تفضل سكينة في مساعدتك"
  );
  utterance.lang = "ar-EG";
  utterance.rate = 0.95;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
  chatWelcomeHasPlayed = true;
}
chatLauncher.addEventListener("click", () => {
  chatPanel.hidden = !chatPanel.hidden;
  chatLauncher.setAttribute("aria-expanded", String(!chatPanel.hidden));
  if (!chatPanel.hidden) {
    chatInput.focus();
    playChatWelcome();
  }
});
document.getElementById("chat-close").addEventListener("click", () => {
  chatPanel.hidden = true;
  chatLauncher.setAttribute("aria-expanded", "false");
});
chatForm.addEventListener("submit", async (event) => {
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

const propertyRepository = new PropertyRepository(properties);
const virtualTour = new VirtualTour("tour-modal");
void loadDatabaseProperties();

document.getElementById("property-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabaseClient || !currentUser) {
    propertyMessage.textContent = !currentUser
      ? "سجّل الدخول أولًا لإضافة إعلان."
      : getSupabaseSetupMessage();
    propertyMessage.classList.add("error");
    return;
  }
  const form = event.currentTarget;
  const data = new FormData(form);
  const title = String(data.get("title")).trim();
  const publisher = String(data.get("publisher")).trim();
  const area = String(data.get("area"));
  const phoneDigits = String(data.get("phone")).replace(/\D/g, "");
  const localPhone = phoneDigits.startsWith("0") ? phoneDigits.slice(1) : phoneDigits;
  const whatsappPhone = `20${localPhone}`;
  const imageUrls = String(data.get("images") || "")
    .split(/[,\r\n]+/)
    .map((url) => url.trim())
    .filter(Boolean);
  if (imageUrls.length > 20) {
    propertyMessage.textContent = document.documentElement.lang === "en"
      ? "You can add up to 20 photos."
      : "يمكنك إضافة 20 صورة كحد أقصى.";
    propertyMessage.classList.add("error");
    return;
  }
  const images = [];
  for (const imageUrl of imageUrls) {
    try {
      const parsedImageUrl = new URL(imageUrl);
      if (parsedImageUrl.protocol !== "https:" && parsedImageUrl.protocol !== "http:") {
        throw new Error("Property image URLs must use HTTP or HTTPS.");
      }
      images.push(parsedImageUrl.href);
    } catch (error) {
      console.error("Invalid property image URL:", error);
      propertyMessage.textContent = "أدخل روابط صور صحيحة تبدأ بـ https:// أو http://.";
      propertyMessage.classList.add("error");
      return;
    }
  }
  propertyMessage.classList.remove("error");
  const property = {
    id: `user-${Date.now()}`,
    title,
    area,
    city: areaCities[area] || area,
    price: Number(data.get("price")),
    kind: String(data.get("kind")),
    type: String(data.get("type")),
    description: String(data.get("description") || "").trim(),
    beds: Number(data.get("beds")),
    baths: Number(data.get("baths")),
    size: Number(data.get("size")),
    image: images[0] || "",
    images,
    lat: areaCoordinates[area][0],
    lng: areaCoordinates[area][1],
    publisher,
    initials: publisher.slice(0, 2),
    phone: whatsappPhone,
    userAdded: true,
    ownerId: currentUser.id,
    source: "supabase"
  };

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  propertyMessage.textContent = "";
  try {
    const { data: row, error } = await supabaseClient
      .from("property_listings")
      .insert({
        owner_id: currentUser.id,
        title: property.title,
        area: property.area,
        city: property.city,
        kind: property.kind,
        property_type: property.type,
        price: property.price,
        beds: property.beds,
        baths: property.baths,
        size: property.size,
        description: property.description,
        images: property.images,
        lat: property.lat,
        lng: property.lng,
        publisher: property.publisher,
        phone: property.phone
      })
      .select("id,title,area,city,kind,property_type,price,beds,baths,size,description,images,lat,lng,publisher,phone,status,created_at")
      .single();
    if (error) throw error;
    propertyRepository.add(window.SakeenaBackend.mapPropertyRow(row));
    properties = propertyRepository.getAll();
    renderProperties();
    form.reset();
    propertyModal.hidden = true;
    showToast("تم نشر إعلانك وحفظه في قاعدة البيانات.");
    document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.error("Could not publish the property to Supabase:", error);
    propertyMessage.textContent = "تعذر حفظ الإعلان في قاعدة البيانات. تحقق من إعداد الجداول والصلاحيات وحاول مرة أخرى.";
    propertyMessage.classList.add("error");
  } finally {
    submitButton.disabled = false;
  }
});

grid.addEventListener("click", (event) => {
  const tourButton = event.target.closest(".tour-button");
  if (!tourButton) return;
  event.preventDefault();
  const property = properties.find((item) => String(item.id) === tourButton.dataset.tourId);
  if (property) virtualTour.open(property);
});

let welcomeHasPlayed = false;
let welcomeSpeechPending = false;
let welcomeSpeechRequest = 0;
function playWelcome() {
  if (welcomeHasPlayed || welcomeSpeechPending) return;
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
  window.speechSynthesis.cancel();
  const requestId = ++welcomeSpeechRequest;
  let started = false;
  const utterance = new SpeechSynthesisUtterance("أهلاً بك في سكينة");
  utterance.lang = "ar-EG";
  utterance.rate = 0.92;
  utterance.pitch = 1;
  welcomeSpeechPending = true;
  const retryTimer = window.setTimeout(() => {
    if (requestId === welcomeSpeechRequest && !started) welcomeSpeechPending = false;
  }, 1800);
  utterance.onstart = () => {
    if (requestId !== welcomeSpeechRequest) return;
    started = true;
    welcomeHasPlayed = true;
    welcomeSpeechPending = false;
    window.clearTimeout(retryTimer);
  };
  utterance.onend = () => {
    if (requestId !== welcomeSpeechRequest) return;
    welcomeHasPlayed = true;
    welcomeSpeechPending = false;
    window.clearTimeout(retryTimer);
  };
  utterance.onerror = () => {
    if (requestId !== welcomeSpeechRequest) return;
    welcomeSpeechPending = false;
    window.clearTimeout(retryTimer);
  };
  window.speechSynthesis.speak(utterance);
}

function getSpokenElementName(element) {
  if (!element) return "";
  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel?.trim()) return ariaLabel.trim();
  const title = element.getAttribute("title");
  if (title?.trim()) return title.trim();
  if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
    const fieldLabel = element.closest("label");
    if (fieldLabel) return fieldLabel.textContent.replace(/\s+/g, " ").trim();
  }
  return element.textContent.replace(/\s+/g, " ").trim();
}

function speakElementName(element) {
  if (window.matchMedia("(max-width: 620px), (pointer: coarse)").matches) return;
  if (!("speechSynthesis" in window)) return;
  const name = getSpokenElementName(element);
  if (!name) return;
  window.speechSynthesis.cancel();
  welcomeSpeechRequest += 1;
  welcomeSpeechPending = false;
  const prefix = welcomeHasPlayed ? "" : "أهلا بك في سكينة العقارية. ";
  const utterance = new SpeechSynthesisUtterance(`${prefix}تم الضغط على ${name}`);
  utterance.lang = "ar-EG";
  utterance.rate = 0.95;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
  welcomeHasPlayed = true;
}

document.addEventListener("pointerdown", (event) => {
  if (event.target.closest("[data-voice-control]")) return;
  if (!welcomeHasPlayed && window.matchMedia("(max-width: 620px), (pointer: coarse)").matches) {
    playWelcome();
    return;
  }
  const interactive = event.target.closest("button, a, input, select, textarea, .property-card, .review-card");
  if (interactive) speakElementName(interactive);
  else if (!welcomeHasPlayed) playWelcome();
});

window.addEventListener("load", () => {
  window.setTimeout(() => {
    if (!welcomeHasPlayed && !window.matchMedia("(max-width: 620px), (pointer: coarse)").matches) {
      playWelcome();
    }
  }, 500);
});

class TouchGlowEffect {
  constructor() {
    if (window.matchMedia("(max-width: 620px), (pointer: coarse)").matches) return;
    this.glow = document.getElementById("touch-glow");
    this.rippleContainer = document.getElementById("ripple-container");

    if (!this.glow || !this.rippleContainer) return;

    this.isPointerDown = false;
    this.init();
  }

  init() {
    window.addEventListener("pointerdown", (event) => {
      this.isPointerDown = true;
      this.moveGlow(event.clientX, event.clientY);
      this.glow.classList.add("active");
      this.createRipple(event.clientX, event.clientY);
    }, { passive: true });

    window.addEventListener("pointermove", (event) => {
      if (event.pointerType === "mouse" || this.isPointerDown) {
        this.moveGlow(event.clientX, event.clientY);
        if (event.pointerType === "mouse") {
          this.glow.classList.add("active");
        }
      }
    }, { passive: true });

    const endInteraction = (event) => {
      this.isPointerDown = false;
      if (event.pointerType !== "mouse") {
        this.glow.classList.remove("active");
      }
    };

    window.addEventListener("pointerup", endInteraction, { passive: true });
    window.addEventListener("pointercancel", endInteraction, { passive: true });

    document.addEventListener("mouseleave", () => {
      this.glow.classList.remove("active");
    });
  }

  moveGlow(x, y) {
    this.glow.style.left = `${x}px`;
    this.glow.style.top = `${y}px`;
  }

  createRipple(x, y) {
    const ripple = document.createElement("span");
    ripple.classList.add("touch-ripple");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.rippleContainer.appendChild(ripple);
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new TouchGlowEffect();
});


renderProperties();