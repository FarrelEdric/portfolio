# Farrel Edric — Personal Portfolio

Single-page personal portfolio for **Fransiscus Farrel Edric Wijanarko** (Farrel Edric) — Software Engineer / Full-stack Developer, Kota Malang, Indonesia.

No build step, no dependencies. Open `index.html` and it runs.

---

## Preview locally

Double-click `index.html`, or serve the folder (recommended — required for the favicon and Open Graph image to resolve):

```bash
cd "D:/WEB PORTO FARREL"
python -m http.server 5500
# → http://localhost:5500
```

---

## Structure

```
WEB PORTO FARREL/
├─ index.html                 single page, all sections
├─ README.md
└─ assets/
   ├─ css/style.css           design tokens + layout + responsive
   ├─ js/main.js              theme, nav, scroll reveal, mobile menu
   ├─ favicon.svg / -180.png / -32.png
   ├─ og-image.png            1200×630 social card
   ├─ portrait.webp / -2x.webp  hero portrait (760w / 1140w), vignetted to melt into the hero
   ├─ portrait.png            560w PNG fallback for browsers without WebP
   └─ projects/
      ├─ cv-checker.png       CV Checker — original generated workflow panel (no screenshot used)
      ├─ ace.png              ACE — original generated visual (no public screenshot exists)
      └─ siwa.png             SIWA — Sistem Informasi Warga (account name in the header blurred out)
```

Sections: Hero → About → Experience → Projects → Skills → Education & Certifications → Contact → Footer.

---

## Design system

| Token | Dark (default) | Light |
|---|---|---|
| Background | `#080808` | `#F5F5F2` |
| Surface | `#0D0D0D` | `#EFEFEC` |
| Ink | `#F5F5F3` | `#111111` |
| Muted | `#8C8C8A` | `#6A6A68` |
| Muted dim (small labels) | `#7A7A79` | `#6F6F6C` |
| Line | `rgba(255,255,255,.09)` | `rgba(17,17,17,.12)` |
| Accent — fills | `#FF6A00` | `#D15500` |
| Accent — text on background | `#FF6A00` | `#B84800` |
| Label on accent fill | `#0A0A0A` | `#0A0A0A` |
| Line / line-strong | `rgba(255,255,255,.13/.22)` | `rgba(17,17,17,.17/.28)` |
| Status dot (`--ok`) | `#34D17A` (10.1:1) | `#1E7A3C` (4.9:1) |
| Hero wash / glow | orange, 0.07 / 0.28 | `#D15500`, 0.05 / 0.14 |

Every text/background pair above clears WCAG AA for small text (small labels were darkened from their original values for this reason — `--muted-dim` and the light `--accent-ink`). Button labels sit on orange fill with a near-black label, which measures 4.6–6.9:1, instead of white-on-orange at 2.9:1.

Type: **Plus Jakarta Sans** (display + body) and **JetBrains Mono** (labels, metadata) — two families, loaded from Google Fonts.

Theme choice persists in `localStorage` under `fe-theme`. With no stored choice the site follows the OS setting; dark is the default.

The hero portrait ships as **two baked variants** — one vignetted to the dark page colour, one to the off-white light colour — because a single image cannot blend into both backgrounds. `swapPortrait()` in `assets/js/main.js` rewrites the `<picture>` sources when the theme changes.

Scroll reveals are driven by `assets/js/main.js` using `getBoundingClientRect` on scroll. That path is deliberate: an earlier version used CSS scroll-driven animations (`animation-timeline: view()`), which measured clean but failed to resolve when the page was loaded directly at a `#fragment`.

---

## Content sources (nothing invented)

| Data | Source |
|---|---|
| Name, headline, location, summary | LinkedIn profile (`linkedin.com/in/farrel-edric`) |
| Experience entries + bullet points | LinkedIn + `Profile LINKED in.pdf` + `CV_Fransiscus_Farrel_Edric_Wijanarko_ID.pdf` |
| Education, GPA 3.67, coursework | CV PDF |
| Certifications (MTCNA, Java class certificate) | `Profile LINKED in.pdf` |
| Projects, roles, dates, tech stacks | CV PDF (Project Experience section) |
| Project titles + descriptions (SIWA, CV-Checker, Inventory JTI, Glow Guide) | `PORTO FARREL.pdf` |
| ACE project description + stack | `CARBON_EMISSION` repo README |
| SIWA feature list + stack | `SIWA-FINAL` repo README |
| Email, GitHub, LinkedIn URLs | `Profile LINKED in.pdf` / GitHub API |
| Hero portrait | `D:/KERJA FARREL/FOTO DATA DIRI/Farrel Jass.jpg` (blue mirror border cropped) |

Employer logos are deliberately **not** shown: the marks are dark-ink art (AirNav blue, Yazaki black, Naratel navy) and every attempt to make them legible on a near-black page either destroyed the brand colour or needed a white plate that read as a badge, so the experience entries are typographic only.

Deliberately **not** shown anywhere: the phone number (kept out per the brief), any invented metric, skill rating, testimonial, employer logo or stock photo.

---

## ⚠️ Review before publishing

