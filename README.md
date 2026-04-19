# Milestone Chiropractic Centre — Website Rebuild

Modern website for [milestonechiro.com](https://milestonechiro.com) — built as a Netlify demo for client review and feedback.

**GitHub:** https://github.com/steveprpr/milestone-chiro
**Live Demo:** https://milestonechiro.netlify.app

---

## Pages

| File | Page |
|------|------|
| `index.html` | Homepage |
| `about.html` | About Us |
| `services.html` | Services Overview |
| `back-pain.html` | Back Pain & Sciatica |
| `pregnancy.html` | Pregnancy & Pediatrics |
| `new-patient.html` | New Patient Center |
| `blog.html` | Blog Index |
| `blog-post.html` | Sample Blog Post |
| `contact.html` | Contact & Location |
| `faq.html` | FAQ (15+ Q&As with JSON-LD schema) |

## Deploy to Netlify

**Option A — Connect GitHub repo (recommended):**
1. Go to [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git
2. Connect to GitHub → select `steveprpr/milestone-chiro`
3. Build settings: leave blank (static site, publish directory = `.`)
4. Deploy — auto-deploys on every push to `master`

**Option B — Manual drag-and-drop:**
1. Clone this repo or download as ZIP
2. Go to [app.netlify.com](https://app.netlify.com) → Add new site → Deploy manually
3. Drag the project folder onto the upload zone

## Before Going Live — Placeholder Content to Replace

- Doctor headshots and real bios
- Office/treatment photos (replace placehold.co images)
- Google Maps embed code (real coordinates)
- Online booking system integration
- Real canonical domain in `<head>` of every page
- Social media profile URLs in footer
- Real patient testimonials

See `owners_inbox/mason_chiro_deploy_notes.md` for the full checklist.

## Tech Stack

- Pure HTML / CSS / JS — no build tools
- Google Fonts: Poppins + Inter
- Netlify Forms for contact forms
- JSON-LD structured data (MedicalBusiness, FAQPage, Article)
