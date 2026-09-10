# ✨ AURA — Contemporary Kitchen & Bar

> *Where every meal becomes a memory.*

AURA is a modern, high-performance, and visually captivating website crafted for an artisanal fine-dining restaurant. Built entirely with **semantic HTML5**, **modern Vanilla CSS**, and **pure Vanilla JavaScript**, it delivers a seamless, luxury digital experience with zero external framework dependencies.

---

## 🌟 Highlights & Features

- **🍸 Luxury Aesthetics & Editorial Typography**
  - Elegant serif headings powered by [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) paired with crisp UI typography from [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans).
  - Curated warm-terracotta, cream, and deep charcoal palette tailored for warmth and sophistication.

- **📱 Fully Responsive & Mobile-First Navigation**
  - Sticky glassmorphic navbar with scroll-based elevation.
  - Slide-out mobile navigation drawer with touch backdrop and keyboard (`Escape`) accessibility.
  - Native scrollspy highlighting the active section during scrolling.

- **🍽️ Interactive Menu with Dynamic Category Filtering**
  - Filter dishes dynamically between **All**, **Small Plates & Starters**, **Signature Mains**, and **Artisanal Desserts**.
  - Smooth card entry/exit transitions powered by hardware-accelerated CSS and `requestAnimationFrame`.
  - Dietary badges (Vegetarian, Seafood, Chef's Specials) and pricing.

- **📅 Table Reservation Modal with Live Validation**
  - Full-featured reservation modal accessible from multiple call-to-actions.
  - Intelligent date selection (prevents booking dates in the past).
  - Instant client-side validation for name, phone, party size, date, and preferred dining slots.
  - Non-blocking custom toast feedback upon submission.

- **✨ Scroll-Reveal Animations**
  - High-performance, viewport-triggered fade and slide effects using the modern `IntersectionObserver` API.
  - Full support for `prefers-reduced-motion` for accessibility.

- **💬 Guest Testimonials & Reviews Carousel**
  - Editorial review cards with star ratings and reviewer avatars.
  - Mobile swipeable carousel with synced indicator dots.

- **📍 Location, Dining Hours & Valet Concierge**
  - Embedded Google Map with location details in Indiranagar, Bengaluru.
  - Direct telephone calling and one-click WhatsApp concierge chat integration.
  - Dining service schedules and valet parking notices.

- **📬 Newsletter Subscription & Toast Notification Engine**
  - Toast notification system delivering unobtrusive confirmation alerts across user actions.
  - Newsletter subscription form for tasting events and seasonal menus.

---

## 📁 Project Structure

```
Aura/
├── index.html          # Core semantic HTML5 document & accessible modal structures
├── css/
│   └── style.css       # Complete design system, design tokens, responsive breakpoints & animations
├── js/
│   └── script.js       # Pure vanilla JavaScript for interactions, filtering, modal & validations
└── README.md           # Project documentation and developer guide
```

---

## 🎨 Design System & Tokens

The design system is managed via CSS custom properties defined in [`css/style.css`](file:///c:/Users/vaish/OneDrive/Desktop/Aura/css/style.css):

| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--bg-primary` | `#FDFBF7` | Warm cream background |
| `--bg-secondary` | `#F6F1E9` | Subtle contrast surface |
| `--bg-dark` | `#161311` | Rich dark charcoal for footer & overlays |
| `--accent-primary` | `#C86D3B` | Warm terracotta / burnt amber brand accent |
| `--accent-hover` | `#B25D2E` | Deep terracotta hover state |
| `--text-primary` | `#1C1815` | Deep warm black for high legibility |
| `--text-secondary` | `#635A52` | Elegant warm charcoal for descriptions |
| `--font-serif` | `'Playfair Display', Georgia, serif` | Editorial headlines & titles |
| `--font-sans` | `'Plus Jakarta Sans', sans-serif` | Clean body copy & UI controls |

---

## 🚀 Getting Started

Because AURA is built without heavy build tools or framework lock-in, you can run it immediately in any modern web browser.

### Option 1: Direct Open
Simply double-click `index.html` or open it with your preferred browser (Chrome, Firefox, Safari, Edge).

### Option 2: Live Server (VS Code Extension)
1. Open the project folder in VS Code.
2. Right-click [`index.html`](file:///c:/Users/vaish/OneDrive/Desktop/Aura/index.html).
3. Select **"Open with Live Server"**.

### Option 3: Local Development Server via Terminal

**Using Python:**
```bash
# Python 3
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

**Using Node.js (npx):**
```bash
npx serve .
```

---

## ♿ Accessibility & Standards

- **Semantic Markup:** Built with `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- **Keyboard Navigation:** Modals, navigation toggles, and form controls are fully keyboard-navigable.
- **ARIA Attributes:** Employs `aria-expanded`, `aria-hidden`, `aria-modal`, `role="dialog"`, and `role="alert"` for screen readers.
- **Reduced Motion Support:** Respects user motion preferences through `@media (prefers-reduced-motion: reduce)`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) &mdash; feel free to adapt and customize it for personal or commercial projects.
