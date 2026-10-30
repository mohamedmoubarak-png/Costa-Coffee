# Costa Coffee — Read-only QR Menu Website

A bilingual Arabic/English **digital menu for QR code viewing only**, based on the supplied 26-page menu PDF. This is an independent brand-inspired concept, **not the official Costa Coffee website**.

## Features
- Responsive, mobile-first burgundy / blush / cream UI
- 100 food and drink items, with prices for **all** listed sizes visible without clicking
- Search, 16 category tabs, sorting by price/name and lazy-loaded pages
- Arabic / English language toggle
- Original imagery extracted from the supplied menu. A photo is shown only when it matches the item; other items show a category icon until real photos are added to `assets/`
- Arabic-aware search (ignores أ/إ/ا، ة/ه، ى/ي and common spelling variants such as كابوتشينو / كابتشينو)
- Item notes (Cancakes flavours, flavoured-matcha surcharge, frappes without coffee) via the optional `note` field
- New items also appear in their natural category via the optional `also` field
- Footer shows the delivery hotline (16460), branches and tax number from the printed menu
- No cart, no quantity controls, no checkout, no payment, no online ordering links
- No account and no database required

## Hosting
Upload the **contents** of this folder to any static hosting platform such as Vercel, Netlify, or GitHub Pages. The main page is `index.html`. No build step necessary.

## QR placement
After the website has a public URL, create the QR code pointing to `https://YOUR-DOMAIN.example/#menu`. This opens the interactive menu section immediately after scanning, skipping the landing hero. Do not create a QR to a local `file://` path: customers' phones will not be able to access it. QR generation requires the real public site URL.

## Update prices
Edit `menu-data.js` (`prices` per item; optional `note: {ar, en}`, `also: "<category>"`, `img: "<file name in assets without .webp>"`). Sizes: S / M / L / One / Single / Double. Local illustration images are in `assets/`.

Prices were transcribed from the supplied PDF and can change. Verify prices and permission to use official branding before public launch.

Concept: MSM FinTech.


## Developer credit
The footer includes a clickable **Developed by MSM FinTech** credit linking to https://msm-fintech.online (opens in a new tab).
