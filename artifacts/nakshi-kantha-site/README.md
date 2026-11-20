# Nakshi Kantha Craft Cluster Presentation Site

Static HTML site with earthy, traditional design for your product design presentation.

## What's included
- `index.html` — Main page with QR codes for each process video
- Individual video pages (`video-*.html`) — Beautiful custom pages that open the Google Photos videos
- `style.css` — Earthy terracotta / cream / brown Nakshi Kantha-inspired styling
- `images/` — Generated QR codes

## How to use

### 1. Host the site (required for QR codes to work on phones)
The QR codes currently point to a placeholder URL. After hosting:

**Easy options:**
- **Netlify Drop**: Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the entire `nakshi-kantha-site` folder. You'll get a URL like `https://random-name.netlify.app`
- **GitHub Pages**: Push the folder to a repo and enable Pages.
- **Vercel**, **Cloudflare Pages**, etc. also work.

### 2. Update the QR codes with your real URL
Edit the `BASE_URL` in the generation script below and re-run it, or just replace the placeholder in the existing QR images by regenerating.

Once you have your live URL (e.g. `https://nakshi-kantha.netlify.app/`), run:

```bash
# Update BASE_URL in the script, then:
python3 generate_qrs.py
```

Or manually edit `generate_qrs.py` and re-execute.

### 3. Adding more videos later
When you send more Google Photos links + titles:
1. Add them to the `videos` list in `generate_qrs.py`
2. Create a new `video-your-id.html` page (copy one of the existing ones and update the title, description, and Google Photos link)
3. Add a new card to `index.html`
4. Re-generate QR codes

## Design notes
- Warm cream background with terracotta accents
- Playfair Display + Source Sans 3 fonts
- Subtle stitch-pattern overlay inspired by kantha work
- Rounded QR codes in earthy brown on cream

## Current videos
1. Layering and Basting
2. Artisan showing a basic running stitch
3. Making of fabric coaster

---
Generated for Nakshi Kantha embroidery craft cluster design project.
