(() => {
  const languageKey = "sakeena-language";
  const themeKey = "sakeena-theme";
  const translations = {
    "العقارات": "Properties",
    "التمويل": "Financing",
    "عن المنصة": "About",
    "آراء العملاء": "Customer reviews",
    "تواصل معنا": "Contact",
    "مواعيدي": "My appointments",
    "أضف عقارك": "List your property",
    "عقارات للبيع والإيجار": "Properties for sale and rent",
    "دور على عقارك": "Find your next home",
    "بسهولة.": "with ease.",
    "فلتر حسب المنطقة والسعر، شوف تفاصيل العقار على الخريطة، وتواصل مباشرة مع المعلن.": "Filter by area and price, view property locations on the map, and contact owners directly.",
    "بحث مرن": "Flexible search",
    "حسب المنطقة والسعر": "By area and price",
    "خريطة": "Map",
    "مواقع تقريبية للعقارات": "Approximate property locations",
    "تواصل مباشر": "Direct contact",
    "مع المعلن": "With the owner",
    "تفاصيل واضحة": "Clear details",
    "السعر والمساحة وطريقة التواصل": "Price, size, and contact details",
    "الكل": "All",
    "للبيع": "For sale",
    "للإيجار": "For rent",
    "المنطقة": "Area",
    "كل المناطق": "All areas",
    "أقل سعر": "Minimum price",
    "أعلى سعر": "Maximum price",
    "ابحث عن عقار": "Search properties",
    "كلمات البحث": "Search keywords",
    "اسم العقار أو المنطقة": "Property name or area",
    "بحث وأوامر صوتية": "Voice search and commands",
    "تفعيل الردود الصوتية": "Turn on spoken replies",
    "اسأل المساعد بصوتك": "Ask the assistant by voice",
    "اضغط 🎙 وقل مثلًا: «ابحث عن شقة» أو «افتح الخريطة». الميكروفون يعمل عند الضغط فقط، ولا يحفظ الموقع التسجيلات.": "Tap 🎙 and say “search for an apartment” or “open the map.” The microphone is used only when tapped; this site does not store recordings.",
    "المفضلة فقط": "Favorites only",
    "فلاتر إضافية: نوع العقار، المدينة، الغرف، الحمامات، والمساحة": "More filters: property type, city, bedrooms, bathrooms, and size",
    "المدينة": "City",
    "كل المدن": "All cities",
    "كل الأنواع": "All types",
    "أي عدد": "Any",
    "غرفة واحدة": "1 bedroom",
    "غرفتان": "2 bedrooms",
    "٣ غرف": "3 bedrooms",
    "٤ غرف": "4 bedrooms",
    "٥ غرف فأكثر": "5+ bedrooms",
    "حمام واحد": "1 bathroom",
    "حمامان": "2 bathrooms",
    "٣ حمامات": "3 bathrooms",
    "٤ حمامات فأكثر": "4+ bathrooms",
    "أقل مساحة (م²)": "Minimum size (m²)",
    "أعلى مساحة (م²)": "Maximum size (m²)",
    "بدون حد أدنى": "No minimum",
    "بدون حد أقصى": "No maximum",
    "متوسط سعر المتر للعروض": "Average price per m²",
    "متوسط سعر البيع / م²": "Average sale / m²",
    "متوسط الإيجار / م² شهريًا": "Average rent / m² monthly",
    "متوسط سعر المتر": "Average price per m²",
    "سعر المتر": "Price per m²",
    "المقدم (جنيه)": "Down payment (EGP)",
    "أدخل سعر العقار والمقدم ومدة السداد ونسبة الفائدة السنوية.": "Enter the property price, down payment, loan term, and annual interest rate.",
    "حساب تقديري بعد خصم المقدم من سعر العقار، وعلى أساس ثبات الفائدة ومن غير رسوم إدارية.": "Estimate subtracts the down payment from the property price and assumes a fixed rate; fees are excluded.",
    "تأكد من البيانات، ويجب أن يكون المقدم أقل من سعر العقار.": "Check the values. The down payment must be less than the property price.",
    "تعذر حساب القسط. راجع البيانات وحاول مرة أخرى.": "Could not calculate the payment. Check the values and try again.",
    "اختر عقارين أو ٣ كحد أقصى": "Select two or three properties",
    "تفاصيل العقار": "Property details",
    "العودة للعقارات": "Back to properties",
    "صور العقار": "Property photos",
    "النوع": "Type",
    "المساحة": "Size",
    "صاحب الإعلان": "Property owner",
    "عرض الموقع التقريبي على الخريطة ↗": "View approximate location on map ↗",
    "تعذر العثور على العقار": "Property not found",
    "افتح تفاصيل العقار من بطاقة الإعلان حتى تظهر بياناته.": "Open a property from its listing card to view its details.",
    "العودة إلى العقارات": "Back to properties",
    "حفظ في المفضلة": "Save to favorites",
    "محفوظ في المفضلة": "Saved to favorites",
    "روابط صور العقار": "Property photo URLs",
    "يمكنك إضافة 20 صورة كحد أقصى.": "You can add up to 20 photos.",
    "افصل بينها بفاصلة أو سطر جديد": "separate with commas or new lines",
    "وصف العقار": "Property description",
    "عدد الصور": "Number of photos",
    "سجل التصفح": "Browsing history",
    "شاهدتها مؤخرًا": "Recently viewed",
    "احجز موعد معاينة": "Book a viewing",
    "التاريخ والوقت": "Date and time",
    "رقم هاتف للتواصل": "Contact phone number",
    "ملاحظة لصاحب الإعلان": "Note for the owner",
    "إرسال طلب المعاينة": "Send viewing request",
    "تحليل الاستثمار": "Investment analysis",
    "حاسبة العائد الإيجاري": "Rental return calculator",
    "قدّر العائد السنوي من الإيجار بعد خصم المصروفات التشغيلية.": "Estimate annual rental returns after operating expenses.",
    "سعر شراء العقار (جنيه)": "Property purchase price (EGP)",
    "الإيجار الشهري المتوقع (جنيه)": "Expected monthly rent (EGP)",
    "المصروفات السنوية (جنيه)": "Annual expenses (EGP)",
    "احسب العائد": "Calculate return",
    "دخل الإيجار السنوي": "Annual rental income",
    "صافي الدخل السنوي": "Annual net income",
    "العائد الإجمالي": "Gross yield",
    "العائد الصافي السنوي": "Annual net yield",
    "سنوات استرداد رأس المال تقديريًا": "Estimated years to recover investment",
    "الحاسبة تقديرية ولا تشمل الضرائب أو فترات خلو العقار أو تغير الأسعار.": "Estimate excludes taxes, vacancy, and property price changes.",
    "معايناتك العقارية": "Your property viewings",
    "مواعيد المعاينة": "Viewing appointments",
    "تابع طلباتك كمشتري، وراجع طلبات معاينة العقارات التي نشرتها.": "Track your requests and review visits requested for your listings.",
    "بانتظار الرد": "Pending",
    "تمت الموافقة": "Approved",
    "مرفوض": "Declined",
    "موافقة": "Approve",
    "رفض": "Decline",
    "تسجيل الدخول أولًا لإرسال طلب معاينة.": "Sign in to request a viewing.",
    "حجز المعاينة متاح للإعلانات المنشورة عبر حسابات المستخدمين.": "Viewings are available for properties published by user accounts.",
    "اختر موعدًا مناسبًا، وسيراجع صاحب الإعلان طلبك.": "Choose a suitable time; the property owner will review your request.",
    "تم إرسال طلب المعاينة. يمكنك متابعة حالته من صفحة مواعيدي.": "Viewing request sent. Track its status on My appointments.",
    "تعذر تحميل بيانات العقار": "Could not load property details",
    "تحقق من اتصال Supabase وإعداد الجداول، ثم حاول مرة أخرى.": "Check the Supabase connection and database setup, then try again.",
    "تعذر الاتصال بنظام الحجز. تحقق من إعداد Supabase.": "Could not connect to bookings. Check the Supabase setup.",
    "تعذر التحقق من تسجيل الدخول. أعد تحميل الصفحة.": "Could not verify sign-in. Reload this page.",
    "تعذر تحميل إعلانات الحسابات. تحقق من تشغيل ترحيل قاعدة البيانات.": "Could not load member listings. Check that the database migration has been applied.",
    "جدول إعلانات الحسابات غير ظاهر في مشروع Supabase المرتبط بالموقع. شغّل ترحيل الإعلانات والمواعيد ثم أعد تحميل الصفحة.": "The member listings table is missing from this site's Supabase project. Apply the listings and appointments migration, then reload the page.",
    "تعذر تحميل إعلانات الحسابات. تحقق من اتصال Supabase وصلاحيات القراءة.": "Could not load member listings. Check the Supabase connection and read permissions.",
    "تم نشر إعلانك وحفظه في قاعدة البيانات.": "Your property was published to the database.",
    "تعذر حفظ الإعلان في قاعدة البيانات. تحقق من إعداد الجداول والصلاحيات وحاول مرة أخرى.": "Could not publish the property. Check the database tables and permissions, then try again.",
    "سجّل الدخول أولًا لإضافة إعلان وربطه بحسابك.": "Sign in first to publish a property under your account.",
    "هذا الموعد محجوز بالفعل. اختر وقتًا آخر.": "That time slot is already booked. Choose another time.",
    "لا يمكنك حجز معاينة لعقارك.": "You cannot book a viewing for your own property.",
    "تعذر إرسال الطلب. تحقق من التاريخ والاتصال وحاول مرة أخرى.": "Could not send the request. Check the date and connection, then try again.",
    "أدخل سعر شراء وإيجارًا ومصروفات سنوية صحيحة.": "Enter a valid purchase price, rent, and annual expenses.",
    "القيم المدخلة كبيرة جدًا ولا يمكن حسابها.": "The values are too large to calculate.",
    "احسب عائد الاستثمار العقاري ↗": "Calculate property return ↗",
    "إعلانات الحسابات": "Member listings",
    "Sakeena | مواعيدي": "Sakeena | My appointments",
    "طلبات المعاينة التي أرسلتها": "Viewing requests you sent",
    "طلبات معاينة عقاراتك": "Viewing requests for your properties",
    "لا توجد طلبات معاينة أرسلتها.": "You have not sent any viewing requests.",
    "لا توجد طلبات لمعاينة عقاراتك.": "There are no viewing requests for your properties.",
    "اكتب تفاصيل العقار والمميزات القريبة منه": "Describe the property and nearby amenities",
    "يمكنك مقارنة ٣ عقارات كحد أقصى.": "You can compare up to 3 properties.",
    "متوسط سعر المتر · ": "Average price per m² · ",
    "اختيارات تستحق المشاهدة": "Worth a closer look",
    "عقارات مميزة": "Featured properties",
    "عقارات": "properties",
    "Sakeena | التمويل العقاري": "Sakeena | Mortgage financing",
    "Sakeena | عن المنصة": "Sakeena | About",
    "Sakeena | آراء العملاء": "Sakeena | Customer reviews",
    "Sakeena | تواصل معنا": "Sakeena | Contact us",
    "© ٢٠٢٦ Sakeena. جميع الحقوق محفوظة.": "© 2026 Sakeena. All rights reserved.",
    "التنقل الرئيسي": "Main navigation",
    "Sakeena - الصفحة الرئيسية": "Sakeena - Home",
    "شقة فاخرة بإطلالة مفتوحة": "Luxury apartment with open views",
    "فيلا مستقلة بحديقة خاصة": "Detached villa with a private garden",
    "شقة مفروشة بتصميم هادئ": "Furnished apartment with a calm design",
    "وحدة عصرية في كمبوند راقٍ": "Modern home in an upscale compound",
    "دوبلكس واسع بتشطيبات مميزة": "Spacious duplex with premium finishes",
    "شاليه قريب من البحر": "Chalet near the beach",
    "شقة واسعة قريبة من الخدمات": "Spacious apartment near amenities",
    "شقة مفروشة للإيجار في الإسكندرية": "Furnished apartment for rent in Alexandria",
    "شاليه بإطلالة على البحر في العين السخنة": "Sea-view chalet in Ain Sokhna",
    "شقة عائلية بتشطيب حديث": "Family apartment with modern finishes",
    "شاليه للإيجار في الساحل الشمالي": "Chalet for rent on the North Coast",
    "شقة بإطلالة هادئة في المعادي": "Apartment with peaceful views in Maadi",
    "شقة أنيقة للإيجار في الشيخ زايد": "Elegant apartment for rent in Sheikh Zayed",
    "شاليه عائلي في العين السخنة": "Family chalet in Ain Sokhna",
    "سهولة البحث ووضوح التفاصيل خلّوني أقارن بين العقارات بسرعة ومن غير لف كتير.": "Easy search and clear details helped me compare homes quickly.",
    "الخريطة ساعدتني أفهم أماكن العقارات وأوصل للمنطقة المناسبة لاحتياجي.": "The map helped me understand property locations and find the right area.",
    "مقارنة الأسعار والتواصل المباشر مع المعلن خلّوا خطوات الاختيار أسهل.": "Price comparisons and direct contact made choosing much easier.",
    "ترتيب حسب": "Sort by",
    "الأحدث والأفضل": "Recommended",
    "السعر: الأقل أولاً": "Price: low to high",
    "السعر: الأعلى أولاً": "Price: high to low",
    "تكبير الخريطة": "Expand map",
    "عقارات على الخريطة": "Properties on map",
    "مفيش عقارات مطابقة لبحثك": "No properties match your search",
    "جرّب توسّع نطاق السعر أو تختار منطقة تانية.": "Try a wider price range or another area.",
    "عرض كل العقارات": "Show all properties",
    "العقارات وبيانات التواصل المعروضة تجريبية، ومواقع الخريطة تقريبية حسب المنطقة.": "Listings and contact details are samples. Map locations are approximate.",
    "خطوتك الأولى لبيت تحبه.": "Your first step toward a home you love.",
    "جنيه": "EGP",
    "مليون": "million",
    "غرف": "beds",
    "حمام": "baths",
    "م²": "m²",
    "شقة": "Apartment",
    "فيلا": "Villa",
    "محل": "Shop",
    "أرض": "Land",
    "دوبلكس": "Duplex",
    "شاليه": "Chalet",
    "الشيخ زايد": "Sheikh Zayed",
    "المعادي": "Maadi",
    "التجمع الخامس": "Fifth Settlement",
    "العاصمة الإدارية": "New Administrative Capital",
    "الساحل الشمالي": "North Coast",
    "مدينة نصر": "Nasr City",
    "الإسكندرية": "Alexandria",
    "العين السخنة": "Ain Sokhna",
    "السادس من أكتوبر": "6th of October",
    "قارن": "Compare",
    "مسح": "Clear",
    "العقارات المحددة للمقارنة:": "Selected properties:",
    "(اختر عقارين أو أكثر)": "(select at least two)",
    "قارن العقارات": "Compare properties",
    "مقارنة العقارات": "Compare properties",
    "الصورة": "Image",
    "العنوان": "Title",
    "نوع الإعلان": "Listing type",
    "نوع العقار": "Property type",
    "السعر": "Price",
    "الغرف": "Bedrooms",
    "الحمامات": "Bathrooms",
    "المساحة (م²)": "Size (m²)",
    "المعلن": "Listed by",
    "رقم التواصل": "Contact number",
    "الموقع التقريبي": "Approximate location",
    "التفاصيل": "Details",
    "القاهرة الجديدة": "New Cairo",
    "القاهرة": "Cairo",
    "الجيزة": "Giza",
    "التبديل إلى الوضع النهاري": "Switch to light mode",
    "التبديل إلى الوضع الليلي": "Switch to dark mode",
    "غير متاح": "Not available",
    "سعر العقار (جنيه)": "Property price (EGP)",
    "مدة السداد (سنة)": "Loan term (years)",
    "الفائدة السنوية (%)": "Annual interest (%)",
    "القسط الشهري التقريبي": "Estimated monthly payment",
    "إجمالي المبلغ": "Total payment",
    "إجمالي الفائدة": "Total interest",
    "خطط ميزانيتك": "Plan your budget",
    "أدخل سعر العقار ومدة السداد ونسبة الفائدة السنوية إن وُجدت.": "Enter the property price, loan term, and annual interest rate, if any.",
    "حساب تقديري على أساس تمويل كامل سعر العقار وثبات الفائدة، من غير مقدم أو رسوم إدارية.": "Estimate assumes full financing and a fixed rate; down payment and fees are excluded.",
    "تجربة أسهل من أول خطوة": "An easier experience from the start",
    "محتاج مساعدة؟": "Need help?",
    "اكتب بياناتك ورسالتك، وهتفتح مسودة جاهزة للإرسال على Gmail.": "Fill in your details to open a ready-to-send Gmail draft.",
    "اسحب الصورة يمينًا أو يسارًا للتنقل بين الغرف.": "Swipe left or right to move between rooms.",
    "جولة افتراضية": "Virtual tour",
    "تواصل واتساب ↗": "Contact on WhatsApp ↗",
    "نشر الإعلان": "Publish listing",
    "تسجيل الدخول": "Sign in",
    "تسجيل الخروج": "Sign out",
    "حسابي": "My account",
    "أهلاً بيك في Sakeena": "Welcome to Sakeena",
    "سجّل دخولك": "Sign in",
    "إنشاء حساب جديد": "Create an account",
    "لديك حساب؟ سجّل الدخول": "Already have an account? Sign in",
    "البريد الإلكتروني": "Email address",
    "كلمة المرور": "Password",
    "تذكّرني على هذا الجهاز": "Remember me on this device",
    "إنشاء حساب": "Create account",
    "أنشئ حسابًا أو سجّل دخولك لاستخدام مساعد العقارات.": "Create an account or sign in to use the property assistant.",
    "لا نستخدم بصمة الصوت لتسجيل الدخول؛ حماية الحساب تتم عبر مصادقة Supabase.": "Voiceprints are not used to sign in; your account is protected through Supabase authentication.",
    "سجّل دخولك لمتابعة العقارات واستخدام مساعد Sakeena.": "Sign in to save properties and use the Sakeena assistant.",
    "سيُحفظ اسمك وبريدك في حساب Sakeena. لا نخزن كلمة المرور بأنفسنا.": "Your name and email are saved to your Sakeena account. We never store your password.",
    "أضف أيضًا مفتاح خدمة الذكاء الاصطناعي على الخادم.": "The AI service key must also be configured on the server.",
    "الاسم": "Name",
    "أضف عقارك على Sakeena": "List your property on Sakeena",
    "إعلانك هيوصل لناس أكتر": "Reach more people with your listing",
    "املأ البيانات الأساسية، وهيظهر إعلانك فوراً ضمن العقارات.": "Add the details and your listing will appear with the properties.",
    "رابط صورة العقار": "Property image URL",
    "السعر بالجنيه": "Price (EGP)",
    "مفتاح مصر +20 مضاف تلقائيًا": "Egypt country code +20 is added automatically",
    "اكتشف العقارات": "Browse properties",
    "تُعالَج الرسائل عبر خدمة الذكاء الاصطناعي، ولا تُحفظ في الموقع.": "Messages are processed by an AI service and are not saved on this site.",
    "تُعالَج الرسائل عبر خدمة الذكاء الاصطناعي، ولا تُحفظ في الموقع. التعرف الصوتي يبدأ عند الضغط فقط.": "Messages are processed by an AI service and are not saved on this site. Speech recognition starts only when you tap the microphone.",
    "اسألني عن العقارات أو المناطق أو التمويل العقاري.": "Ask me about properties, areas, or mortgages.",
    "أهلاً بك في سكينة، تفضل سكينة في مساعدتك.": "Welcome to Sakeena. I'm here to help.",
    "أهلا بك في سكينة العقارية. كيف نقدر نساعدك؟": "Welcome to Sakeena. How can we help?",
    "تواصل واتساب": "Contact on WhatsApp",
    "المعاينة": "Preview",
    "عنوان الإعلان": "Listing title",
    "عدد الغرف": "Bedrooms",
    "عدد الحمامات": "Bathrooms",
    "اسم المعلن": "Owner name",
    "رقم واتساب": "WhatsApp number",
    "المساحة بالمتر": "Area (m²)",
    "اسأل عن العقارات والمناطق": "Ask about properties and areas",
    "اكتب سؤالك هنا...": "Type your question...",
    "إرسال الرسالة": "Send message",
    "واتساب": "WhatsApp",
    "إغلاق": "Close",
    "إغلاق المحادثة": "Close chat",
    "إغلاق الجولة": "Close tour",
    "إغلاق القائمة": "Close menu",
    "فتح القائمة": "Open menu",
    "اسأل مساعد Sakeena": "Ask Sakeena",
    "احسب قسط عقارك": "Estimate your mortgage",
    "احسب القسط": "Calculate payment",
    "دور، اختار، واتواصل.": "Search, choose, and connect.",
    "حدد اللي بتدور عليه": "Set your preferences",
    "اختار المنطقة ونوع العقار والميزانية المناسبة ليك.": "Choose an area, property type, and budget.",
    "قارن براحتك": "Compare with confidence",
    "شوف التفاصيل والصور والموقع، من غير ما تحتاج تسجل.": "Review details, photos, and location without signing up.",
    "كلم صاحب الإعلان": "Contact the owner",
    "تواصل مباشرة بالتليفون أو واتساب واسأل عن كل التفاصيل.": "Reach out by phone or WhatsApp to ask for details.",
    "تجربة البحث عن بيتك": "Your home-search experience",
    "كل حاجة بتحتاجها عشان تختار عقارك، في مكان واحد.": "Everything you need to choose a property, in one place.",
    "مستخدم تجريبي": "Sample user",
    "البحث عن شقة": "Finding an apartment",
    "البحث عن منطقة": "Finding an area",
    "إحنا موجودين علشانك.": "We're here to help.",
    "اسمك": "Your name",
    "بريدك الإلكتروني": "Email address",
    "رسالتك": "Your message",
    "جهّز رسالة على Gmail ↗": "Compose with Gmail ↗"
  };
  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([arabic, english]) => [english, arabic])
  );
  const textNodes = new WeakMap();
  const attributeValues = new WeakMap();
  const defaultTitle = document.title;
  const translationEntries = Object.entries(translations).sort((a, b) => b[0].length - a[0].length);

  function translateText(value, language) {
    const trimmed = value.trim();
    const dictionary = language === "en" ? translations : reverseTranslations;
    if (dictionary[trimmed]) return value.replace(trimmed, dictionary[trimmed]);
    if (language === "en") {
      return translationEntries.reduce((text, [arabic, english]) => text.replaceAll(arabic, english), value);
    }
    return Object.entries(reverseTranslations).sort((a, b) => b[0].length - a[0].length)
      .reduce((text, [english, arabic]) => text.replaceAll(english, arabic), value);
  }

  function translateTree(root, language) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      let state = textNodes.get(node);
      if (!state) {
        state = { original: node.nodeValue, rendered: node.nodeValue };
        textNodes.set(node, state);
      } else if (node.nodeValue !== state.rendered) {
        state.original = node.nodeValue;
      }
      state.rendered = translateText(state.original, language);
      node.nodeValue = state.rendered;
    }
    const elements = [];
    if (root instanceof Element && root.matches("[placeholder], [title], [aria-label]")) elements.push(root);
    root.querySelectorAll?.("[placeholder], [title], [aria-label]").forEach((element) => elements.push(element));
    elements.forEach((element) => {
      ["placeholder", "title", "aria-label"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (!value) return;
        let state = attributeValues.get(element);
        if (!state) {
          state = {};
          attributeValues.set(element, state);
        }
        if (!state[attribute]) state[attribute] = { original: value, rendered: value };
        else if (value !== state[attribute].rendered) state[attribute].original = value;
        state[attribute].rendered = translateText(state[attribute].original, language);
        element.setAttribute(attribute, state[attribute].rendered);
      });
    });
  }

  function applyLanguage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";
    translateTree(document.body, language);
    document.title = translateText(defaultTitle, language);
    applyTheme(theme);
    const button = document.getElementById("language-toggle");
    if (button) {
      button.textContent = language === "en" ? "عربي" : "EN";
      button.setAttribute("aria-label", language === "en" ? "التبديل إلى العربية" : "Switch to English");
    }
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === "dark" ? "#0c1424" : "#f5f7fa";
    const button = document.getElementById("theme-toggle");
    if (button) {
      button.textContent = theme === "dark" ? "☀" : "☾";
      button.title = theme === "dark"
        ? (language === "en" ? "Light theme" : "الوضع النهاري")
        : (language === "en" ? "Dark theme" : "الوضع الليلي");
      button.setAttribute("aria-label", button.title);
    }
  }

  function readPreference(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (error) {
      console.error(`Could not read the ${key} preference:`, error);
      return fallback;
    }
  }

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(`Could not save the ${key} preference:`, error);
    }
  }

  let language = readPreference(languageKey, "ar") === "en" ? "en" : "ar";
  let theme = readPreference(themeKey, "dark") === "light" ? "light" : "dark";
  applyLanguage(language);
  applyTheme(theme);

  document.getElementById("language-toggle")?.addEventListener("click", () => {
    language = language === "ar" ? "en" : "ar";
    savePreference(languageKey, language);
    applyLanguage(language);
    window.dispatchEvent(new CustomEvent("sakeena:languagechange", { detail: { language } }));
  });
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    savePreference(themeKey, theme);
    applyTheme(theme);
  });
  document.getElementById("menu-toggle")?.addEventListener("click", () => {
    document.querySelector(".main-nav")?.classList.toggle("open");
  });

  new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) translateTree(node, language);
      else if (node.nodeType === Node.TEXT_NODE) {
        let state = textNodes.get(node);
        if (!state) {
          state = { original: node.nodeValue, rendered: node.nodeValue };
          textNodes.set(node, state);
        } else if (node.nodeValue !== state.rendered) {
          state.original = node.nodeValue;
        }
        state.rendered = translateText(state.original, language);
        node.nodeValue = state.rendered;
      }
    }));
  }).observe(document.body, { childList: true, subtree: true });
})();
