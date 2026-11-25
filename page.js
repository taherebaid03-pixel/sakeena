(() => {
  const roiForm = document.getElementById("roi-form");
  if (roiForm) {
    const purchasePriceInput = document.getElementById("roi-purchase-price");
    let roiCalculation = null;
    const suggestedPrice = Number(new URLSearchParams(window.location.search).get("price"));
    if (Number.isFinite(suggestedPrice) && suggestedPrice > 0) {
      purchasePriceInput.value = String(suggestedPrice);
    }

    roiForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(roiForm);
      const purchasePrice = Number(formData.get("purchase-price"));
      const monthlyRent = Number(formData.get("monthly-rent"));
      const annualExpenses = Number(formData.get("annual-expenses"));
      const error = document.getElementById("roi-error");
      if (!Number.isFinite(purchasePrice) || purchasePrice <= 0
        || !Number.isFinite(monthlyRent) || monthlyRent < 0
        || !Number.isFinite(annualExpenses) || annualExpenses < 0) {
        error.textContent = document.documentElement.lang === "en"
          ? "Enter a valid purchase price, rent, and annual expenses."
          : "أدخل سعر شراء وإيجارًا ومصروفات سنوية صحيحة.";
        error.hidden = false;
        return;
      }

      const annualGrossIncome = monthlyRent * 12;
      const annualNetIncome = annualGrossIncome - annualExpenses;
      const grossYield = annualGrossIncome / purchasePrice * 100;
      const netYield = annualNetIncome / purchasePrice * 100;
      if (![annualGrossIncome, annualNetIncome, grossYield, netYield].every(Number.isFinite)) {
        error.textContent = document.documentElement.lang === "en"
          ? "The values are too large to calculate."
          : "القيم المدخلة كبيرة جدًا ولا يمكن حسابها.";
        error.hidden = false;
        return;
      }

      roiCalculation = { purchasePrice, annualGrossIncome, annualNetIncome, grossYield, netYield };
      error.hidden = true;
      document.getElementById("roi-result").hidden = false;
      renderRoiResult();
    });

    function renderRoiResult() {
      if (!roiCalculation) return;
      const locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
      const currency = document.documentElement.lang === "en" ? "EGP" : "جنيه";
      const formatCurrency = (amount) =>
        `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(amount)} ${currency}`;
      const formatYield = (amount) =>
        `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(amount)}%`;
      document.getElementById("roi-gross-income").textContent = formatCurrency(roiCalculation.annualGrossIncome);
      document.getElementById("roi-net-income").textContent = formatCurrency(roiCalculation.annualNetIncome);
      document.getElementById("roi-gross-yield").textContent = formatYield(roiCalculation.grossYield);
      document.getElementById("roi-net-yield").textContent = formatYield(roiCalculation.netYield);
      document.getElementById("roi-payback").textContent = roiCalculation.annualNetIncome > 0
        ? `${new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(roiCalculation.purchasePrice / roiCalculation.annualNetIncome)} ${document.documentElement.lang === "en" ? "years" : "سنة"}`
        : (document.documentElement.lang === "en" ? "Not available" : "غير متاح");
    }

    window.addEventListener("sakeena:languagechange", renderRoiResult);
  }

  const financingForm = document.getElementById("financing-form");
  if (financingForm) {
    let financingResult = null;
    function renderFinancingResult() {
      if (!financingResult) return;
      const locale = document.documentElement.lang === "en" ? "en-US" : "ar-EG";
      const currency = document.documentElement.lang === "en" ? "EGP" : "جنيه";
      const formatCurrency = (amount) =>
        `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(amount)} ${currency}`;
      document.getElementById("monthly-installment").textContent = formatCurrency(financingResult.monthlyPayment);
      document.getElementById("total-payment").textContent = formatCurrency(financingResult.totalPayment);
      document.getElementById("total-interest").textContent = formatCurrency(financingResult.totalInterest);
    }

    financingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(financingForm);
      const price = Number(formData.get("price"));
      const downPayment = Number(formData.get("down-payment"));
      const years = Number(formData.get("years"));
      const rateText = String(formData.get("annual-rate") || "").trim();
      const annualRate = rateText ? Number(rateText) : 0;
      const errorElement = document.getElementById("financing-error");
      if (!Number.isFinite(price) || price <= 0
        || !Number.isFinite(downPayment) || downPayment < 0 || downPayment >= price
        || !Number.isInteger(years) || years < 1 || years > 40
        || !Number.isFinite(annualRate) || annualRate < 0 || annualRate > 100) {
        errorElement.textContent = document.documentElement.lang === "en"
          ? "Enter a down payment that is less than the property price, and check the loan terms."
          : "تأكد من البيانات، ويجب أن يكون المقدم أقل من سعر العقار.";
        errorElement.hidden = false;
        return;
      }
      errorElement.hidden = true;

      const months = years * 12;
      const monthlyRate = annualRate / 1200;
      const loanPrincipal = price - downPayment;
      const monthlyPayment = monthlyRate === 0
        ? loanPrincipal / months
        : loanPrincipal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
      if (!Number.isFinite(monthlyPayment)) {
        errorElement.textContent = document.documentElement.lang === "en"
          ? "Could not calculate the payment. Check the values and try again."
          : "تعذر حساب القسط. راجع البيانات وحاول مرة أخرى.";
        errorElement.hidden = false;
        return;
      }
      const totalPayment = downPayment + monthlyPayment * months;
      const totalInterest = Math.max(0, monthlyPayment * months - loanPrincipal);
      financingResult = { monthlyPayment, totalPayment, totalInterest };
      renderFinancingResult();
      document.getElementById("financing-result").hidden = false;
    });
    window.addEventListener("sakeena:languagechange", renderFinancingResult);
  }

  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const english = document.documentElement.lang === "en";
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    const subject = english ? `Message from ${name}` : `رسالة تواصل من ${name}`;
    const body = [
      `${english ? "Name" : "الاسم"}: ${name}`,
      `${english ? "Email" : "البريد الإلكتروني"}: ${email}`,
      "",
      `${english ? "Message" : "الرسالة"}: ${message}`
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
})();
