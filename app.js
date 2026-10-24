/**
 * AI For Artisans Mobile App Engine
 * Dream of Soul Foundation
 * Strictly Solid Colors — Working Gemini AI Integration — 22 Indian Languages
 */

// Application State
const AppState = {
  activeTab: 'explore',
  step: 1,
  currentLang: 'en',
  geminiKey: localStorage.getItem('marketnav_gemini_api_key') || '',
  product: {
    name: '',
    category: '',
    desc: '',
    materials: '',
    giTag: '',
    mfgType: '',
    price: '',
    monthlyCap: '',
    moq: ''
  },
  business: {
    name: '',
    org: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    bizType: '',
    reg: {
      gst: '',
      udyam: '',
      iec: '',
      fssai: ''
    }
  },
  goals: [],
  scores: null,
  chatHistory: []
};

// --------------------------------------------------------------------------
// MULTI-LANGUAGE SYSTEM (All Major Indian Languages)
// --------------------------------------------------------------------------
const INDIAN_LANGUAGES = [
  { code: 'en', native: 'English', eng: 'English' },
  { code: 'hi', native: 'हिन्दी', eng: 'Hindi' },
  { code: 'mr', native: 'मराठी', eng: 'Marathi' },
  { code: 'bn', native: 'বাংলা', eng: 'Bengali' },
  { code: 'te', native: 'తెలుగు', eng: 'Telugu' },
  { code: 'ta', native: 'தமிழ்', eng: 'Tamil' },
  { code: 'gu', native: 'ગુજરાતી', eng: 'Gujarati' },
  { code: 'kn', native: 'ಕನ್ನಡ', eng: 'Kannada' },
  { code: 'ml', native: 'മലയാളം', eng: 'Malayalam' },
  { code: 'pa', native: 'ਪੰਜਾਬੀ', eng: 'Punjabi' },
  { code: 'or', native: 'ଓଡ଼ିଆ', eng: 'Odia' },
  { code: 'as', native: 'অসমীয়া', eng: 'Assamese' },
  { code: 'ur', native: 'اردو', eng: 'Urdu' },
  { code: 'mai', native: 'मैथिली', eng: 'Maithili' },
  { code: 'bho', native: 'भोजपुरी', eng: 'Bhojpuri' },
  { code: 'sa', native: 'संस्कृतम्', eng: 'Sanskrit' },
  { code: 'kok', native: 'कोंकणी', eng: 'Konkani' },
  { code: 'ne', native: 'नेपाली', eng: 'Nepali' },
  { code: 'sd', native: 'سنڌي', eng: 'Sindhi' },
  { code: 'doi', native: 'डोगरी', eng: 'Dogri' },
  { code: 'sat', native: 'संथाली', eng: 'Santali' },
  { code: 'ks', native: 'کٲشُر', eng: 'Kashmiri' }
];

const I18N = {
  en: {
    heroTitle: "Your Product Deserves a Global Market.",
    heroSub: "India's most comprehensive AI-powered market intelligence platform for artisans, SHGs, FPOs, MSMEs, and rural entrepreneurs. Get a consulting-grade market report in 3 minutes — free.",
    startAnalysis: "Start Free Analysis",
    seeSample: "See Sample Preview",
    tabExplore: "Explore",
    tabAnalyze: "Analyze",
    tabReport: "Report",
    tabAdvisor: "AI Advisor",
    tabSettings: "Settings",
    step1Tag: "Step 1 of 3: Product",
    step1Title: "Tell Us About Your Product",
    step1Sub: "Product details help our AI calculate exact pricing, marketplace fit, and export demand.",
    step2Tag: "Step 2 of 3: Business",
    step2Title: "Your Business Profile",
    step2Sub: "Location and registrations shape scheme eligibility, GeM scoring, and compliance readiness.",
    step3Tag: "Step 3 of 3: Goals",
    step3Title: "Define Your Growth Goals",
    step3Sub: "Select every channel you want to pursue — we map the roadmap and revenue.",
    prodName: "Product Name",
    prodCat: "Product Category",
    prodDesc: "Product Description",
    prodMat: "Raw Materials Used",
    prodGI: "GI Tag / Special Origin",
    mfgType: "Manufacturing Type",
    sellPrice: "Selling Price (₹)",
    capacity: "Production / Month",
    moq: "Minimum Order Quantity (MOQ)",
    contBiz: "Continue to Business Info",
    contGoals: "Continue to Growth Goals",
    genReport: "Generate Market Report",
    fullName: "Full Name",
    orgName: "Organization / Collective",
    mobile: "Mobile Number",
    email: "Email Address",
    state: "State",
    district: "District",
    bizType: "Business Type",
    regStatus: "Registration Status",
    aiAdvisorGreeting: "Namaste! I am your AI For Artisans Advisor powered by Dream of Soul Foundation. Ask me anything about export readiness, GeM portal, artisan subsidies, pricing, or marketplace listings!",
    chatPlaceholder: "Ask anything about selling your craft...",
    downloadPdf: "Download PDF",
    shareReport: "Share on WhatsApp",
    newAnalysis: "New Analysis"
  },
  hi: {
    heroTitle: "आपके उत्पाद को मिलना चाहिए वैश्विक बाज़ार।",
    heroSub: "भारतीय कारीगरों, एसएचजी, एफपीओ और एमएसएमई के लिए भारत का सबसे विश्वसनीय एआई मार्केट इंटेलिजेंस प्लेटफॉर्म। 3 मिनट में निःशुल्क कंसल्टिंग-ग्रेड रिपोर्ट प्राप्त करें।",
    startAnalysis: "निःशुल्क विश्लेषण शुरू करें",
    seeSample: "नमूना रिपोर्ट देखें",
    tabExplore: "होम",
    tabAnalyze: "विश्लेषण",
    tabReport: "रिपोर्ट",
    tabAdvisor: "एआई सलाहकार",
    tabSettings: "सेटिंग्स",
    step1Tag: "चरण 1 / 3: उत्पाद",
    step1Title: "अपने उत्पाद के बारे में बताएं",
    step1Sub: "सटीक जानकारी से एआई सही मूल्य, ई-कॉमर्स प्लेटफॉर्म और निर्यात मांग की गणना करता है।",
    step2Tag: "चरण 2 / 3: व्यवसाय",
    step2Title: "व्यावसायिक प्रोफ़ाइल",
    step2Sub: "आपका राज्य व पंजीकरण सरकारी योजनाओं और GeM पोर्टल की पात्रता तय करते हैं।",
    step3Tag: "चरण 3 / 3: लक्ष्य",
    step3Title: "अपने विकास लक्ष्य चुनें",
    step3Sub: "अमेज़न, एक्सपोर्ट, कॉर्पोरेट गिफ्टिंग — सभी चैनल चुनें, हम रोडमैप तैयार करेंगे।",
    prodName: "उत्पाद का नाम",
    prodCat: "उत्पाद श्रेणी",
    prodDesc: "उत्पाद का विवरण",
    prodMat: "कच्चा माल",
    prodGI: "जीआई टैग / मूल स्थान",
    mfgType: "निर्माण का प्रकार",
    sellPrice: "विक्रय मूल्य (₹)",
    capacity: "मासिक उत्पादन क्षमता",
    moq: "न्यूनतम ऑर्डर मात्रा (MOQ)",
    contBiz: "व्यवसाय जानकारी पर आगे बढ़ें",
    contGoals: "विकास लक्ष्यों पर आगे बढ़ें",
    genReport: "मार्केट रिपोर्ट तैयार करें",
    fullName: "पूरा नाम",
    orgName: "संस्था / व्यवसाय का नाम",
    mobile: "मोबाइल नंबर",
    email: "ईमेल पता",
    state: "राज्य",
    district: "ज़िला",
    bizType: "व्यवसाय का प्रकार",
    regStatus: "पंजीकरण स्थिति",
    aiAdvisorGreeting: "नमस्ते! मैं ड्रीम ऑफ सोल फाउंडेशन द्वारा संचालित आपका एआई मार्केट सलाहकार हूँ। एक्सपोर्ट, जेम (GeM) पोर्टल, सरकारी सब्सिडी या मूल्य निर्धारण के बारे में मुझसे कोई भी सवाल पूछें!",
    chatPlaceholder: "अपने शिल्प के बाज़ार के बारे में पूछें...",
    downloadPdf: "पीडीएफ डाउनलोड करें",
    shareReport: "व्हाट्सएप पर शेयर करें",
    newAnalysis: "नया विश्लेषण"
  },
  mr: {
    heroTitle: "तुमच्या उत्पादनाला मिळायला हवी जागतिक बाजारपेठ.",
    heroSub: "भारतीय कारागीर, बचत गट आणि एमएसएमईसाठी भारतातील पहिले एआय मार्केट इंटेलिजेंस प्लॅटफॉर्म. ३ मिनिटांत मोफत सल्लागार अहवाल मिळवा.",
    startAnalysis: "विनामूल्य विश्लेषण सुरू करा",
    seeSample: "नमुना अहवाल पहा",
    tabExplore: "होम",
    tabAnalyze: "विश्लेषण",
    tabReport: "अहवाल",
    tabAdvisor: "एआय सल्लागार",
    tabSettings: "सेटिंग्ज",
    step1Tag: "पायरी १ / ३: उत्पादन",
    step1Title: "तुमच्या उत्पादनाबद्दल सांगा",
    step1Sub: "उत्पादनाच्या तपशीलांवरून योग्य किंमत, बाजारपेठ आणि निर्यातीचा अंदाज मिळतो.",
    step2Tag: "पायरी २ / ३: व्यवसाय",
    step2Title: "व्यवसाय प्रोफाइल",
    step2Sub: "नोंदणी आणि पत्ता सरकारी योजना व GeM पोर्टलसाठी आवश्यक ठरतात.",
    step3Tag: "पायरी ३ / ३: उद्दिष्टे",
    step3Title: "तुमची उद्दिष्टे निवडा",
    step3Sub: "ऍमेझॉन, निर्यात किंवा कॉर्पोरेट गिफ्टिंग निवडा, आम्ही मार्ग तयार करू.",
    prodName: "उत्पादनाचे नाव",
    prodCat: "उत्पादन वर्ग",
    prodDesc: "उत्पादनाचे वर्णन",
    prodMat: "वापरलेला कच्चा माल",
    prodGI: "जीआय टॅग / वैशिष्ट्य",
    mfgType: "उत्पादन प्रकार",
    sellPrice: "विक्री किंमत (₹)",
    capacity: "मासिक उत्पादन",
    moq: "किमान ऑर्डर (MOQ)",
    contBiz: "व्यवसाय माहितीकडे जा",
    contGoals: "उद्दिष्टांकडे जा",
    genReport: "अहवाल तयार करा",
    fullName: "पूर्ण नाव",
    orgName: "संस्था / बचत गट",
    mobile: "मोबाईल नंबर",
    email: "ईमेल",
    state: "राज्य",
    district: "जिल्हा",
    bizType: "व्यवसाय प्रकार",
    regStatus: "नोंदणी स्थिती",
    aiAdvisorGreeting: "नमस्कार! मी ड्रीम ऑफ सोल फाउंडेशनचा एआय मार्केट सल्लागार आहे. निर्यात, जेम पोर्टल किंवा सरकारी अनुदानाविषयी विचारा!",
    chatPlaceholder: "येथे प्रश्न विचारा...",
    downloadPdf: "पीडीएफ डाउनलोड करा",
    shareReport: "व्हॉट्सॲपवर शेअर करा",
    newAnalysis: "नवीन विश्लेषण"
  },
  bn: {
    heroTitle: "আপনার পণ্যের প্রয়োজন একটি আন্তর্জাতিক বাজার।",
    heroSub: "ভারতের কারিগর, স্বনির্ভর দল এবং ক্ষুদ্র উদ্যোক্তাদের জন্য নিখরচায় এআই মার্কেট ইন্টেলিজেন্স প্ল্যাটফর্ম। ৩ মিনিটে পান পূর্ণাঙ্গ কনসাল্টিং রিপোর্ট।",
    startAnalysis: "বিনামূল্যে শুরু করুন",
    seeSample: "নমুনা রিপোর্ট দেখুন",
    tabExplore: "হোম",
    tabAnalyze: "বিশ্লেষণ",
    tabReport: "রিপোর্ট",
    tabAdvisor: "এআই উপদেষ্টা",
    tabSettings: "সেটিংস",
    step1Tag: "ধাপ ১ / ৩: পণ্য",
    step1Title: "আপনার পণ্য সম্পর্কে বলুন",
    step1Sub: "পণ্যের সঠিক তথ্যের মাধ্যমে এআই নিখুঁত মূল্য ও রপ্তানি সম্ভাবনা তৈরি করে।",
    step2Tag: "ধাপ ২ / ৩: ব্যবসা",
    step2Title: "ব্যবসায়িক তথ্য",
    step2Sub: "আপনার অবস্থান ও নথিপত্র সরকারি অনুদান ও GeM পোর্টালের পথ সুগম করে।",
    step3Tag: "ধাপ ৩ / ৩: লক্ষ্য",
    step3Title: "আপনার লক্ষ্য নির্ধারণ করুন",
    step3Sub: "আমাজন, এটসি, রপ্তানি বা কর্পোরেট উপহার — আপনার পথ আমরা দেখাব।",
    prodName: "পণ্যের নাম",
    prodCat: "পণ্যের বিভাগ",
    prodDesc: "পণ্যের বিবরণ",
    prodMat: "ব্যবহৃত কাঁচামাল",
    prodGI: "জিআই ট্যাগ / ভৌগোলিক বিশেষত্ব",
    mfgType: "উৎপাদন পদ্ধতি",
    sellPrice: "বিক্রয় মূল্য (₹)",
    capacity: "মাসিক উৎপাদন ক্ষমতা",
    moq: "সর্বনিম্ন অর্ডারের পরিমাণ",
    contBiz: "পরবর্তী ধাপে যান",
    contGoals: "লক্ষ্য নির্ধারণে যান",
    genReport: "রিপোর্ট তৈরি করুন",
    fullName: "পূর্ণ নাম",
    orgName: "সংস্থা / ক্লাস্টার",
    mobile: "মোবাইল নম্বর",
    email: "ইমেইল",
    state: "রাজ্য",
    district: "জেলা",
    bizType: "ব্যবসার ধরণ",
    regStatus: "রেজিস্ট্রেশন স্ট্যাটাস",
    aiAdvisorGreeting: "নমস্কার! আমি ড্রিম অফ সোল ফাউন্ডেশনের এআই মার্কেট উপদেষ্টা। রপ্তানি, অনুদান বা বাজার সংক্রান্ত যেকোনো প্রশ্ন করুন।",
    chatPlaceholder: "এখানে আপনার প্রশ্ন লিখুন...",
    downloadPdf: "পিডিএফ ডাউনলোড",
    shareReport: "হোয়াটসঅ্যাপে শেয়ার",
    newAnalysis: "নতুন বিশ্লেষণ"
  }
};