1. **Verify the facts.** Bullets were compiled from three overlapping documents; if any figure, date or responsibility is wrong, fix it in `index.html` directly.
2. **Set absolute URLs.** Replace the relative `canonical` / `og:url` / `og:image` (marked with `TODO after deploy`) with the real domain, e.g. `https://farrel.dev/` and `https://farrel.dev/assets/og-image.png`.
3. **Two project images are original generated panels, not screenshots.** `cv-checker.png` and `ace.png` render your workflow/data in your site's own dark style because no publishable screenshot exists: the CV Checker collage in the PDF contains another person's real name, phone, email and city, and the ACE app redirects to a login that blocked automated capture. Replace them once you can capture the real UIs — 16:10 at 1600×1000.
4. **Glow Guide** has no image on the page. The mobile screenshots in the PDF are sharp, but both show an identifiable face (model or stock — unknown licence), so they were left out. Its tile is text-only.
5. **Screenshots of internal systems:** the SIWA image ships with the logged-in account name blurred. The scrap-data, inventory and CV-screening captures were dropped entirely — they showed a staff username or other people's records. Re-shoot any of them logged out, at ≥1600 px wide, and they can go straight into `assets/projects/`.
6. **Portrait treatment.** The current photo has a textured grey wall behind it, which cannot be cut out cleanly, so it is composited as a *vignette*: the frame edges fade to the exact hero colour (measured border luminance 8.1 vs the background's 8), so the photo melts into the page instead of sitting in a box. That is tuned for dark mode. In **light mode the same edges will show as a dark haze** against the off-white — if you use light mode often, consider a proper shoot on a flat background so a real cut-out is possible. Either way, a larger source (≥1400 px tall) would sharpen it on retina, where the current 1200×1600 is adequate but not generous. Overwrite `portrait.webp` (760w), `portrait-2x.webp` (1140w) and `portrait.png` (560w fallback) — nothing else changes.
7. **AirNav Indonesia entry — needs your details.** Added on your instruction, but the period and location are unverified: LinkedIn refused a re-fetch (403) and the period isn't recoverable from GitHub commit dates, so the date slot is deliberately empty with a `<!-- TODO Farrel -->` marker in `index.html`. **Note the title tension:** the Experience entry reads *Staf Administrasi Teknologi Informasi dan Operasional · Internship*, while the About quick-fact "Most recent role" says *Full-stack Developer — AirNav Indonesia*. If one is wrong, fix both places (search `AirNav` in `index.html`).
8. **Internship labels.** Naratel Group and PT. Surabaya Autocomp Indonesia are labelled *Internship* because the CV describes them as such (`Intern`); if you want them presented as regular roles, edit those two `.note` spans.
9. **Small date discrepancies between your own documents.** SMKN 8 Malang is `Jul 2019 – Agt 2022` on the CV but `Juni 2020 – Juni 2022` on the LinkedIn export — the site uses the CV version. Politeknik Negeri Malang is `Agt 2022 – Sekarang` on the CV and `Juli 2022 – Agustus 2026` on LinkedIn — the site uses `2022–2026`. Align them if the LinkedIn version is the correct one.

---

## Deploy

**GitHub Pages**
```bash
cd "D:/WEB PORTO FARREL"
git init && git add -A && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/FarrelEdric/portfolio.git
git push -u origin main
```
Then Settings → Pages → Source: `main` / root. The site works from a subpath because all asset links are relative.

**Netlify / Vercel** — drag the `WEB PORTO FARREL` folder into the dashboard, no build command, publish directory `.`.

---

## Editing content

Everything editable lives in `index.html`. Repeated patterns:

```html
<!-- Experience item -->
<li class="timeline__item reveal">
  <div class="timeline__meta"><span class="when">YEAR</span><span class="place">CITY</span></div>
  <div class="timeline__main">
    <h3 class="h3">POSITION</h3>
    <p class="org">COMPANY <span class="dot">·</span> <span class="note">TYPE</span></p>
    <p class="period">MONTH YEAR — MONTH YEAR · N months</p>
    <ul class="bullets"><li>achievement</li></ul>
  </div>
</li>

<!-- Project row: add .project--flip to alternate the image side -->
<article class="project reveal">
  <a class="project__media" href="LINK"><img src="assets/projects/x.png" alt=""></a>
  <div class="project__info">
    <p class="project__idx">01</p>
    <h3 class="h3 h3--lg">NAME</h3>
    <p class="prose prose--sm">Description</p>
    <ul class="tags"><li>Tech</li></ul>
    <dl class="project__specs"><div><dt>Role</dt><dd>…</dd></div></dl>
    <a class="link-arrow" href="LINK">View repository</a>
  </div>
</article>
```

New project images: 16:10, 1600×1000, ideally a dark-theme UI capture. `.project__media` crops from the top (`object-position: top center`) so screenshots keep their header visible.

Theme colours live in the two token blocks at the top of `assets/css/style.css`.

---

## Accessibility & performance

- Semantic landmarks, one `h1`, ordered heading levels, `ul`/`dl` for lists of things.
- Skip link, visible `:focus-visible` rings, keyboard-trap-free mobile menu (Escape closes, focus is restored).
- Every meaningful image has `alt`; decorative images are `aria-hidden` with empty `alt`.
- `prefers-reduced-motion` disables the entrance animation, scroll reveals and smooth scrolling.
- No JS framework, no analytics, one deferred script (~7 KB), lazy-loaded project images, no layout-shifting animations.
