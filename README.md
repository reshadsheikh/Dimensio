# DIMENSIO — Portfolio Website

A responsive, static portfolio site for DIMENSIO. It uses plain HTML, CSS and JavaScript, so there is no build step or dependency installation.

## Preview locally
Open `index.html` in your browser.

## Before publishing
1. Replace the three sample project visuals in `index.html` / `styles.css` with real portfolio images or video thumbnails.
2. Change `hello@dimensio.studio` to your real contact email (search in `index.html`).
3. Update the studio description, services and social links to match your business.
4. Replace `assets/dimensio-logo.png` if you have a transparent/high-resolution export. The supplied logo is included as-is.

## Publish with GitHub + Vercel
1. Extract this ZIP.
2. Create a new repository on GitHub (for example, `dimensio-portfolio`).
3. Upload the **contents** of this folder to the repository root. `index.html` should be at the top level, not inside another nested folder.
4. Open Vercel and sign in.
5. Choose **Add New → Project**, then **Import** your `dimensio-portfolio` GitHub repository. Authorize GitHub if asked.
6. In the project configuration, leave Framework Preset as **Other**. Set Root Directory to `./`. No Build Command is needed; leave it empty. Set Output Directory to `.` if Vercel asks for one.
7. Click **Deploy**. Vercel will provide a `*.vercel.app` address.
8. For your own domain: open the Vercel project → **Settings → Domains** → add your domain. Follow the DNS records Vercel displays at your domain registrar.
9. Every time you push changes to the connected GitHub production branch (usually `main`), Vercel automatically builds/deploys the updated site.

## Updating the site later
Edit the files in GitHub (or locally and push them). Keep `index.html`, `styles.css`, `script.js`, and the `assets` folder together in the repository root.