// Fill in other Indian languages fallback smoothly
function getTranslation(key) {
  const lang = AppState.currentLang;
  if (I18N[lang] && I18N[lang][key]) {
    return I18N[lang][key];
  }
  if (I18N['en'][key]) {
    return I18N['en'][key];
  }
  return key;
}

// --------------------------------------------------------------------------
// INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initTabs();
  initLanguages();
  initSettings();
  initPWA();
  initAIChat();
  applyLanguage(AppState.currentLang);
  
  // Update AI Status Pill
  updateAIPill();
});

// Real-time status bar clock
function initClock() {
  const timeEl = document.getElementById('status-time-display');
  function update() {
    const d = new Date();
    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');
    if (timeEl) timeEl.textContent = `${h}:${m}`;
  }
  update();
  setInterval(update, 30000);
}

// Mobile Tab Navigation
function initTabs() {
  const navButtons = document.querySelectorAll('.nav-tab-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  AppState.activeTab = tabId;
  
  // Update nav buttons
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  
  // Update views
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active-tab');
  });
  
  const targetPane = document.getElementById(`${tabId}-tab-pane`);
  if (targetPane) {
    targetPane.classList.add('active-tab');
  }
  
  // Scroll to top of viewport
  const vp = document.getElementById('mobile-viewport');
  if (vp) vp.scrollTop = 0;
  
  // Play subtle haptic feedback
  triggerHaptic();
}

function triggerHaptic() {
  if ('vibrate' in navigator) {
    try { navigator.vibrate(12); } catch (e) {}
  }
}

// Desktop Frame Toggle (Expand / Normal Phone Frame)
function toggleDesktopFrame() {
  const shell = document.getElementById('mobile-app-shell');
  const btn = document.getElementById('viewport-toggle-btn');
  if (shell) {
    shell.classList.toggle('fullscreen-mode');
    const isFull = shell.classList.contains('fullscreen-mode');
    if (btn) {
      btn.innerHTML = isFull 
        ? '<i class="fas fa-mobile-alt"></i> Mobile Frame' 
        : '<i class="fas fa-expand"></i> Full View';
    }
  }
}

// --------------------------------------------------------------------------
// LANGUAGE SYSTEM
// --------------------------------------------------------------------------
function initLanguages() {
  const langGrid = document.getElementById('lang-select-grid');
  if (!langGrid) return;
  
  langGrid.innerHTML = INDIAN_LANGUAGES.map(l => `
    <div class="lang-option-pill ${l.code === AppState.currentLang ? 'active' : ''}" onclick="selectLanguage('${l.code}')">
      <div>
        <div class="lang-native-name">${l.native}</div>
        <div class="lang-eng-name">${l.eng}</div>
      </div>
      ${l.code === AppState.currentLang ? '<i class="fas fa-check" style="color:var(--gold-dk)"></i>' : ''}
    </div>
  `).join('');
}

function openLangSheet() {
  const sheet = document.getElementById('lang-sheet-backdrop');
  if (sheet) sheet.classList.add('is-visible');
}

function closeLangSheet() {
  const sheet = document.getElementById('lang-sheet-backdrop');
  if (sheet) sheet.classList.remove('is-visible');
}

