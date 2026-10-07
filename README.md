# SAPTune — saptune.com

Marketing website for **SAPTune**: tailor-made SAP solutions, built with AI, at low cost.

> *Your SAP, perfectly tuned.* · *Fine-tune your SAP. Not your budget.* · *Tailor-made SAP. Tuned by AI.*

Covers SAP Retail, EWM, FI, SAP Promotions, CAR, Allocation Management, Materials Management, Order to Cash and more.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Single-page site (hero, solutions, process, why us, engagement models, FAQ, contact) |
| `styles.css` | Styling, responsive layout |
| `script.js` | Mobile menu, scroll reveal, contact form |
| `assets/logo.svg`, `favicon.svg` | Logo (SVG recreation — replace with the original artwork if you have it) |
| `CNAME` | Custom domain for GitHub Pages |

Plain static HTML/CSS/JS — no build step. Open `index.html` in a browser to preview.

## Deploy (GitHub Pages)

1. Repo **Settings → Pages** → Source: *Deploy from a branch*, choose the branch and `/ (root)`.
2. At your domain registrar, point `saptune.com`:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<your-github-username>.github.io`
3. Tick **Enforce HTTPS** once the certificate is issued.

Netlify, Vercel or Cloudflare Pages also work — just upload the folder.

## To customize

- **Contact email:** `info@saptune.com` appears in `index.html` and `script.js`.
- **Contact form:** currently opens the visitor's email app (mailto). For submissions straight to your inbox, use a form service such as Formspree or Netlify Forms and point the form's `action` at it.
