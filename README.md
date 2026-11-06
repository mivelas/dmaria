# 🧁 d'María — Artisanal Pâtisserie & Bespoke Cake Studio

A modern web application built with **Node.js** and **Express** for **d'María**, a boutique artisanal bakery.

> **Brand Philosophy:** *"We don't mass produce cakes. Every order is personalized."*

---

## ✨ Features

- **No Online Store / High-Touch Bespoke Commissions:** Designed exclusively to showcase the 3 signature handcrafted creations and receive tailored quote & consultation requests from clients.
- **Showcase of the 3 Signature Creations:**
  1. 🥧 **Traditional Artisanal Apple Pie** (`ApplePie.jpeg`): Spiced heirloom apples, hand-crimped butter lattice, warm cinnamon & bourbon vanilla.
  2. 🍫 **Decadent Dark Chocolate Ganache Cake** (`ChocolateCake.jpeg`): Triple moist Dutch cocoa sponge, silky 70% dark Belgian ganache, Maldon sea salt flakes.
  3. 🍰 **Signature Ruby Red Velvet Cake** (`RedVelvetCake.jpeg`): Velvety crimson buttermilk sponge, whipped Madagascar Bourbon vanilla bean cream cheese frosting.
- **Modern Editorial Aesthetic:** Visual styling designed to match the mood of the culinary photography—deep espresso tones, warm amber glow, caramel gold accents, and refined typography (`Playfair Display` + `Plus Jakarta Sans`).
- **Complete Bilingual Support (English & Spanish):**
  - Instant one-click language switcher (`EN` / `ES`).
  - All text, hero messaging, stories, form labels, validation prompts, and modal details are natively translated.
  - Automatically remembers preference in `localStorage`.
- **Interactive Custom Order Request System (Web3Forms Ready):**
  - Visual dessert selector with photo thumbnails.
  - Date picker enforcing lead time (minimum 3 days for scratch baking).
  - Guest count, size preference, occasion selector, personalized notes, and dietary/allergy accommodations.
  - Real-time live summary preview card.
  - Instant submission with reference code (e.g. `DM-2026-8419`) and direct **1-click WhatsApp button** with pre-filled order details to chat directly with the baker.

---

## 📬 Web3Forms Integration (When Ready)

The request form is already pre-configured for seamless integration with **Web3Forms**.

To activate direct email delivery to your inbox:

1. Obtain your free access key from [https://web3forms.com](https://web3forms.com).
2. Open [`public/index.html`](file:///home/miguel/Documents/Github/dmaria/public/index.html) and paste your key in line 265:
   ```html
   <input type="hidden" name="access_key" id="web3formsAccessKey" value="YOUR_ACCESS_KEY_HERE" />
   ```
3. That's it! The form will automatically deliver client requests straight to your email while keeping the live confirmation dialog and WhatsApp button active for the customer.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- npm (v9+)

### 2. Start the Server

```bash
# Start production server
npm start

# Or start in live auto-reload mode
npm run dev
```

The application will run on **`http://localhost:3030`** (or your custom `$PORT`).

- **Bakery Website:** [http://localhost:3030](http://localhost:3030)

### 3. Run Automated Tests

```bash
npm test
```

---

## ⚙️ Configuration

You can update your studio phone, WhatsApp number, email, and minimum lead time in [`src/config.js`](file:///home/miguel/Documents/Github/dmaria/src/config.js):

```javascript
module.exports = {
  port: process.env.PORT || 3030,
  bakery: {
    name: "d'María",
    phone: "+1 (555) 382-7421",
    whatsapp: "15553827421", // Phone number formatted for wa.me links
    email: "pedidos@dmaria.com",
    address: "Artisanal Studio • Available by appointment & order pickup",
    minLeadDays: 3
  }
};
```

---

## 📁 Project Structure

```text
dmaria/
├── ApplePie.jpeg             # Original high-resolution photo
├── ChocolateCake.jpeg        # Original high-resolution photo
├── RedVelvetCake.jpeg        # Original high-resolution photo
├── server.js                 # Express application entrypoint
├── package.json              # Project scripts & dependencies
├── test-integration.js       # End-to-end integration test suite
├── data/
│   └── requests.json         # Local JSON backup for customer requests
├── src/
│   ├── config.js             # Bakery details, WhatsApp, email, lead time
│   ├── storage.js            # Safe file storage for orders and inquiries
│   ├── routes/
│   │   └── api.js            # REST API endpoints for desserts & orders
│   └── data/
│       └── desserts.js       # Bilingual metadata for the 3 desserts
└── public/
    ├── index.html            # Main bilingual customer showcase & request form
    ├── css/
    │   └── style.css         # Modern editorial dark/warm bakery styling
    ├── js/
    │   ├── i18n.js           # Full English & Spanish translations dictionary
    │   └── app.js            # Main website client logic & real-time preview
    └── images/
        ├── ApplePie.jpeg     # High-res image
        ├── ApplePie-web.jpg  # Web-optimized image
        ├── ... (same for ChocolateCake & RedVelvetCake)
```