function selectLanguage(code) {
  AppState.currentLang = code;
  closeLangSheet();
  initLanguages();
  applyLanguage(code);
  showToast(`Language set to ${INDIAN_LANGUAGES.find(l => l.code === code)?.native || code}`);
}

function applyLanguage(code) {
  // Update Header Button Text
  const langBtnText = document.getElementById('current-lang-code-text');
  if (langBtnText) {
    const item = INDIAN_LANGUAGES.find(l => l.code === code);
    langBtnText.textContent = item ? item.native : code.toUpperCase();
  }
  
  // Update Translatable DOM Elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = getTranslation(key);
  });
  
  // Update Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    el.setAttribute('placeholder', getTranslation(key));
  });
}

// --------------------------------------------------------------------------
// SETTINGS & GEMINI API KEY MANAGEMENT
// --------------------------------------------------------------------------
function initSettings() {
  const keyInput = document.getElementById('settings-api-key-input');
  if (keyInput && AppState.geminiKey) {
    keyInput.value = AppState.geminiKey;
  }
}

function saveGeminiKey() {
  const keyInput = document.getElementById('settings-api-key-input');
  if (!keyInput) return;
  const val = keyInput.value.trim();
  AppState.geminiKey = val;
  if (val) {
    localStorage.setItem('marketnav_gemini_api_key', val);
    showToast('Gemini API Key Saved! AI is now fully active.');
  } else {
    localStorage.removeItem('marketnav_gemini_api_key');
    showToast('API Key cleared. Using built-in calculation engine.');
  }
  updateAIPill();
}

function openAISettingsModal() {
  switchTab('settings');
  const keyInput = document.getElementById('settings-api-key-input');
  if (keyInput) keyInput.focus();
}

function updateAIPill() {
  const pill = document.getElementById('ai-status-pill');
  if (!pill) return;
  if (AppState.geminiKey) {
    pill.className = 'ai-status-pill active';
    pill.innerHTML = '<i class="fas fa-brain"></i> <span>Gemini AI Active</span>';
  } else {
    pill.className = 'ai-status-pill unconfigured';
    pill.innerHTML = '<i class="fas fa-bolt"></i> <span>Add AI Key</span>';
  }
}

// --------------------------------------------------------------------------
// FORM LOGIC & STEP NAVIGATION
// --------------------------------------------------------------------------
function goToStep(stepNum) {
  if (stepNum > AppState.step && !validateStep(AppState.step)) {
    return;
  }
  
  AppState.step = stepNum;
  
  // Update Step indicators
  for (let i = 1; i <= 3; i++) {
    const ind = document.getElementById(`step-indicator-${i}`);
    if (ind) {
      ind.classList.remove('active', 'completed');
      if (i < stepNum) ind.classList.add('completed');
      if (i === stepNum) ind.classList.add('active');
    }
  }
  
  // Show / Hide step form cards
  document.querySelectorAll('.form-step-section').forEach(s => s.style.display = 'none');
  const target = document.getElementById(`form-step-${stepNum}`);
  if (target) target.style.display = 'block';
  
  // Scroll to top
  const vp = document.getElementById('mobile-viewport');
  if (vp) vp.scrollTop = 0;
  
  triggerHaptic();
}

function validateStep(stepNum) {
  if (stepNum === 1) {
    const name = document.getElementById('input-pName')?.value.trim();
    const cat = document.getElementById('input-pCat')?.value;
    const desc = document.getElementById('input-pDesc')?.value.trim();
    const price = document.getElementById('input-pPrice')?.value;
    const mfg = document.querySelector('input[name="mfgRadio"]:checked')?.value;
    
    if (!name) {
      showToast('Please enter your product name');
      document.getElementById('input-pName')?.focus();
      return false;
    }
    if (!cat) {
      showToast('Please select a product category');
      document.getElementById('input-pCat')?.focus();
      return false;
    }
    if (!desc) {
      showToast('Please add a short product description');
      document.getElementById('input-pDesc')?.focus();
      return false;
    }
    if (!mfg) {
      showToast('Please select a manufacturing mode');
      return false;
    }
    if (!price || isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      showToast('Please enter a valid selling price');
      document.getElementById('input-pPrice')?.focus();
      return false;
    }
  }
  
  if (stepNum === 2) {
    const bName = document.getElementById('input-bName')?.value.trim();
    const bMob = document.getElementById('input-bMob')?.value.trim();
    const bState = document.getElementById('input-bState')?.value;
    const biz = document.querySelector('input[name="bizRadio"]:checked')?.value;
    
    if (!bName) {
      showToast('Please enter your full name');
      document.getElementById('input-bName')?.focus();
      return false;
    }
    if (!bMob) {
      showToast('Please enter your mobile number');
      document.getElementById('input-bMob')?.focus();
      return false;
    }
    if (!bState) {
      showToast('Please select your state');
      document.getElementById('input-bState')?.focus();
      return false;
    }
    if (!biz) {
      showToast('Please select your entity type');
      return false;
    }
  }
  
  if (stepNum === 3) {
    const checked = document.querySelectorAll('.goal-checkbox-item input:checked');
    if (!checked.length) {
      showToast('Please select at least one growth goal');
      return false;
    }
  }
  
  return true;
}

function setRegToggle(btn, field, val) {
  const group = btn.parentElement;
  group.querySelectorAll('.tog-btn').forEach(b => b.classList.remove('is-yes', 'is-no'));
  btn.classList.add(val === 'y' ? 'is-yes' : 'is-no');
  AppState.business.reg[field] = val;
  triggerHaptic();
}

function collectFormData() {
  AppState.product = {
    name: document.getElementById('input-pName')?.value.trim() || '',
    category: document.getElementById('input-pCat')?.value || '',
    desc: document.getElementById('input-pDesc')?.value.trim() || '',
    materials: document.getElementById('input-pMat')?.value.trim() || '',
    giTag: document.getElementById('input-pGI')?.value.trim() || '',
    mfgType: document.querySelector('input[name="mfgRadio"]:checked')?.value || '',
    price: parseFloat(document.getElementById('input-pPrice')?.value) || 0,
    monthlyCap: document.getElementById('input-pCap')?.value.trim() || '',
    moq: document.getElementById('input-pMOQ')?.value.trim() || ''
  };
  
  AppState.business.name = document.getElementById('input-bName')?.value.trim() || '';
  AppState.business.org = document.getElementById('input-bOrg')?.value.trim() || '';
  AppState.business.mobile = document.getElementById('input-bMob')?.value.trim() || '';
  AppState.business.email = document.getElementById('input-bEmail')?.value.trim() || '';
  AppState.business.state = document.getElementById('input-bState')?.value || '';
  AppState.business.district = document.getElementById('input-bDist')?.value.trim() || '';
  AppState.business.bizType = document.querySelector('input[name="bizRadio"]:checked')?.value || '';
  
  AppState.goals = Array.from(document.querySelectorAll('.goal-checkbox-item input:checked')).map(i => i.value);
}

// --------------------------------------------------------------------------
// REPORT ANALYSIS & CALCULATION ENGINE
// --------------------------------------------------------------------------
async function startFullAnalysis() {
  if (!validateStep(3)) return;
  collectFormData();
  
  // Show analyzing screen
  document.getElementById('form-flow-wrapper').style.display = 'none';
  const loadingScreen = document.getElementById('analyzing-screen');
  loadingScreen.classList.add('active');
  
  // Animate loading rows
  const stepIds = [1, 2, 3, 4, 5, 6, 7];
  let delay = 0;
  const interval = 2800 / stepIds.length;
  
  stepIds.forEach((s, idx) => {
    delay += interval;
    setTimeout(() => {
      const cur = document.getElementById(`loading-row-${s}`);
      if (cur) {
        cur.classList.remove('is-running');
        cur.classList.add('is-done');
        cur.querySelector('i').className = 'fas fa-check-circle';
      }
      if (idx < stepIds.length - 1) {
        const next = document.getElementById(`loading-row-${s + 1}`);
        if (next) {
          next.classList.add('is-running');
          next.querySelector('i').className = 'fas fa-circle-notch fa-spin';
        }
      }
    }, delay);
  });
  
  // Call Gemini AI or Deterministic Fallback
  let aiExecutiveSummary = null;
  if (AppState.geminiKey) {
    try {
      aiExecutiveSummary = await fetchGeminiSummary();
    } catch (err) {
      console.warn('Gemini live call error, using deterministic analysis:', err);
    }
  }
  
  setTimeout(() => {
    loadingScreen.classList.remove('active');
    document.getElementById('form-flow-wrapper').style.display = 'block';
    
    // Calculate full 14 modules
    AppState.scores = computeScores();
    renderCompleteReport(aiExecutiveSummary);
    
    // Switch to Report tab
    switchTab('report');
    showToast('Market Intelligence Report Generated!');
  }, 3200);
}

