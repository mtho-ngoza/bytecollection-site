# Byte Collection Website

Official website for Byte Collection PTY LTD - A South African software development agency.

**Live Site:** https://bytecollection-site-5f156vbug-byte-collections.vercel.app/

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro 5 |
| UI Components | React (Islands) |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Hosting | Vercel |

## Project Structure

```
src/
├── components/
│   ├── Navbar.astro       # Navigation with mobile menu
│   ├── Hero.tsx           # Hero section with Framer Motion
│   ├── Services.astro     # Services grid (3 cards)
│   ├── Work.astro         # Case studies (Football Genic, Mzansi Gigs)
│   ├── About.astro        # About section with founder info
│   ├── Process.astro      # 4-step process
│   ├── Contact.astro      # Contact form
│   └── Footer.astro       # Footer with links
├── layouts/
│   └── Layout.astro       # Base layout with SEO meta
├── pages/
│   └── index.astro        # Home page
└── styles/
    └── global.css         # Tailwind config + custom styles
```

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## Next Steps Checklist

### Priority 1: Domain & Contact Form

- [ ] **Custom Domain**
  - Go to Vercel → Project Settings → Domains
  - Add `bytecollection.co.za`
  - Update DNS records at your registrar (A record or CNAME to Vercel)

- [ ] **Contact Form Backend**
  - Option A: Vercel Serverless Function (free)
  - Option B: Formspree (free tier: 50 submissions/month)
  - Option C: Resend for email API
  - Update `src/components/Contact.astro` with form action

### Priority 2: Content & Images

- [ ] **Project Screenshots**
  - Add real screenshots for Football Genic
  - Add real screenshots for Mzansi Gigs
  - Store in `public/images/projects/`
  - Update `Work.astro` to use actual images

- [ ] **Founder Photo**
  - Add professional headshot to `public/images/`
  - Update `About.astro` to display photo instead of initials

- [ ] **Favicon & OG Images**
  - Create proper favicon.ico (multiple sizes)
  - Create OG image for social sharing (1200x630)
  - Add to `public/` and reference in `Layout.astro`

### Priority 3: CMS Integration (Sanity)

- [ ] **Set Up Sanity Studio**
  ```bash
  npm create sanity@latest -- --template clean --create-project "Byte Collection" --dataset production
  ```

- [ ] **Create Schemas**
  - `project` schema (title, slug, description, image, category, features)
  - `service` schema (title, description, icon, features)
  - `testimonial` schema (quote, author, company)

- [ ] **Connect to Astro**
  ```bash
  npm install @sanity/client
  ```
  - Create `src/lib/sanity.ts` client
  - Fetch projects dynamically in `Work.astro`

### Priority 4: Additional Pages

- [ ] **Individual Project Pages**
  - Create `src/pages/work/[slug].astro`
  - Detailed case study for each project
  - Problem → Solution → Results format

- [ ] **Services Detail Pages**
  - Create `src/pages/services/[slug].astro`
  - Expanded info for each service offering

- [ ] **Blog/Insights** (optional)
  - Create `src/pages/blog/index.astro`
  - Create `src/pages/blog/[slug].astro`
  - Use Sanity or MDX for content

### Priority 5: SEO & Analytics

- [ ] **SEO Enhancements**
  - Add structured data (JSON-LD) for Organization
  - Create `robots.txt` in `public/`
  - Create `sitemap.xml` (use `@astrojs/sitemap`)
  ```bash
  npx astro add sitemap
  ```

- [ ] **Analytics**
  - Option A: Vercel Analytics (built-in, privacy-friendly)
  - Option B: Plausible (privacy-friendly, paid)
  - Option C: Google Analytics 4

### Priority 6: Performance & Polish

- [ ] **Image Optimization**
  ```bash
  npx astro add image
  ```
  - Use Astro's `<Image />` component for automatic optimization

- [ ] **Loading States**
  - Add skeleton loaders for dynamic content
  - Improve perceived performance

- [ ] **Accessibility Audit**
  - Run Lighthouse accessibility check
  - Ensure proper heading hierarchy
  - Add skip-to-content link
  - Test keyboard navigation

### Priority 7: Legal & Trust

- [ ] **Legal Pages**
  - Create `src/pages/privacy.astro` (Privacy Policy)
  - Create `src/pages/terms.astro` (Terms of Service)
  - Link from footer

- [ ] **Trust Signals**
  - Add CIPC registration number to footer
  - Add client testimonials (collect real ones)
  - Add client logos if permitted

---

## Environment Variables

Create `.env` file (not committed):

```bash
# Sanity (when added)
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production

# Contact Form (if using custom API)
RESEND_API_KEY=your_api_key

# Analytics (if using)
PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment

Site auto-deploys on push to `main` branch via Vercel.

```bash
git add .
git commit -m "Your commit message"
git push
```

---

## Current Projects Showcased

1. **Football Genic** - E-commerce platform for football equipment (boots, jerseys, accessories)
2. **Mzansi Gigs** - South African gig economy marketplace

---

## Repository

- **GitHub:** https://github.com/mtho-ngoza/bytecollection-site
- **Vercel:** https://vercel.com/byte-collections/bytecollection-site
