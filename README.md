# SAPTune — saptune.com

Marketing website for **SAPTune**: tailor-made SAP solutions, built with AI, at low cost.

> *Your SAP, perfectly tuned.* · *Fine-tune your SAP. Not your budget.* · *Tailor-made SAP. Tuned by AI.*

Covers every major SAP module (finance, logistics, planning, retail, CX, procurement, HR, projects, analytics, industries, Basis) with focus areas SAP Retail, EWM, FI, MM, GTS, SAP Promotions, CAR, Allocation Management and Order to Cash — plus the latest SAP technologies: RAP, ABAP Cloud, CDS, Fiori/UI5, BTP, S/4HANA Cloud, CAP, SAP Build, PI/PO, Integration Suite, Business AI & Joule, Datasphere/SAC and more.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Single-page site (hero, solutions, technologies, Salesforce, cloud & AI apps, process, why us, engagement models, FAQ, contact) |
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

## Deploy (Cloudflare Pages — recommended if your DNS is on Cloudflare)

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.
2. Production branch: the branch holding the site (e.g. `main`). Framework preset: **None**. Build command: *(leave empty)*. Build output directory: `/`.
3. After the first deploy: the Pages project → **Custom domains → Set up a custom domain** → add `saptune.com`, then add `www.saptune.com` too. Cloudflare creates the DNS records for you.
4. **SSL/TLS → Overview**: set mode to **Full**. **SSL/TLS → Edge Certificates**: turn on **Always Use HTTPS**.
5. Optional: **Rules → Redirect Rules** → redirect `www.saptune.com/*` to `https://saptune.com/${1}` (301).

If you use GitHub Pages instead with DNS on Cloudflare, set the four `A` records above and the `www` CNAME as **DNS only** (grey cloud) until GitHub issues its certificate; afterwards you may switch to **Proxied** with SSL mode **Full**.

## To customize

- **Contact email:** `info@saptune.com` appears in `index.html` and `script.js`.
- **Contact form:** currently opens the visitor's email app (mailto). For submissions straight to your inbox, use a form service such as Formspree or Netlify Forms and point the form's `action` at it.