function computeScores() {
  const p = AppState.product;
  const b = AppState.business;
  const g = AppState.goals;
  const r = b.reg;
  
  const catLower = (p.category || '').toLowerCase();
  const price = p.price;
  const mfg = (p.mfgType || '').toLowerCase();
  const hasGI = !!(p.giTag && p.giTag.trim());
  const hasMat = !!(p.materials && p.materials.length > 5);
  
  const CAT_PROFILES = {
    'handicraft': { d: 82, e: 88, s: 74, c: 55 },
    'handloom': { d: 79, e: 85, s: 71, c: 58 },
    'food': { d: 84, e: 78, s: 80, c: 68 },
    'agri': { d: 81, e: 75, s: 77, c: 65 },
    'jewellery': { d: 77, e: 82, s: 68, c: 72 },
    'home': { d: 76, e: 80, s: 78, c: 66 },
    'organic': { d: 88, e: 83, s: 75, c: 60 },
    'bamboo': { d: 78, e: 86, s: 72, c: 50 },
    'pottery': { d: 74, e: 81, s: 65, c: 52 },
    'wooden': { d: 73, e: 79, s: 67, c: 54 },
    'leather': { d: 72, e: 77, s: 70, c: 64 },
    'eco': { d: 85, e: 84, s: 76, c: 58 },
    'gifting': { d: 86, e: 75, s: 82, c: 70 },
    'beauty': { d: 87, e: 80, s: 78, c: 73 },
    'paper': { d: 68, e: 72, s: 65, c: 55 }
  };
  
  let matchedKey = 'handicraft';
  for (const k of Object.keys(CAT_PROFILES)) {
    if (catLower.includes(k)) {
      matchedKey = k;
      break;
    }
  }
  const base = CAT_PROFILES[matchedKey];
  
  let demand = base.d;
  if (hasGI) demand += 5;
  if (mfg.includes('handmade')) demand += 3;
  if (hasMat && (p.materials.toLowerCase().includes('organic') || p.materials.toLowerCase().includes('natural'))) demand += 3;
  if (g.includes('Corporate Gifting')) demand += 4;
  if (price > 1000) demand += 2;
  demand = Math.min(98, Math.max(45, demand));
  
  let exportScore = base.e;
  if (hasGI) exportScore += 6;
  if (mfg.includes('handmade')) exportScore += 4;
  if (g.includes('Export')) exportScore += 5;
  if (g.includes('Etsy')) exportScore += 3;
  exportScore = Math.min(97, Math.max(40, exportScore));
  
  let scale = base.s;
  if (mfg.includes('hybrid')) scale += 5;
  if (mfg.includes('machine')) scale += 8;
  if (g.includes('GeM')) scale += 4;
  scale = Math.min(95, Math.max(40, scale));
  
  let comp = base.c;
  if (hasGI) comp -= 8;
  if (mfg.includes('handmade')) comp -= 5;
  comp = Math.min(90, Math.max(20, comp));
  
  let readiness = 40;
  if (r.gst === 'y') readiness += 12;
  if (r.udyam === 'y') readiness += 12;
  if (r.iec === 'y') readiness += 10;
  if (r.fssai === 'y') readiness += 8;
  readiness = Math.min(84, readiness);
  
  let mktReady = readiness + 15;
  if (hasGI) mktReady += 5;
  mktReady = Math.min(89, mktReady);
  
  const opportunity = Math.round((demand * 0.35) + (exportScore * 0.35) + (scale * 0.2) + (mktReady * 0.1));
  
  return { demand, export: exportScore, scale, comp, mktReady, readiness, opportunity };
}

