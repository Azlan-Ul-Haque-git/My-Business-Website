<<<<<<< HEAD
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
>>>>>>> ca58973c4068cfb26eac60d99f57de8c9d0585ad
