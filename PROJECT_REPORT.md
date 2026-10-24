# Project Report: AI For Artisans (Dream of Soul Foundation)

**Document Version:** 1.0.0  
**Project Classification:** Open-Access AI Market Intelligence Platform & Progressive Web App (PWA)  
**Organization:** Dream of Soul Foundation *(Section 8 Non-Profit | CIN: U88900WR2026NPL292771 | Siliguri, West Bengal, India)*  
**Repository:** [https://github.com/Ishpreetkaurbatra/sanjivani.git](https://github.com/Ishpreetkaurbatra/sanjivani.git)  
**Date of Assessment:** October 2026  

---

## 1. Executive Summary

**AI For Artisans** is a mobile-first Progressive Web App (PWA) built to bridge the digital and commercial divide experienced by India's informal craft economy. Handcrafted products represent a global Total Addressable Market (TAM) of **$752 Billion** expanding at **12% CAGR**, engaging more than **7.2 million artisan households** in India—over 85% of whom are women.

Despite strong global demand for authentic Indian craftsmanship, rural artisans, Self-Help Groups (SHGs), Farmer Producer Organizations (FPOs), and micro-MSMEs face structural barriers:
- **Severe Information Asymmetry:** Grassroots producers lack real-time visibility into domestic e-commerce (Amazon Karigar, Flipkart Samarth, ONDC), government procurement (GeM Portal), and export demand (Etsy Global, Faire, international trade fairs).
- **Sub-Optimal Pricing:** Products are predominantly sold at village haats or to exploitative intermediaries at 20–40% of their true commercial value.
- **Regulatory & Compliance Inertia:** Complex registration procedures (Udyam, GST, IEC, ZED, GI Tagging) deter formalization.

**AI For Artisans** resolves these bottlenecks by delivering **14 consulting-grade market intelligence modules in under 3 minutes** at zero cost to the producer. The app functions completely client-side with zero build overhead, incorporates a **Strictly Solid Design System (0% gradients)**, supports **22 scheduled Indian languages**, and pairs a deterministic offline calculation engine with **Google Gemini 2.5 Flash** for personalized strategic briefs.

---

## 2. System Architecture & Technical Stack

```mermaid
graph TD
    User([Artisan / MSME User]) --> Shell[Mobile App Shell & Viewport Host]
    Shell --> Nav[5-Tab Bottom Navigation]
    
    subgraph Frontend Core
        Nav --> Tab1[Tab 1: Explore & Carousel]
        Nav --> Tab2[Tab 2: 3-Step Analysis Wizard]
        Nav --> Tab3[Tab 3: 14-Module Intelligence Report]
        Nav --> Tab4[Tab 4: AI Advisor Chat]
        Nav --> Tab5[Tab 5: Settings & Key Storage]
    end

    subgraph Analytical & AI Pipeline
        Tab2 --> Validator[Input Validation Engine]
        Validator --> ScoringEngine[Consulting-Grade Scoring Engine]
        Validator -. Optional Key .-> GeminiAPI[Google Gemini 2.5 Flash API]
        ScoringEngine --> ReportRenderer[14-Module DOM & Canvas Renderer]
        GeminiAPI --> ReportRenderer
    end

    subgraph Offline & Storage Tier
        PWA[Service Worker sw.js] --> Cache[Cache Storage: Assets & Shell]
        LocalStorage[(Browser LocalStorage: API Key & State)]
        Manifest[manifest.json PWA Manifest]
    end
```

### 2.1 Technology Specifications

| Layer | Implementation | Strategic Rationale |
| :--- | :--- | :--- |
| **Markup & Semantics** | HTML5 (Semantic Structure) | Zero compilation overhead; immediate load on 2G/3G rural networks; SEO optimized. |
| **Styling & Theming** | Vanilla CSS3 (`app.css`, 2,737 lines) | **Strictly Solid Colors** (zero CSS gradients). Uses design tokens, CSS variables, and modern responsive breakpoints. |
| **Logic & State Engine** | Vanilla ES6+ JavaScript (`app.js`, 1,564 lines) | Framework-free; zero `node_modules` dependencies; instant cold start; 100% portable. |
| **Visualization Tier** | Native HTML5 Canvas 2D & SVG Rings | Hardware-accelerated dynamic charts without heavy third-party bundle weight (e.g., Chart.js). |
| **AI Integration** | Google Gemini 2.5 Flash REST API | Generates real-time executive summaries and drives the conversational AI Advisor. |
| **Offline & PWA** | Service Worker (`sw.js`) & Manifest (`manifest.json`) | Cache-first asset strategy for offline operation; installable to Android/iOS home screens. |
| **Localization** | Multi-lingual Dictionary Engine | 22 Official Indian Regional Languages (Hindi, Marathi, Bengali, Tamil, etc.). |
| **Cloud Hosting** | Netlify (`netlify.toml`) & Vercel (`vercel.json`) | Global CDN edge caching, security headers (`nosniff`, `SAMEORIGIN`), clean URL routing. |

---

## 3. Core Functional Modules (The 14 Intelligence Modules)

Upon completing the 3-step structured wizard (Product Details $\rightarrow$ Business Profile $\rightarrow$ Strategic Goals), the engine synthesizes an exhaustive market diagnostic report:

```mermaid
flowchart LR
    subgraph Diagnostics
        M1[01. Opportunity Score]
        M2[02. AI Exec Summary]
        M3[03. Readiness Score]
    end
    subgraph Market & Strategy
        M4[04. Marketplace Intel]
        M5[05. Competitor Matrix]
        M6[06. Buyer Personas]
        M7[07. 8-Tier Pricing]
        M8[08. Risk Assessment]
        M9[09. Buyer Playbooks]
    end
    subgraph Execution & Scale
        M10[10. Certifications]
        M11[11. Export Dashboard]
        M12[12. Trade Fairs]
        M13[13. Govt Schemes]
        M14[14. Revenue Canvas]
    end
```

### Module Breakdown

| Module | Identifier | Engine Mechanics & Content |
| :--- | :--- | :--- |
| **01** | **Product Opportunity Score** | Dynamic SVG ring visualization scoring Demand (0–100), Export Fit (0–100), Scalability (0–100), and Competition Intensity (0–100) based on craft category and GI tag status. |
| **02** | **AI Executive Summary** | 3-paragraph strategy memo synthesized dynamically via **Gemini 2.5 Flash** (or deterministic fallback) detailing market opportunity, channel positioning, and top 3 priorities. |
| **03** | **8-Dimension Readiness Score™** | Granular readiness evaluation: Documentation, Marketplace, Export, Funding/Grants, Branding, Quality Certs, Digital Presence, and Corporate Buyer Readiness. |
| **04** | **Marketplace Intelligence** | Evaluates and ranks 10 leading channels: Amazon Karigar, Etsy Global, GeM Portal, ONDC, IndiaMART, Flipkart Samarth, Alibaba, and Faire Wholesale with commissions and prerequisites. |
| **05** | **Competitor Benchmarking** | 4-tier competitive landscape comparing Mass Factory Brands, D2C Aggregators, Global Etsy Sellers, and Corporate Gifting Resellers with artisan differentiation gaps. |
| **06** | **Buyer Persona Engine** | Identifies target archetypes: Eco-Conscious Millennials, Corporate HR/CSR Buyers, NRI Diaspora, and Boutique Hotels/Resorts with specific basket sizes. |
| **07** | **8-Tier Pricing Ladder** | Mathematical pricing trajectory from Village Haat $\rightarrow$ Wholesale B2B $\rightarrow$ Retail MRP $\rightarrow$ Amazon/ONDC $\rightarrow$ Corporate Gifting $\rightarrow$ Etsy Export (USD) $\rightarrow$ Luxury Boutique. |
| **08** | **6-Vector Risk Assessment** | Identifies Competition, Tax Compliance, Transit Damage, and Missing Export Documentation risks with actionable mitigation steps. |
| **09** | **Buyer Acquisition Playbooks** | Step-by-step playbooks for Corporate Gifting catalogs, International Export buyers, and GeM tender procurement. |
| **10** | **Certification Navigator** | Timeline and requirements roadmap for Udyam (Free, 1 day), GST (Free, 7 days), IEC Code (₹500, 2 days), ZED (Subsidized), and GI Tag authorization. |
| **11** | **Export Dashboard & Checklist** | Country benchmark pricing (USA, UK, UAE, Germany in local currencies) alongside a missing documentation checklist (AD Code, ECGC insurance). |
| **12** | **Trade Fair & Event Intelligence** | Calendared procurement events: IITF Pragati Maidan, Surajkund Crafts Mela, IHGF Delhi Fair, and continuous GeM digital tenders. |
| **13** | **Government Scheme Synergy** | Mappings to PM Vishwakarma Yojana (₹3L collateral-free loan at 5%), SFURTI Cluster Scheme, CGTMSE, and MSME Export Market Access subsidies. |
| **14** | **12-Month Scale Roadmap & Canvas** | HTML5 2D Canvas revenue projection chart (Current vs Online vs B2B vs Export) alongside quarterly operational milestones (Q1 through Q4). |

---

## 4. UI/UX & Design Philosophy

### 4.1 Strict Solid Palette (Zero Gradients)
In adherence to the design specifications, the visual presentation completely eliminates gradients, blur filters, or low-contrast decorative overlays:
- **Artisan Gold:** `#C9963A` (Primary accent, heritage signaling)
- **Obsidian Black / Charcoal:** `#0C0D11` / `#14161F` (Dark surface cards, header)
- **Parchment Light Surface:** `#F5F2EC` / `#FFFFFF` (Content viewport background)
- **Emerald Green:** `#1A6B4A` (Success states, profit indicators)
- **Cobalt Sky:** `#1A5FAB` (Export indicators, external links)
- **Imperial Violet:** `#5B2D8E` (Investor metrics, scalability markers)

### 4.2 Mobile-First Shell with Desktop Emulator
- On mobile devices ($\le 480\text{px}$), the app renders as a native full-bleed mobile application with simulated system status bar (`12:00`, signal, Wi-Fi, battery).
- On desktop viewports ($> 768\text{px}$), the interface presents within an elegant smartphone chassis. A dedicated **Full View Toggle Button** allows desktop users to expand the shell into a full-width experience.
- Native device tactile feedback is simulated via `navigator.vibrate(12)` on tab switches and interactions.

---

## 5. File Inventory & Codebase Metrics

| File | Size (Bytes) | Lines | Purpose |
| :--- | :--- | :--- | :--- |
| [`index.html`](./index.html) | 61,256 | 1,168 | Core application shell, DOM containers, 5 navigation panes, language modal, and modals. |
| [`app.css`](./app.css) | 54,289 | 2,737 | Strictly solid design tokens, responsive layout rules, typography, and card components. |
| [`app.js`](./app.js) | 72,709 | 1,564 | Application state engine, 22-language dictionary, Gemini API client, 14 module calculation routines. |
| [`manifest.json`](./manifest.json) | 1,430 | 23 | Web App Manifest with vector SVG icons for standalone mobile installation. |
| [`sw.js`](./sw.js) | 997 | 40 | Service Worker handling offline asset caching and network API pass-through. |
| [`vercel.json`](./vercel.json) | 313 | 15 | Vercel production deployment rules, security headers (`nosniff`, `SAMEORIGIN`), clean URLs. |
| [`netlify.toml`](./netlify.toml) | 181 | 10 | Netlify continuous delivery configuration and header security rules. |
| [`README.md`](./README.md) | 5,148 | 106 | Complete technical and operational documentation for running and deploying the project. |

---

## 6. Security, Privacy & Compliance Evaluation

1. **Client-Side API Key Storage:**
   The user's Google Gemini API key is stored exclusively inside the browser's `localStorage` (`marketnav_gemini_api_key`). No proprietary server or middleware captures or logs API credentials.
2. **Deterministic Fail-Safe:**
   If no API key is provided, or in cases of network disconnection, the platform functions 100% deterministically using the built-in mathematical scoring matrices, eliminating single-point API dependency.
3. **Data Privacy & Ephemerality:**
   Form inputs are processed in-memory during the browser session. There are no tracking beacons, third-party advertising scripts, or invasive analytics cookies.
4. **Content Security & Framing:**
   `vercel.json` and `netlify.toml` enforce `X-Content-Type-Options: nosniff` and `X-Frame-Options: SAMEORIGIN` to mitigate clickjacking and MIME-type sniffing vulnerabilities.

---

## 7. SWOT Analysis

```
+-------------------------------------------------+-------------------------------------------------+
| STRENGTHS                                       | WEAKNESSES                                      |
+-------------------------------------------------+-------------------------------------------------+
| * Zero dependencies: loads in under 300ms.      | * In-memory state lost on browser hard refresh. |
| * Dual engine: live Gemini AI + offline rules.  | * Print styles rely on native browser print     |
| * Inclusive: 22 official Indian languages.      |   dialogue rather than client-generated PDF.    |
| * Zero external build tools required.           | * Language translations currently prioritized   |
| * Strict high-contrast solid color aesthetic.   |   for key UI nodes (requires full dictionary).  |
+-------------------------------------------------+-------------------------------------------------+
| OPPORTUNITIES                                   | THREATS                                         |
+-------------------------------------------------+-------------------------------------------------+
| * Voice-to-Text inputs for non-literate artisans| * Gemini REST API quotas or rate limiting on    |
| * Direct ONDC / GeM API catalogue syndication.  |   shared free-tier keys.                        |
| * Integration with India Post Dak Ghar Niryat   | * Rapid changes in marketplace fee structures   |
|   Kendras (DNK) for automated shipping slips.   |   requiring periodic matrix updates.            |
+-------------------------------------------------+-------------------------------------------------+
```

---

## 8. Strategic Roadmap & Recommendations

1. **Voice Input Integration (Audio UI):**
   Many grassroots artisans in rural India communicate most comfortably via voice. Integrating the Web Speech Recognition API (`webkitSpeechRecognition`) for Hindi, Marathi, Bengali, and Tamil will substantially reduce form friction.
2. **Client-Side Vector PDF Generator:**
   Incorporate a zero-dependency micro-library (or native SVG-to-Canvas rasterizer) to allow one-tap instant PDF download without opening the OS print dialog.
3. **Automated Dak Ghar Niryat Kendra (DNK) Locator:**
   Add geolocation-based lookup for the nearest India Post export hub to empower direct foreign shipping.
4. **Persistent Workspace Records:**
   Optionally support IndexedDB storage so artisans can save and track multiple craft products over time.

---

*Report prepared autonomously by Antigravity AI Code Analysis Engine for Dream of Soul Foundation.*