// --------------------------------------------------------------------------
// GOOGLE GEMINI AI REST INTEGRATION
// --------------------------------------------------------------------------
async function fetchGeminiSummary() {
  const p = AppState.product;
  const b = AppState.business;
  const g = AppState.goals;
  const lang = AppState.currentLang;
  const langName = INDIAN_LANGUAGES.find(l => l.code === lang)?.eng || 'English';
  
  const systemPrompt = `You are the Lead Market Intelligence Advisor for Dream of Soul Foundation, analyzing market opportunities for Indian artisans, MSMEs, and rural entrepreneurs.
Provide a high-impact, consulting-grade executive summary (approx 200 words) for:
- Product: "${p.name}" (Category: ${p.category}, Materials: ${p.materials}, GI: ${p.giTag}, Price: ₹${p.price})
- Business: ${b.name} (${b.bizType}) from ${b.district}, ${b.state}.
- Goals: ${g.join(', ')}.
- Registrations: GST: ${b.reg.gst}, Udyam: ${b.reg.udyam}, IEC: ${b.reg.iec}.

Deliver 3 clear paragraphs:
1. Market Opportunity & Global Demand Context
2. Key Channel Positioning (Amazon, Etsy, GeM, Corporate Gifting)
3. Top 3 Actionable Next Steps to scale.
Write the response in ${langName} language using authentic, empowering tone.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${AppState.geminiKey}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: systemPrompt }] }]
    })
  });
  
  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }
  
  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  return text;
}

// --------------------------------------------------------------------------
// RENDER ALL 14 REPORT MODULES (Strictly Solid Colors)
// --------------------------------------------------------------------------
function renderCompleteReport(aiSummaryText) {
  const p = AppState.product;
  const b = AppState.business;
  const g = AppState.goals;
  const sc = AppState.scores;
  
  const genDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  
  // Header Banner
  const titleEl = document.getElementById('report-product-title');
  if (titleEl) titleEl.textContent = `${p.name} — Market Intelligence Report`;
  
  const metaEl = document.getElementById('report-product-meta');
  if (metaEl) metaEl.textContent = `${b.name}${b.org ? ' · ' + b.org : ''} · ${b.state}${b.district ? ', ' + b.district : ''} · ${genDate}`;
  
  // Quick Metrics
  const metricsWrap = document.getElementById('report-quick-metrics-grid');
  if (metricsWrap) {
    metricsWrap.innerHTML = `
      <div class="quick-metric-tile">
        <div class="qm-val">${sc.opportunity}</div>
        <div class="qm-lbl">Opportunity</div>
      </div>
      <div class="quick-metric-tile">
        <div class="qm-val">${sc.readiness}%</div>
        <div class="qm-lbl">Readiness</div>
      </div>
      <div class="quick-metric-tile">
        <div class="qm-val">10</div>
        <div class="qm-lbl">Platforms</div>
      </div>
    `;
  }
  
  // Module 01: Product Opportunity Rings (Solid colors)
  renderOpportunityRings(sc);
  
  // Module 02: AI Executive Summary
  renderExecutiveSummary(aiSummaryText, sc);
  
  // Module 03: Readiness Score (8 Dimensions)
  renderReadinessScore();
  
  // Module 04: Marketplace Intelligence (10 Platforms)
  renderMarketplaces();
  
  // Module 05: Competitor Intelligence
  renderCompetitors();
  
  // Module 06: Buyer Personas
  renderPersonas();
  
  // Module 07: Pricing Ladder (8 Tiers)
  renderPricingLadder();
  
  // Module 08: Risk Assessment (6 Vectors)
  renderRisks();
  
  // Module 09: Buyer Acquisition Playbooks
  renderStrategy();
  
  // Module 10: Certification Navigator
  renderCertifications();
  
  // Module 11: Export Dashboard
  renderExportDashboard();
  
  // Module 12: Event Intelligence
  renderEvents();
  
  // Module 13: Government Schemes
  renderSchemes();
  
  // Module 14: Revenue Projection & 12-Month Roadmap
  renderRevenueChart();
  renderRoadmap();
  
  // Investor Mode & Action Center
  renderInvestorMode();
  renderActionCenter();
}

function renderOpportunityRings(sc) {
  const container = document.getElementById('report-opportunity-rings');
  if (!container) return;
  
  const items = [
    { label: 'Demand Score', val: sc.demand, color: '#C9963A', desc: sc.demand >= 80 ? 'Very High Demand' : 'Strong Demand' },
    { label: 'Export Fit', val: sc.export, color: '#1A5FAB', desc: sc.export >= 80 ? 'Exceptional Fit' : 'High Export Fit' },
    { label: 'Scalability', val: sc.scale, color: '#5B2D8E', desc: 'Good Growth Path' },
    { label: 'Competition', val: sc.comp, color: '#1A6B4A', desc: sc.comp <= 55 ? 'Low Competition' : 'Moderate Field' }
  ];
  
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  
  container.innerHTML = items.map(item => {
    const offset = circumference - (item.val / 100) * circumference;
    return `
      <div class="score-box-card">
        <div class="ring-score-wrap">
          <svg viewBox="0 0 68 68" width="64" height="64">
            <circle class="ring-bg-track" cx="34" cy="34" r="${radius}"/>
            <circle class="ring-progress-bar" cx="34" cy="34" r="${radius}" 
              stroke="${item.color}" 
              stroke-dasharray="${circumference.toFixed(1)}" 
              stroke-dashoffset="${offset.toFixed(1)}"/>
          </svg>
          <div class="ring-number-center">${item.val}</div>
        </div>
        <div class="score-box-title">${item.label}</div>
        <div class="score-box-sub">${item.desc}</div>
      </div>
    `;
  }).join('');
}

function renderExecutiveSummary(aiText, sc) {
  const container = document.getElementById('report-exec-summary-box');
  if (!container) return;
  
  const p = AppState.product;
  const b = AppState.business;
  const g = AppState.goals;
  
  let bodyContent = '';
  if (aiText) {
    const formatted = aiText.split('\n\n').map(para => `<p>${para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`).join('');
    bodyContent = `
      <div class="exec-ai-badge" style="margin-bottom:12px">
        <i class="fas fa-brain"></i> Generated by Google Gemini AI
      </div>
      <div class="exec-card-body">${formatted}</div>
    `;
  } else {
    // High-quality deterministic brief matching original
    bodyContent = `
      <div class="exec-ai-badge" style="margin-bottom:12px">
        <i class="fas fa-compass"></i> DoS Market Intelligence Brief
      </div>
      <div class="exec-card-body">
        <p><strong>Market Opportunity:</strong> The global handmade artisan market stands at <strong>USD 752 billion</strong>, expanding at 12% CAGR. <strong>${p.name}</strong> (${p.category}) carries high international pull, especially among US, EU, and Australian buyers seeking authentic handmade craftsmanship.${p.materials ? ` Raw materials like ${p.materials} provide an eco-friendly differentiator.` : ''}</p>
        <p><strong>Channel Priority:</strong> For a <strong>${b.bizType}</strong> based in <strong>${b.state}</strong>, primary immediate traction lies in <strong>${g.includes('Amazon') ? 'Amazon FBA' : 'national marketplaces'}</strong> and <strong>${g.includes('Etsy') ? 'Etsy Global' : 'cross-border e-commerce'}</strong>. At ₹${p.price} local MRP, your recommended marketplace price is <strong>₹${Math.round(p.price * 1.3)}</strong> and Etsy export price is <strong>$${Math.round(p.price * 1.8 / 83)} USD</strong>.</p>
        <p><strong>Top Recommendations:</strong> (1) Complete Udyam & GST to unlock marketplace onboarding; (2) Capture 15 high-res lifestyle product photos; (3) Connect with Dream of Soul Foundation for free institutional and CSR buyer linkages.</p>
      </div>
    `;
  }
  
  container.innerHTML = `
    <div class="exec-summary-card">
      ${bodyContent}
      <div class="exec-tags-row">
        <span class="exec-chip chip-green">✓ Demand: ${sc.demand}/100</span>
        <span class="exec-chip chip-gold">⚡ Export: ${sc.export}/100</span>
        <span class="exec-chip chip-sky">🏛️ State: ${b.state}</span>
        ${p.giTag ? `<span class="exec-chip chip-gold">🏅 GI Tag: ${p.giTag}</span>` : ''}
      </div>
    </div>
  `;
}

function renderReadinessScore() {
  const container = document.getElementById('report-readiness-box');
  if (!container) return;
  
  const r = AppState.business.reg;
  const overall = AppState.scores.readiness;
  
  const dims = [
    { n: 'Documentation Readiness', p: r.udyam === 'y' && r.gst === 'y' ? 75 : (r.udyam === 'y' || r.gst === 'y' ? 52 : 35), c: '#C9963A', t: 'Get Udyam & GST to reach 80%+' },
    { n: 'Marketplace Readiness', p: r.gst === 'y' ? 62 : 38, c: '#1A6B4A', t: 'GST unlocks Amazon, Flipkart, and GeM listings.' },
    { n: 'Export Readiness', p: r.iec === 'y' ? 60 : 25, c: '#1A5FAB', t: 'IEC Code (₹500 at dgft.gov.in) is your first unlock.' },
    { n: 'Funding & Grant Readiness', p: r.udyam === 'y' ? 65 : 40, c: '#5B2D8E', t: 'Udyam enables CGTMSE collateral-free loans.' },
    { n: 'Branding & Identity', p: 45, c: '#C9963A', t: 'Invest in crisp photography and artisan story brochure.' },
    { n: 'Certification & Quality', p: r.fssai === 'y' ? 55 : 30, c: '#1A6B4A', t: 'ZED Certification is subsidized for MSMEs.' },
    { n: 'Digital Presence', p: 35, c: '#B83232', t: 'Activate Google Business Profile and Instagram shop.' },
    { n: 'Corporate Buyer Readiness', p: 40, c: '#1A5FAB', t: 'Create sample kits with CSR impact sheets.' }
  ];
  
  container.innerHTML = `
    <div class="readiness-overall-card">
      <div class="overall-score-big">${overall}</div>
      <div class="overall-score-label">Overall Business Readiness Score</div>
      <div style="font-size:12px;color:#A5ADC0;margin-top:6px;">You are <strong style="color:var(--gold-lt);">${100 - overall} points</strong> away from complete enterprise readiness.</div>
    </div>
    ${dims.map(d => `
      <div class="dimension-item-card">
        <div class="dim-header">
          <span>${d.n}</span>
          <span class="dim-pct">${d.p}/100</span>
        </div>
        <div class="dim-progress-track">
          <div class="dim-progress-fill" style="width:${d.p}%;background-color:${d.c}"></div>
        </div>
        <div class="dim-advice"><i class="fas fa-arrow-right" style="color:var(--gold);margin-right:4px;"></i>${d.t}</div>
      </div>
    `).join('')}
  `;
}

function renderMarketplaces() {
  const container = document.getElementById('report-marketplaces-box');
  if (!container) return;
  
  const MPS = [
    { nm: 'Amazon India', em: '📦', bg: '#FF9900', sc: 92, cf: 'High', fee: '8–15% commission', rev: '₹2–8 L/mo', req: 'GST, Bank Account', why: 'Largest Indian marketplace with 200M+ buyers. Karigar program provides fee discounts.' },
    { nm: 'Etsy Global', em: '🧶', bg: '#F1641E', sc: 88, cf: 'High', fee: '6.5% + $0.20 listing', rev: '$500–2,500/mo', req: 'PayPal/Payoneer, Story', why: 'Gold standard for handmade goods. International buyers pay 3–8x premium for Indian craft.' },
    { nm: 'GeM Portal', em: '🏛️', bg: '#0057A8', sc: 84, cf: 'High', fee: 'Zero platform fee', rev: '₹1–15 L/order', req: 'Udyam, PAN, Bank Account', why: 'Government departments purchase ₹2L+ Crore annually with guaranteed prompt payments.' },
    { nm: 'ONDC Network', em: '📱', bg: '#5C2D91', sc: 80, cf: 'High', fee: '1–5% buyer fee', rev: '₹50K–3 L/mo', req: 'GST, Bank Account', why: 'India open digital commerce network. Low commission and growing rapidly in tier-2/3 cities.' },
    { nm: 'IndiaMART B2B', em: '🏭', bg: '#0064D1', sc: 77, cf: 'Medium', fee: '₹4K–50K/year', rev: '₹1–6 L/mo', req: 'Business details', why: "India's largest B2B portal for wholesale and corporate gifting bulk inquiries." },
    { nm: 'Flipkart Samarth', em: '🛍️', bg: '#F74F00', sc: 71, cf: 'Medium', fee: '5–20% by category', rev: '₹1–4 L/mo', req: 'GST, Brand', why: 'Samarth initiative offers dedicated onboarding and incubation for artisans.' },
    { nm: 'Alibaba Export', em: '🌏', bg: '#FF6A00', sc: 68, cf: 'Medium', fee: '$399–$2,999/yr', rev: '$2K–15K/mo', req: 'IEC, Quality Certs', why: "Global B2B wholesale orders. Ideal once production reaches 500+ pieces monthly." },
    { nm: 'Faire Wholesale', em: '🎨', bg: '#2D5BE3', sc: 65, cf: 'Medium', fee: '15% first order', rev: '$500–5K/mo', req: 'IEC, Brand story', why: 'US/EU boutique marketplace. Independent store owners buy curated Indian home décor.' }
  ];
  
  container.innerHTML = MPS.map(m => {
    const badgeColor = m.cf === 'High' ? 'background-color:#E8F5EF;color:#1A6B4A' : 'background-color:#F6EDDC;color:#9B6F28';
    return `
      <div class="marketplace-item-card">
        <div class="mp-header-row">
          <div class="mp-logo-badge" style="background-color:${m.bg}">${m.em}</div>
          <div class="mp-name-col">
            <div class="mp-item-name">${m.nm}</div>
            <span class="mp-confidence-pill" style="${badgeColor}">● ${m.cf} Fit</span>
          </div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:15px;font-weight:700;color:var(--gold-dk)">${m.sc}%</div>
        </div>
        <div class="mp-stats-row">
          <div class="mp-stat-subbox"><div class="mp-sub-lbl">Fee</div><div class="mp-sub-val">${m.fee}</div></div>
          <div class="mp-stat-subbox"><div class="mp-sub-lbl">Potential</div><div class="mp-sub-val" style="color:var(--green)">${m.rev}</div></div>
          <div class="mp-stat-subbox"><div class="mp-sub-lbl">Prerequisite</div><div class="mp-sub-val">${m.req}</div></div>
        </div>
        <div class="mp-reason-text"><strong>Why:</strong> ${m.why}</div>
      </div>
    `;
  }).join('');
}

function renderCompetitors() {
  const container = document.getElementById('report-competitors-box');
  if (!container) return;
  
  const comps = [
    { r: 'Competitor Tier 1', b: 'Mass-Market Factory Brands', p: 'Price-focused, high volume, no artisan story', pr: '₹99–299', s: 'Mass distribution, heavy Amazon ads', g: 'Zero cultural story. Your opportunity: Highlight hand-crafting at 2x price.' },
    { r: 'Competitor Tier 2', b: 'Urban D2C Aggregators', p: 'Curated aesthetic, premium pricing', pr: '₹800–2,500', s: 'Sleek packaging, Instagram presence', g: 'They are middlemen. Your direct artisan relationship builds deep trust.' },
    { r: 'Competitor Tier 3', b: 'Global Etsy Sellers', p: 'Handmade overseas products', pr: '$15–80 USD', s: 'English narrative, international SEO', g: 'Indian heritage and GI-tagged authenticity give you the winning edge.' },
    { r: 'Competitor Tier 4', b: 'Corporate Gifting Resellers', p: 'Catalog-heavy, low customization', pr: '₹200–1,500', s: 'Bulk credit terms, big B2B networks', g: 'No CSR narrative. Corporates prefer verified artisan sourcing with impact metrics.' }
  ];
  
  container.innerHTML = comps.map(c => `
    <div class="competitor-card-item">
      <div class="comp-rank-title">${c.r}</div>
      <div class="comp-brand-title">${c.b}</div>
      <div class="comp-pos-desc">${c.p}</div>
      <div class="comp-detail-line"><span>Price Range:</span><strong>${c.pr}</strong></div>
      <div class="comp-detail-line"><span>Key Strength:</span><span>${c.s}</span></div>
      <div class="comp-opp-gap"><i class="fas fa-bolt" style="margin-right:4px;"></i>Your Advantage: ${c.g}</div>
    </div>
  `).join('');
}

function renderPersonas() {
  const container = document.getElementById('report-personas-box');
  if (!container) return;
  
  const personas = [
    { i: '🌿', n: 'Eco-Conscious Millennial', d: 'Urban, 26–38 yrs, values sustainability. Buys on Instagram/Etsy. Pays premium for authentic stories.', sp: '₹800–3,500 / order' },
    { i: '🏢', n: 'Corporate HR & CSR Head', d: 'Buys bulk artisan kits for employee Diwali/festive gifts. Needs verified NGO source and GST bill.', sp: '₹5L–50L annual budget' },
    { i: '🌍', n: 'Overseas NRI Diaspora', d: 'High disposable income. Seeks traditional cultural decor for homes in US, UK, Canada, Australia.', sp: '$40–180 per piece' },
    { i: '🏨', n: 'Boutique Hotel & Resort', d: 'Requires authentic local artisan crafts for room decor, amenity kits, and guest souvenirs.', sp: '₹500–2,500 / unit' }
  ];
  
  container.innerHTML = personas.map(p => `
    <div class="persona-card-item">
      <div class="persona-icon-large">${p.i}</div>
      <div class="persona-name-title">${p.n}</div>
      <div class="persona-profile-desc">${p.d}</div>
      <div class="persona-spend-box">
        <div class="ps-label">Avg. Spending Potential</div>
        <div class="ps-val">${p.sp}</div>
      </div>
    </div>
  `).join('');
}

function renderPricingLadder() {
  const container = document.getElementById('report-pricing-box');
  if (!container) return;
  
  const base = AppState.product.price || 500;
  const tiers = [
    { l: '🏘️ Village Haat', m: 0.4, mg: 'Cost base', ch: 'Local fairs' },
    { l: '🏪 Wholesale B2B', m: 0.6, mg: '20% margin', ch: 'Distributors' },
    { l: '🛒 Retail MRP', m: 1.0, mg: '40% margin', ch: 'Direct sales' },
    { l: '📦 Amazon / ONDC', m: 1.3, mg: '35% net', ch: 'Marketplaces' },
    { l: '🎁 Corporate Gifting', m: 1.6, mg: '50% net', ch: 'Bulk corporate' },
    { l: '✈️ Etsy Export (USD)', m: 2.2, mg: '65% net', ch: 'US / UK export' },
    { l: '💎 Luxury Boutique', m: 3.5, mg: '75% net', ch: 'High-end retail' }
  ];
  
  container.innerHTML = `
    <div class="pricing-ladder-table">
      <div class="pricing-table-header">
        <div>Tier</div>
        <div>Price</div>
        <div>Margin</div>
      </div>
      ${tiers.map(t => `
        <div class="pricing-table-row">
          <div class="tier-name">${t.l}<br><span style="font-size:10px;color:var(--muted);font-weight:400">${t.ch}</span></div>
          <div class="tier-price">₹${Math.round(base * t.m).toLocaleString('en-IN')}</div>
          <div class="tier-margin">${t.mg}</div>
        </div>
      `).join('')}
    </div>
    <div style="background-color:var(--gold-subtle);border:1.5px solid var(--gold);border-radius:var(--r-sm);padding:12px;margin-top:10px;font-size:12px;color:var(--ink-secondary);line-height:1.5">
      <i class="fas fa-lightbulb" style="color:var(--gold-dk);margin-right:4px;"></i>
      <strong>Pricing Insight:</strong> At your current baseline of <strong>₹${base}</strong>, listing on Amazon at <strong>₹${Math.round(base * 1.3)}</strong> covers platform fees comfortably, while Etsy export can be set at <strong>$${Math.round(base * 2.2 / 83)} USD</strong>.
    </div>
  `;
}

function renderRisks() {
  const container = document.getElementById('report-risks-box');
  if (!container) return;
  
  const r = AppState.business.reg;
  const risks = [
    { n: 'Competition Risk', l: 'med', d: 'Mass factory replicas competing on aggressive low price.', m: 'Emphasize handmade story, GI origin tag, and artisan collective proof.' },
    { n: 'Compliance & Tax Risk', l: r.gst !== 'y' ? 'high' : 'low', d: 'Missing GST or Udyam blocks access to Amazon, GeM, and export clearances.', m: 'Apply for Udyam (free) and GST (free) within 10 days.' },
    { n: 'Logistics & Breakage', l: 'med', d: 'Handcrafted items risk in-transit transit damage.', m: 'Use bubble-wrap cushion packaging and reliable logistics like Shiprocket/DHL.' },
    { n: 'Export Documentation', l: r.iec !== 'y' ? 'high' : 'low', d: 'Absence of IEC prevents customs clearance for foreign shipments.', m: 'Register for IEC code on dgft.gov.in (₹500, takes 48 hours).' }
  ];
  
  container.innerHTML = risks.map(item => `
    <div class="risk-card-item">
      <div class="risk-card-top">
        <div class="risk-name">${item.n}</div>
        <span class="risk-tag ${item.l}">${item.l.toUpperCase()} RISK</span>
      </div>
      <div class="risk-detail">${item.d}</div>
      <div class="risk-mitigation"><i class="fas fa-shield-alt" style="margin-right:4px;"></i>${item.m}</div>
    </div>
  `).join('');
}

function renderStrategy() {
  const container = document.getElementById('report-strategy-box');
  if (!container) return;
  
  const strats = [
    { i: '🏢', t: 'Corporate Gifting Playbook', s: '₹1L–10L order size', steps: ['Build a 1-page PDF catalogue showing craft heritage and artisan photos.', 'Connect with HR and CSR heads on LinkedIn 45 days before festive season.', 'Offer sample boxes at nominal cost; HR teams convert on touch-and-feel.'] },
    { i: '✈️', t: 'Export Buyer Playbook', s: '2x–3x domestic margins', steps: ['Apply for IEC Code and register with Export Promotion Council (EPCH).', 'List top 10 SKUs on Etsy with clear USD pricing and DHL delivery.', 'Respond to international RFQs on Alibaba and Faire.'] },
    { i: '🏛️', t: 'GeM Government Tender Playbook', s: 'Zero commission orders', steps: ['Register Udyam MSME and OEM brand on gem.gov.in.', 'Upload products under Handicraft/Giftware procurement categories.', 'Participate in direct purchase bids under ₹5 Lakhs (exempt from tenders).'] }
  ];
  
  container.innerHTML = strats.map(s => `
    <div class="strat-card-item">
      <div class="strat-card-title">${s.i} ${s.t}</div>
      <div class="strat-potential">${s.s}</div>
      <ul class="strat-list">
        ${s.steps.map(step => `<li>${step}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('report-certs-box');
  if (!container) return;
  
  const certs = [
    { t: 'req', n: 'Udyam Registration', d: 'Government MSME identification — unlocks subsidies, bank loan guarantee, and GeM.', tm: 'Free · 1 Day' },
    { t: 'req', n: 'GST Registration', d: 'Required for Amazon, Flipkart, ONDC, and inter-state billing.', tm: 'Free · 7 Days' },
    { t: 'req', n: 'IEC Code (Import Export)', d: 'Mandatory DGFT code for international shipping and receiving foreign payments.', tm: '₹500 · 2 Days' },
    { t: 'rec', n: 'ZED Certification', d: 'Zero Defect Zero Effect — up to 80% subsidized for micro-enterprises.', tm: 'Subsidized · 4 Weeks' },
    { t: 'fut', n: 'GI Tag Authorization', d: 'Geographical Indication protection commands 30–50% export price premium.', tm: 'Long-term asset' }
  ];
  
  container.innerHTML = certs.map(c => `
    <div class="cert-card-item">
      <span class="cert-type-pill ${c.t}">${c.t === 'req' ? 'Required' : (c.t === 'rec' ? 'Recommended' : 'Future')}</span>
      <div class="cert-name">${c.n}</div>
      <div class="cert-desc">${c.d}</div>
      <div class="cert-timeline"><i class="fas fa-clock" style="color:var(--gold);margin-right:4px;"></i>${c.tm}</div>
    </div>
  `).join('');
}

function renderExportDashboard() {
  const container = document.getElementById('report-export-box');
  if (!container) return;
  
  const r = AppState.business.reg;
  const pct = r.iec === 'y' ? 65 : 30;
  const base = AppState.product.price || 500;
  
  const countries = [
    { f: '🇺🇸', n: 'United States', p: `$${(base * 1.8 / 83).toFixed(0)}–$${(base * 2.5 / 83).toFixed(0)} USD` },
    { f: '🇬🇧', n: 'United Kingdom', p: `£${(base * 1.6 / 105).toFixed(0)}–£${(base * 2.2 / 105).toFixed(0)} GBP` },
    { f: '🇦🇪', n: 'UAE', p: `AED ${(base * 0.045).toFixed(0)}–${(base * 0.065).toFixed(0)}` },
    { f: '🇩🇪', n: 'Germany', p: `€${(base * 1.7 / 90).toFixed(0)}–€${(base * 2.3 / 90).toFixed(0)}` }
  ];
  
  const missing = [];
  if (r.iec !== 'y') missing.push({ i: 'fa-file-invoice', n: 'IEC Code', a: 'Apply on dgft.gov.in (₹500)' });
  missing.push({ i: 'fa-university', n: 'AD Code with Bank', a: 'Get AD Code letter from current account branch' });
  missing.push({ i: 'fa-shield-alt', n: 'ECGC Credit Insurance', a: 'Protects against international buyer default' });
  
  container.innerHTML = `
    <div class="export-dash-card">
      <div class="export-score-header">
        <div class="export-score-circle">
          <div class="exp-val-num">${pct}%</div>
          <div class="exp-val-label">READY</div>
        </div>
        <div>
          <div style="font-size:15px;font-weight:700;color:#FFFFFF">Export Readiness Progress</div>
          <div style="font-size:11.5px;color:#A5ADC0">Complete the checklist below to begin foreign shipments.</div>
        </div>
      </div>
      <div class="country-grid-cards">
        ${countries.map(c => `
          <div class="country-tile">
            <div class="c-flag">${c.f}</div>
            <div class="c-name">${c.n}</div>
            <div class="c-price">${c.p}</div>
          </div>
        `).join('')}
      </div>
      <div class="missing-docs-list">
        <div style="font-size:11px;font-weight:700;color:var(--gold-lt);margin-bottom:6px;text-transform:uppercase">Missing Document Checklist</div>
        ${missing.map(m => `
          <div class="missing-doc-item">
            <i class="fas ${m.i}"></i>
            <div>
              <div class="missing-doc-name">${m.n}</div>
              <div class="missing-doc-action">${m.a}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderEvents() {
  const container = document.getElementById('report-events-box');
  if (!container) return;
  
  const evs = [
    { mo: 'NOV', n: 'India International Trade Fair (IITF)', loc: 'Pragati Maidan, New Delhi', cost: '₹30K–1L', roi: 'Very High', note: 'Dedicated artisan & craft pavilions with subsidized stalls.' },
    { mo: 'FEB', n: 'Surajkund International Crafts Mela', loc: 'Faridabad, Haryana', cost: '₹15K–50K', roi: 'High', note: 'Massive B2C footfall, supported by Ministry of Tourism.' },
    { mo: 'JAN', n: 'IHGF Delhi Fair (Export Handicrafts)', loc: 'India Expo Centre, Greater Noida', cost: 'Subsidized by EPCH', roi: 'Exceptional', note: 'Direct access to verified international import buyers.' },
    { mo: 'ONLINE', n: 'GeM Seller Tenders (Year-Round)', loc: 'gem.gov.in (Digital)', cost: 'Zero', roi: 'Very High', note: 'Central & State Government procurement tenders.' }
  ];
  
  container.innerHTML = evs.map(e => `
    <div class="event-row-item">
      <div class="event-top-info">
        <div class="event-name-title">${e.n}</div>
        <span class="event-month-tag">${e.mo}</span>
      </div>
      <div class="event-location"><i class="fas fa-map-marker-alt" style="color:var(--gold);margin-right:4px;"></i>${e.loc}</div>
      <div style="font-size:11.5px;color:var(--charcoal);line-height:1.45">${e.note}</div>
      <div class="event-chips-row">
        <span class="event-chip">💰 Stall: ${e.cost}</span>
        <span class="event-chip">📈 ROI: ${e.roi}</span>
      </div>
    </div>
  `).join('');
}

function renderSchemes() {
  const container = document.getElementById('report-schemes-box');
  if (!container) return;
  
  const schemes = [
    { m: 'Ministry of MSME', n: 'PM Vishwakarma Yojana', d: 'Free skill training, ₹15,000 modern toolkit, and ₹3 Lakh collateral-free loan at 5% interest.', b: '₹3 Lakh Loan + Toolkit + Stipend' },
    { m: 'Ministry of Textiles', n: 'SFURTI Artisan Cluster Scheme', d: 'Infrastructure funding for common facility centers and modern marketing assistance.', b: 'Up to ₹2.5 Crore cluster grant' },
    { m: 'Ministry of Commerce', n: 'MSME Export Promotion (Market Access)', d: '50%–75% financial subsidy for participating in overseas trade exhibitions.', b: 'Subsidized stall & flight costs' },
    { m: 'SIDBI / MSME', n: 'CGTMSE Credit Guarantee Scheme', d: 'Collateral-free business credit for micro-enterprises up to ₹2 Crore.', b: 'Collateral-free credit support' }
  ];
  
  container.innerHTML = schemes.map(s => `
    <div class="scheme-card-item">
      <div class="scheme-ministry">${s.m}</div>
      <div class="scheme-name">${s.n}</div>
      <div class="scheme-desc">${s.d}</div>
      <div class="scheme-benefit-box">
        <i class="fas fa-check-circle"></i> ${s.b}
      </div>
    </div>
  `).join('');
}

function renderRevenueChart() {
  const canvas = document.getElementById('revenue-projection-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const base = AppState.product.price || 500;
  
  // Custom Solid Canvas Chart (No external script required, 100% reliable)
  const width = canvas.width = canvas.parentElement.clientWidth || 360;
  const height = canvas.height = 180;
  
  ctx.clearRect(0, 0, width, height);
  
  const labels = ['Current', 'Online', 'B2B', 'Export'];
  const values = [
    base * 20,
    base * 110,
    base * 320,
    base * 750
  ];
  const colors = ['#8C92A4', '#C9963A', '#1A6B4A', '#1A5FAB'];
  
  const maxVal = values[3];
  const barWidth = 38;
  const gap = (width - (barWidth * 4)) / 5;
  const chartHeight = height - 48;
  
  values.forEach((v, idx) => {
    const x = gap + idx * (barWidth + gap);
    const barH = (v / maxVal) * chartHeight;
    const y = height - 28 - barH;
    
    // Bar (Solid color)
    ctx.fillStyle = colors[idx];
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barH, [6, 6, 0, 0]);
    ctx.fill();
    
    // Value Label
    ctx.fillStyle = '#0D0E12';
    ctx.font = 'bold 11px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    const displayVal = v >= 100000 ? `₹${(v / 100000).toFixed(1)}L` : `₹${Math.round(v / 1000)}k`;
    ctx.fillText(displayVal, x + barWidth / 2, y - 6);
    
    // X Label
    ctx.fillStyle = '#7E8698';
    ctx.font = '600 10.5px Instrument Sans, sans-serif';
    ctx.fillText(labels[idx], x + barWidth / 2, height - 10);
  });
}

function renderRoadmap() {
  const container = document.getElementById('report-roadmap-box');
  if (!container) return;
  
  const quarters = [
    { q: 'Q1 · Months 1–3', t: 'Compliance & Digital Identity', tasks: ['Obtain Udyam, GST, and IEC registrations.', 'Complete 15 professional white-background photos.', 'Open Amazon Seller & ONDC account.'] },
    { q: 'Q2 · Months 4–6', t: 'Marketplace & B2B Activation', tasks: ['Launch 10 listings on Etsy with English storytelling.', 'Submit OEM registration on GeM portal.', 'Send introductory sample kits to 10 corporate HR leads.'] },
    { q: 'Q3 · Months 7–9', t: 'Export & Bulk Wholesale', tasks: ['Apply for subsidized stall at national trade fair.', 'Set up export bank AD Code and ECGC policy.', 'Dispatch first trial export shipment.'] },
    { q: 'Q4 · Months 10–12', t: 'Scale & Diversification', tasks: ['Evaluate revenue channels and double down on top performers.', 'Apply for ZED Gold certification for enterprise credibility.', 'Partner with Dream of Soul for annual CSR gifting orders.'] }
  ];
  
  container.innerHTML = quarters.map(item => `
    <div class="quarter-step-card">
      <span class="quarter-badge">${item.q}</span>
      <div class="quarter-title">${item.t}</div>
      <ul class="quarter-tasks-list">
        ${item.tasks.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderInvestorMode() {
  const container = document.getElementById('report-investor-box');
  if (!container) return;
  
  container.innerHTML = `
    <div class="investor-drawer-box">
      <button class="investor-toggle-trigger" onclick="toggleInvestorDrawer()">
        <i class="fas fa-lock-open"></i> Investor & Incubator Intelligence
      </button>
      <div class="investor-content-body" id="investor-drawer-body">
        <div class="inv-metric-grid">
          <div class="inv-metric-cell"><div class="inv-metric-val">$752B</div><div class="inv-metric-lbl">Global Craft TAM</div></div>
          <div class="inv-metric-cell"><div class="inv-metric-val">12%</div><div class="inv-metric-lbl">Annual Sector CAGR</div></div>
          <div class="inv-metric-cell"><div class="inv-metric-val">7.2M</div><div class="inv-metric-lbl">Artisan Households</div></div>
          <div class="inv-metric-cell"><div class="inv-metric-val">85%+</div><div class="inv-metric-lbl">Women In Workforce</div></div>
        </div>
        <div style="font-size:12px;color:#CBD0DC;line-height:1.6;margin-bottom:10px">
          <strong>Social Return on Investment (SROI):</strong> Every ₹1 exported generates ₹3.20 in domestic rural multiplier circulation. Direct livelihood generation aligned with UN SDGs 1, 5, 8, 10, 11, 12.
        </div>
      </div>
    </div>
  `;
}

function toggleInvestorDrawer() {
  const body = document.getElementById('investor-drawer-body');
  if (body) {
    body.classList.toggle('is-open');
    triggerHaptic();
  }
}

function renderActionCenter() {
  const container = document.getElementById('report-action-center-box');
  if (!container) return;
  
  const services = [
    { i: '📦', t: 'Amazon Karigar', s: 'Account setup & onboarding' },
    { i: '🧶', t: 'Etsy Storefront', s: 'Listing & keyword strategy' },
    { i: '🏛️', t: 'GeM Registration', s: 'Tender & catalogue listing' },
    { i: '✈️', t: 'Export Clearance', s: 'IEC, AD Code & customs' },
    { i: '🎁', t: 'Corporate Gifting', s: 'CSR catalog connection' },
    { i: '🏅', t: 'ZED Certification', s: 'Subsidized MSME filing' }
  ];
  
  container.innerHTML = services.map(s => `
    <div class="ac-service-tile" onclick="openContactEmail('${s.t}')">
      <div class="ac-service-icon">${s.i}</div>
      <div class="ac-service-title">${s.t}</div>
      <div class="ac-service-sub">${s.s}</div>
    </div>
  `).join('');
}

function openContactEmail(subject) {
  const email = 'hello@dreamofsoul.com';
  const sub = encodeURIComponent(`AI For Artisans Inquiry: ${subject}`);
  const body = encodeURIComponent(`Hello Dream of Soul Team,\n\nI have generated an AI For Artisans Report for "${AppState.product.name}" and would like assistance with ${subject}.\n\nThank you.`);
  window.open(`mailto:${email}?subject=${sub}&body=${body}`);
}

// --------------------------------------------------------------------------
// AI ADVISOR CHAT (Interactive Gemini AI)
// --------------------------------------------------------------------------
function initAIChat() {
  const sendBtn = document.getElementById('chat-send-btn');
  const chatInput = document.getElementById('chat-text-input');
  
  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', handleChatSubmit);
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleChatSubmit();
    });
  }
}

async function handleChatSubmit() {
  const chatInput = document.getElementById('chat-text-input');
  if (!chatInput) return;
  const userText = chatInput.value.trim();
  if (!userText) return;
  
  chatInput.value = '';
  appendChatBubble(userText, 'user');
  
  // Typing indicator
  const typingEl = appendChatBubble('<i class="fas fa-circle-notch fa-spin"></i> Analyzing with AI...', 'bot');
  
  if (!AppState.geminiKey) {
    setTimeout(() => {
      typingEl.innerHTML = `Namaste! To enable dynamic real-time Gemini AI chat, please add your Google Gemini API Key in the <strong>Settings tab</strong>. In the meantime, you can explore the 14-module report for verified insights!`;
    }, 600);
    return;
  }
  
  try {
    const p = AppState.product;
    const b = AppState.business;
    const prompt = `You are the AI For Artisans Advisor for Dream of Soul Foundation, assisting Indian artisan ${b.name || 'User'} regarding "${p.name || 'handcrafted goods'}".
User question: "${userText}".
Provide a concise, highly practical, supportive answer with specific next steps in ${INDIAN_LANGUAGES.find(l => l.code === AppState.currentLang)?.eng || 'English'}. Include relevant Indian government schemes or marketplace specifics where applicable.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${AppState.geminiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    
    if (!res.ok) throw new Error('Gemini API call failed');
    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'I could not generate an answer right now. Please try again.';
    
    typingEl.innerHTML = reply.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  } catch (err) {
    typingEl.innerHTML = 'There was an issue contacting the Gemini AI service. Please verify your API Key in Settings or check your internet connection.';
  }
}

function appendChatBubble(text, sender) {
  const chatLog = document.getElementById('advisor-chat-log');
  if (!chatLog) return null;
  
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = text;
  chatLog.appendChild(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
  return bubble;
}

function sendPresetPrompt(text) {
  const chatInput = document.getElementById('chat-text-input');
  if (chatInput) {
    chatInput.value = text;
    handleChatSubmit();
  }
}

// --------------------------------------------------------------------------
// PDF EXPORT & WHATSAPP SHARING
// --------------------------------------------------------------------------
function exportReportPDF() {
  triggerHaptic();
  showToast('Preparing clean printable report...');
  setTimeout(() => {
    window.print();
  }, 400);
}

function shareOnWhatsApp() {
  const p = AppState.product;
  const sc = AppState.scores || { opportunity: 82 };
  const text = encodeURIComponent(`I just generated an AI Market Intelligence Report for "${p.name || 'my product'}" on Dream of Soul's AI For Artisans app! My Opportunity Score is ${sc.opportunity}/100 with export recommendations.\n\nGenerate your free report here: ${window.location.href}`);
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}

function resetAnalysis() {
  const pName = document.getElementById('input-pName'); if (pName) pName.value = '';
  const pCat = document.getElementById('input-pCat'); if (pCat) pCat.selectedIndex = 0;
  const pDesc = document.getElementById('input-pDesc'); if (pDesc) pDesc.value = '';
  const pMat = document.getElementById('input-pMat'); if (pMat) pMat.value = '';
  const pGI = document.getElementById('input-pGI'); if (pGI) pGI.value = '';
  const pPrice = document.getElementById('input-pPrice'); if (pPrice) pPrice.value = '';
  const pCap = document.getElementById('input-pCap'); if (pCap) pCap.value = '';
  const pMOQ = document.getElementById('input-pMOQ'); if (pMOQ) pMOQ.value = '';
  document.querySelectorAll('input[name="mfgRadio"]').forEach(r => r.checked = false);
  
  const bName = document.getElementById('input-bName'); if (bName) bName.value = '';
  const bOrg = document.getElementById('input-bOrg'); if (bOrg) bOrg.value = '';
  const bMob = document.getElementById('input-bMob'); if (bMob) bMob.value = '';
  const bEmail = document.getElementById('input-bEmail'); if (bEmail) bEmail.value = '';
  const bState = document.getElementById('input-bState'); if (bState) bState.selectedIndex = 0;
  const bDist = document.getElementById('input-bDist'); if (bDist) bDist.value = '';
  document.querySelectorAll('input[name="bizRadio"]').forEach(r => r.checked = false);
  
  document.querySelectorAll('.reg-btn-group .tog-btn').forEach(b => b.classList.remove('is-yes', 'is-no'));
  document.querySelectorAll('.goal-checkbox-item input').forEach(c => c.checked = false);
  
  AppState.product = { name: '', category: '', desc: '', materials: '', giTag: '', mfgType: '', price: '', monthlyCap: '', moq: '' };
  AppState.business = { name: '', org: '', mobile: '', email: '', state: '', district: '', bizType: '', reg: { gst: '', udyam: '', iec: '', fssai: '' } };
  AppState.goals = [];
  AppState.scores = null;

  AppState.step = 1;
  goToStep(1);
  switchTab('analyze');
  showToast('Ready for new product analysis');
}

// --------------------------------------------------------------------------
// TOAST NOTIFICATIONS
// --------------------------------------------------------------------------
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('mobile-toast');
  const msgEl = document.getElementById('mobile-toast-text');
  if (!toast || !msgEl) return;
  
  msgEl.textContent = message;
  toast.classList.add('is-active');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('is-active');
  }, 3500);
}

// --------------------------------------------------------------------------
// PWA SERVICE WORKER
// --------------------------------------------------------------------------
function initPWA() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('SW registration optional:', err);
    });
  }
}
