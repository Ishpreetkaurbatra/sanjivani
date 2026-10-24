# AI For Artisans — Mobile App
**Free AI Market Intelligence for Indian Artisans & MSMEs | Dream of Soul Foundation**

A mobile-first web app and installable Progressive Web App (PWA) delivering consulting-grade market intelligence across 14 modules for India's artisan collectives, SHGs, and rural MSMEs.

📄 **[Read Full Project Report (PROJECT_REPORT.md)](./PROJECT_REPORT.md)**

---

## 🌟 Key Features

1. **Mobile-First Experience**:
   - Native mobile shell with top status bar, smooth touch tabs, bottom navigation bar (Explore, Analyze, Report, AI Advisor, Settings).
   - Desktop responsive wrapper: automatically renders as an elegant smartphone frame on larger screens, with a full-screen toggle.
   - Installable PWA (`manifest.json` + `sw.js`) that works directly on Android & iOS home screens.

2. **Strictly Solid Design (Zero Gradients)**:
   - Designed exclusively with high-contrast, luxury solid colors (`#C9963A` Gold, `#0C0D11` Dark, `#1A6B4A` Emerald, `#1A5FAB` Sky).
   - Absolutely zero `linear-gradient`, `radial-gradient`, or CSS gradient filters.

3. **Active Google Gemini AI Integration**:
   - Connects directly to Google Gemini API (`gemini-2.5-flash`) for real-time executive summaries and strategic evaluations.
   - Interactive **AI Advisor Chat Tab** where artisans can ask questions about export documents, GeM portal, subsidies, and pricing.
   - Safe offline fallback: if no API key is provided, the built-in consulting-grade calculation engine produces all 14 modules deterministically.

4. **Multi-Language Support (22 Indian Languages)**:
   - Includes English, Hindi (हिन्दी), Marathi (मराठी), Bengali (বাংলা), Telugu (తెలుగు), Tamil (தமிழ்), Gujarati (ગુજરાતી), Kannada (ಕನ್ನಡ), Malayalam (മലയാളം), Punjabi (ਪੰਜਾਬੀ), Odia (ଓଡ଼ିଆ), Assamese (অসমীয়া), Urdu (اردو), Maithili (मैथिली), Bhojpuri (भोजपुरी), Sanskrit (संस्कृतम्), Konkani (कोंकणी), Nepali (नेपाली), Sindhi (سنڌي), Dogri (डोगरी), Santali (संथाली), and Kashmiri (کٲشُر).

5. **14 Consulting-Grade Modules**:
   - `01` Product Opportunity Score
   - `02` AI Executive Summary
   - `03` 8-Dimension Readiness Score™
   - `04` Marketplace Intelligence (Amazon, Etsy, GeM, ONDC, IndiaMART, Flipkart, etc.)
   - `05` Competitor Benchmark & Differentiation Gap
   - `06` Target Buyer Personas
   - `07` 8-Tier Pricing Ladder (Village to Luxury Export)
   - `08` 6-Vector Risk Assessment
   - `09` Buyer Acquisition Playbooks
   - `10` Certification Navigator (Udyam, GST, IEC, ZED, GI Tag)
   - `11` Export Dashboard & Missing Document Checklist
   - `12` Event & Trade Fair Intelligence
   - `13` Government Scheme Synergy (PM Vishwakarma, SFURTI, CGTMSE)
   - `14` 12-Month Scale Roadmap & Revenue Projection Canvas

---

## 🚀 How to Run Locally

Because this application uses standard modern web technologies without heavy node_modules dependencies, you can run it immediately with any local server:

### Option A: Using Python (Installed on most systems)
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

### Option B: Using Node / npx
```bash
npx serve .
```

---

## 🌐 How to Deploy Online for Free

### 1. Deploy on Netlify (Drag & Drop in 10 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this entire project folder (`kopergoan`).
3. Your site will instantly go live with a free HTTPS URL (e.g. `market-navigator.netlify.app`).

### 2. Deploy on Vercel
1. Install Vercel CLI: `npm i -g vercel` (or link your GitHub repository on [vercel.com](https://vercel.com)).
2. In this folder, run:
   ```bash
   vercel
   ```
3. Your app is deployed with custom domain support and edge CDN!

### 3. Deploy on GitHub Pages
1. Push this folder to a GitHub repository.
2. In your repository on GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment**, select `Deploy from a branch` and choose `main` / `root`.
4. Click Save. Your app is live at `https://<username>.github.io/<repo-name>/`.

---

## 🔑 Adding Your Free Google Gemini API Key

1. Get a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey).
2. In the mobile app, tap the **Settings** tab (or the **AI Key** pill in the top header).
3. Paste your Gemini API key and tap **Save Key**.
4. The app will immediately activate real-time Gemini AI report generation and interactive chat!

---

## 📁 File Structure (Clean, Zero Unwanted Files)

```text
├── index.html        # Complete mobile web application
├── app.css           # Mobile app stylesheet (Strictly solid colors, 0 gradients)
├── app.js            # App logic, 22 Indian languages, Gemini AI client & 14 modules
├── manifest.json     # PWA manifest for mobile installation
├── sw.js             # Service Worker for offline capability
├── vercel.json       # Vercel deployment config
├── netlify.toml      # Netlify deployment config
├── PROJECT_REPORT.md # Comprehensive consulting-grade project report
└── README.md         # Deployment & documentation guide
```
