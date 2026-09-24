<div align="center">

# ✦ Azis Digital Hub

**Premium Digital Services Website — Jabalpur, MP**

A production-grade digital services platform with real-time Firestore CMS, Firebase Authentication, and a fully responsive admin panel.

[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?logo=firebase)](https://azis-digital--hub.web.app)
[![Firestore](https://img.shields.io/badge/Database-Firestore-yellow?logo=firebase)](https://firebase.google.com/docs/firestore)
[![Auth](https://img.shields.io/badge/Auth-Firebase-red?logo=firebase)](https://firebase.google.com/docs/auth)
[![Status](https://img.shields.io/badge/Status-Live-success)](https://azis-digital--hub.web.app)
[![License](https://img.shields.io/badge/License-Private-blue)]()

🌐 **[Live Site](https://azis-digital--hub.web.app)** · 🔐 **[Admin Panel](https://azis-digital--hub.web.app/admin.html)** · 📞 **[WhatsApp](https://wa.me/919685325881)**

</div>

---

## 📖 Overview

Azis Digital Hub is a real, production-deployed digital services platform serving clients across India from Jabalpur, Madhya Pradesh. It combines a fast, SEO-optimized frontend with a cloud-backed content management system that lets the owner update services, testimonials, and portfolio items in real time — without touching code.

**Built for real business, not demos.**

---

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

### 🎯 Customer-Facing
- **13 Digital Services** with individual detail pages
- **Real-time Content** from Firestore
- **WhatsApp Integration** for instant inquiries
- **Formspree Form Backend** with spam protection
- **3D Animated Enquiry Form** (luxury UI)
- **DPDPA-Compliant** privacy + cookie consent
- **PWA Support** — installable on mobile
- **Offline Caching** via Service Worker
- **Mobile-First Responsive** design
- **SEO Optimized** with JSON-LD structured data

</td>
<td width="50%" valign="top">

### 🔐 Admin Panel
- **Firebase Auth** — secure login
- **Real CMS** — add/edit/delete services, testimonials, portfolio
- **Multi-Device** — access from anywhere
- **Cloud-Backed** — Firestore database
- **Image Upload** with base64 encoding
- **Auto Search/Filter** across all sections
- **Bulk Import** from legacy hardcoded data
- **JSON Backup/Restore**
- **Toast Notifications** & confirm dialogs
- **Mobile Responsive** — works on any screen

</td>
</tr>
</table>

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Vanilla HTML5 + CSS3 + ES6 | Zero-dependency, fast loading |
| **Database** | Firebase Firestore | Real-time cloud data |
| **Auth** | Firebase Authentication | Email/password admin login |
| **Hosting** | Firebase Hosting | Global CDN + SSL |
| **Forms** | Formspree | Contact form backend |
| **Analytics** | Google Analytics 4 | Post-consent tracking |
| **PWA** | Service Worker + Manifest | Offline + installable |
| **CI/CD** | GitHub Actions | Auto-deploy on push |

**No frameworks, no build step.** Just modern vanilla JavaScript served through Firebase's global CDN.

---

## 📁 Project Structure
uction upgrade
Your .gitignore Is Good — One Addition Needed
You're almost there. Your .gitignore already covers everything important. Just need to make one decision about firebase-config.js.

The Big Question: Should firebase-config.js Be Ignored?
Answer: NO — do not ignore it. Keep it in Git. Here's why:

Aspect	Detail
What's in the file	apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId
Is apiKey a secret?	No. Firebase apiKey is designed to be public. Google even recommends exposing it in client code.
Where does it need to be?	On every page that talks to Firebase — so it must be in the deployed bundle
What protects your data?	Firestore rules (Phase 2) — not the apiKey
Evidence: Open https://azis-digital--hub.web.app → view source → search for apiKey. It's already visible in the browser. That's how Firebase web apps work. Ignoring it in Git doesn't add security.

Real secrets (that shouldn't go in Git) are:

Firebase Admin SDK service account keys (.json with private_key)

Server-side API tokens

Environment variables for backends

Your firebase-config.js is not in that category.

Final .gitignore — Replace Yours With This
Here's your current file with small improvements:

text
# ── Logs ──
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
firebase-debug.log*
firebase-debug.*.log*

# ── Firebase ──
.firebase/
# NOTE: firebase-config.js is intentionally NOT ignored.
# It contains the public Firebase web config (apiKey etc.),
# which is safe to commit. Security is enforced by Firestore rules.

# ── Service account keys (never commit these) ──
*-firebase-adminsdk-*.json
serviceAccountKey.json

# ── Environment ──
.env
.env.local
.env.*.local

# ── Node ──
node_modules/
.npm
.pnpm-store/
yarn-error.log
yarn.lock
package-lock.json.bak

# ── OS / IDE ──
.DS_Store
Thumbs.db
*.swp
*.swo
*~
.idea/
.vscode/*
!.vscode/settings.json
!.vscode/extensions.json

# ── Build artifacts ──
build/
dist/
.cache/
.parcel-cache/
.next/
.nuxt/

# ── Test / coverage ──
coverage/
.nyc_output/
lib-cov/

# ── Runtime data ──
pids
*.pid
*.seed
*.pid.lock
.node_repl_history

# ── Dataconnect ──
.dataconnect

# ── Admin local data (never commit your personal test data) ──
admin-backup-*.json
azis-admin-backup-*.json
Important additions vs your current file:

Addition	Why
Explicit note about firebase-config.js	Documents why it's intentionally tracked
*-firebase-adminsdk-*.json	Blocks Firebase Admin SDK keys — these ARE secrets
.vscode/ exception for settings	Keeps team settings if needed, ignores personal
admin-backup-*.json	Blocks your personal exported data from being committed
OS/IDE files	.DS_Store, Thumbs.db, .swp — prevents junk
Which Files SHOULD Be in Git
Here's the full list of what should be tracked:

Must be committed (firebase-config.js is safe)
File	Why
firebase-config.js	Public config, needed on every page
db.js	Firestore data layer
admin-auth.js	Login logic
admin-firestore.js	Admin CRUD
firestore-data.js	Site override
main.js	Site rendering
All HTML pages	Site content
css/style.css	Styling
sitemap.xml	SEO
robots.txt	SEO
manifest.json	PWA
sw.js	Service worker
firebase.json	Firebase hosting config
.firebaserc	Firebase project binding
.github/workflows/*.yml	GitHub Actions deploy
README.md	Documentation
package.json	Dependencies
Should NOT be committed
File	Why
.firebase/	Local Firebase cache
node_modules/	Reinstallable via npm
Admin SDK service account JSON	Contains private keys
admin-backup-*.json	Personal data
Log files	Junk
.env files	Secrets
Verify Everything Is Correct
Before pushing, run these checks:

Check 1: Is firebase-config.js Tracked?
bash
git ls-files | grep firebase-config
Expected output:

text
js/firebase-config.js
If nothing shows up, it means Git is ignoring it. Run:

bash
git add -f js/firebase-config.js
Check 2: Is .firebase Ignored?
bash
git ls-files | grep .firebase
Expected: Empty output (nothing tracked).

Check 3: Are node_modules Ignored?
bash
git ls-files | grep node_modules | head -3
Expected: Empty output (nothing tracked).

Check 4: Are Admin SDK Keys Ignored?
bash
git ls-files | grep -E 'firebase-adminsdk|serviceAccountKey'
Expected: Empty output.

Save the New .gitignore
Replace your .gitignore with the version above. Then:

bash
git add .gitignore
git commit -m "Chore: Improve .gitignore — add admin SDK key patterns, IDE files, backup files"
git push origin main
Wait 30 seconds for GitHub Actions to run.

After You Update .gitignore
You're ready for the final deploy of Phase 10:

bash
git add .
git commit -m "Feat: Complete Firestore CMS + Firebase Auth integration"
git push origin main
Then:

Open github.com/Azlan-Ul-Haque-git/My-Business-Website/actions

Wait for green checkmark ✅ (30-60 seconds)

Open https://azis-digital--hub.web.app — verify everything works

Log into https://azis-digital--hub.web.app/admin.html — verify admin works in production

Reply With
"gitignore updated" after replacing the file

Results of the 4 verification commands (git ls-files | grep ...)

"ready to push" or "pushed" once you run the final deploy

Then we do a production smoke test — 3 quick checks to confirm the live site works end-to-end. After that, you're done. 🎉

Note: It's ~2 AM. If you're tired, do the .gitignore update now (safe) and wait until tomorrow to push the final deploy. It's the one irreversible step. Your call.

This response is AI-generated, for reference only.
id README.md ok if not give fully better interactive version 
# ✦ Azis Digital Hub

**Premium Digital Services Website — Jabalpur, MP**

A fully redesigned, production-ready static website for Azis Digital Hub. Built with pure HTML, CSS, and JavaScript — no frameworks needed. Deployable directly to Firebase Hosting.

---

## 📁 File Structure

```
azis-digital-hub/
├── index.html          → Homepage (hero, services, testimonials, FAQ, contact)
├── catalogue.html      → All 13 services listing page
├── service.html        → Reusable individual service detail page (URL param: ?id=)
├── portfolio.html      → Portfolio / gallery page with filter tabs
├── contact.html        → Dedicated contact page
├── admin.html          → Admin panel (manage enquiries, services, gallery, testimonials)
├── css/
│   └── style.css       → Complete design system (tokens, layout, components)
├── js/
│   └── main.js         → All data (SERVICES, TESTIMONIALS, FAQS) + rendering logic
├── assets/
│   ├── icon-192.svg    → PWA icon (192×192)
│   └── icon-512.svg    → PWA icon (512×512)
├── sw.js               → Service Worker (offline caching)
├── manifest.json       → PWA manifest
├── firebase.json       → Firebase Hosting config
├── server.js           → Local dev server (Node/Express)
└── package.json        → NPM config
```

---

## 🚀 Deploy to Firebase

### First-time setup
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select your project: azis-invites (or create new)
# Public directory: . (current folder)
# Single-page app: No
firebase deploy
```

### Subsequent deploys
```bash
firebase deploy --only hosting
```

---

## 💻 Local Development

```bash
npm install
npm start
# → http://localhost:3000
```

Or just open `index.html` directly in your browser — no build step needed.

---

## ✏️ Customization Guide

### Update Phone Number / WhatsApp
In `js/main.js` and all HTML files, replace:
```
9685325881
```
with your actual number.

### Add / Edit Services
Open `js/main.js` and edit the `SERVICES` array at the top. Each service has:
```js
{
  id: 'unique-id',         // Used in URL: service.html?id=unique-id
  icon: '🎨',             // Emoji icon
  title: 'Service Name',
  desc: 'Short description for cards',
  price: 'Starting ₹199',
  category: 'design',     // digital | creative | government | education | design
  features: ['Feature 1', 'Feature 2'],
  detail: 'Longer description shown on service page'
}
```

### Add / Edit Testimonials
Edit the `TESTIMONIALS` array in `js/main.js`:
```js
{
  text: 'Review text here',
  name: 'Client Name',
  role: 'Role, Location',
  initials: 'CN',
  stars: 5
}
```

### Add / Edit FAQs
Edit the `FAQS` array in `js/main.js`.

### Change Colors
All colors are CSS variables in `css/style.css` under `:root {}`:
- `--gold-bright: #D4A017` → Main gold accent
- `--navy-deep: #05060F`   → Darkest background
- `--navy-dark: #0A0D1E`   → Section backgrounds

---

## 📱 Admin Panel

Visit `/admin.html` to:
- View and manage customer enquiries
- Toggle order status (Pending → Done)
- Add/delete portfolio items
- Add/delete testimonials
- See all services with links to live pages

Admin data is stored in `localStorage` (browser). For a live database, integrate Firebase Firestore.

---

## 🔒 Securing Admin Panel

To password-protect `/admin.html` on Firebase:
1. Add Firebase Authentication
2. Or use a simple password gate in `admin.html`:
```js
const pass = prompt('Enter admin password:');
if (pass !== 'YOUR_PASSWORD') window.location.href = '/';
```

---

## 📞 Contact Info (Update These)

- **Phone/WhatsApp:** +91 9685325881
- **Address:** 1581/4 Nav Nivesh Colony, Ganga Nagar, Garha, Jabalpur – 482003, MP
- **Hours:** Open 24 Hours

---

## ✦ Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Gold Bright | `#D4A017` | Primary accent, CTAs |
| Gold Mid | `#B8860B` | Hover states |
| Gold Pale | `#F5D87A` | Text on dark gold |
| Navy Deep | `#05060F` | Body background |
| Navy Dark | `#0A0D1E` | Section backgrounds |
| Navy Light | `#1A1F3C` | Cards |
| WhatsApp | `#25D366` | WhatsApp buttons |

---

*Built with ✦ for Azis Digital Hub, Jabalpur, MP — 2025*
=======
# My-Business-Website
Complete Rewrite — Production-Grade README
Your current README has two problems:

Unresolved merge conflict markers — it has <<<<<<< HEAD and >>>>>>> ca58973c4068cfb26eac60d99f57de8c9d0585ad at the bottom

Outdated content — describes localStorage admin, but the site now uses Firestore + Firebase Auth

Here's a fully rewritten, interactive, production-grade README. Copy this as your entire README.md.

markdown
<div align="center">

# ✦ Azis Digital Hub

**Premium Digital Services Website — Jabalpur, MP**

A production-grade digital services platform with real-time Firestore CMS, Firebase Authentication, and a fully responsive admin panel.

[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?logo=firebase)](https://azis-digital--hub.web.app)
[![Firestore](https://img.shields.io/badge/Database-Firestore-yellow?logo=firebase)](https://firebase.google.com/docs/firestore)
[![Auth](https://img.shields.io/badge/Auth-Firebase-red?logo=firebase)](https://firebase.google.com/docs/auth)
[![Status](https://img.shields.io/badge/Status-Live-success)](https://azis-digital--hub.web.app)
[![License](https://img.shields.io/badge/License-Private-blue)]()

🌐 **[Live Site](https://azis-digital--hub.web.app)** · 🔐 **[Admin Panel](https://azis-digital--hub.web.app/admin.html)** · 📞 **[WhatsApp](https://wa.me/919685325881)**

</div>

---

## 📖 Overview

Azis Digital Hub is a real, production-deployed digital services platform serving clients across India from Jabalpur, Madhya Pradesh. It combines a fast, SEO-optimized frontend with a cloud-backed content management system that lets the owner update services, testimonials, and portfolio items in real time — without touching code.

**Built for real business, not demos.**

---

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

### 🎯 Customer-Facing
- **13 Digital Services** with individual detail pages
- **Real-time Content** from Firestore
- **WhatsApp Integration** for instant inquiries
- **Formspree Form Backend** with spam protection
- **3D Animated Enquiry Form** (luxury UI)
- **DPDPA-Compliant** privacy + cookie consent
- **PWA Support** — installable on mobile
- **Offline Caching** via Service Worker
- **Mobile-First Responsive** design
- **SEO Optimized** with JSON-LD structured data

</td>
<td width="50%" valign="top">

### 🔐 Admin Panel
- **Firebase Auth** — secure login
- **Real CMS** — add/edit/delete services, testimonials, portfolio
- **Multi-Device** — access from anywhere
- **Cloud-Backed** — Firestore database
- **Image Upload** with base64 encoding
- **Auto Search/Filter** across all sections
- **Bulk Import** from legacy hardcoded data
- **JSON Backup/Restore**
- **Toast Notifications** & confirm dialogs
- **Mobile Responsive** — works on any screen

</td>
</tr>
</table>

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Vanilla HTML5 + CSS3 + ES6 | Zero-dependency, fast loading |
| **Database** | Firebase Firestore | Real-time cloud data |
| **Auth** | Firebase Authentication | Email/password admin login |
| **Hosting** | Firebase Hosting | Global CDN + SSL |
| **Forms** | Formspree | Contact form backend |
| **Analytics** | Google Analytics 4 | Post-consent tracking |
| **PWA** | Service Worker + Manifest | Offline + installable |
| **CI/CD** | GitHub Actions | Auto-deploy on push |

**No frameworks, no build step.** Just modern vanilla JavaScript served through Firebase's global CDN.

---

## 📁 Project Structure
azis-digital-hub/
│
├── 📄 HTML Pages
│ ├── index.html → Homepage (hero, services, testimonials, FAQ, contact)
│ ├── catalogue.html → All 13 services, grouped by category
│ ├── service.html → Dynamic service detail (?id=website-design)
│ ├── portfolio.html → Filterable portfolio gallery
│ ├── templates.html → Free templates showcase
│ ├── contact.html → Contact page with 3D form
│ ├── privacy.html → Privacy Policy (DPDPA compliant)
│ ├── terms.html → Terms of Service
│ └── admin.html → Admin panel (Firestore CMS)
│
│ └── css/
│ └── style.css → Complete design system (tokens, layout, components)
│
├── ⚙️ JavaScript
│ └── js/
│ ├── firebase-config.js → Firebase credentials (public, safe to commit)
│ ├── db.js → Firestore data layer + auth wrapper
│ ├── main.js → Site rendering + hardcoded fallback data
│ ├── firestore-data.js → Live override: Firestore → site
│ ├── admin-auth.js → Admin login + session management
│ ├── admin-firestore.js → Admin CRUD operations
│ ├── form.js → Enquiry form handler
│ └── cookie-consent.js → GDPR/DPDPA consent banner
│
├── 🖼 Assets
│ └── assets/
│ ├── icon-192.svg → PWA icon (192×192)
│ └── icon-512.svg → PWA icon (512×512)
│
├── 🔧 Config
│ ├── firebase.json → Firebase Hosting configuration
│ ├── .firebaserc → Firebase project binding
│ ├── manifest.json → PWA manifest
│ ├── robots.txt → Search crawler rules
│ ├── sitemap.xml → SEO sitemap
│ ├── sw.js → Service Worker (offline cache)
│ └── package.json → NPM metadata
│
├── 🚀 CI/CD
│ └── .github/
│ └── workflows/ → Auto-deploy on push to main
│
└── 📖 Docs
├── README.md → You are here
└── .gitignore → Git ignore rules

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A Firebase account (for deployment)
- Git (for version control)

### 1️⃣ Clone & Run Locally

```bash
# Clone the repository
git clone https://github.com/Azlan-Ul-Haque-git/My-Business-Website.git
cd My-Business-Website

# Serve locally (any of these works)
python -m http.server 8000         # Python 3
# OR
npx serve .                        # Node.js
# OR
php -S localhost:8000              # PHP