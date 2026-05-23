# Lumira Circle — Developer Documentation

> Premium women's transformation & education platform built with Next.js 14, Tailwind CSS, and Sanity CMS.

---

## 🗂 Project Structure

```
lumira-circle/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Home page
│   │   ├── layout.tsx              # Root layout (Navbar + Footer)
│   │   ├── meet-the-gurus/         # Coach profiles page
│   │   ├── become-a-coach/         # Coach application page
│   │   ├── join-our-team/          # Careers page
│   │   ├── who-is-this-for/        # Target audience page
│   │   └── legal/
│   │       ├── privacy-policy/     # Privacy Policy
│   │       └── refund-policy/      # Refund Policy
│   ├── components/
│   │   ├── layout/                 # Navbar, Footer
│   │   ├── sections/               # Page-level sections (Hero, Programs, etc.)
│   │   └── ui/                     # Reusable atoms (Section, Card, FAQItem, etc.)
│   ├── lib/
│   │   └── sanity.ts               # Sanity client + fetch helpers
│   ├── sanity/
│   │   └── schemaTypes/            # Sanity content schemas
│   └── styles/
│       └── globals.css             # Tailwind imports + design tokens
├── sanity.config.ts                # Sanity Studio config
├── tailwind.config.ts              # Design system / tokens
├── next.config.mjs                 # Next.js config
├── vercel.json                     # Vercel deployment config
└── .env.example                    # Environment variable template
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your Sanity project ID, Stripe keys, etc.

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `ivory-50` | `#FDFCF8` | Page backgrounds |
| `blush-500` | `#C96A56` | Primary accent, CTAs |
| `sage-400` | `#759E72` | Success, nature accents |
| `gold-400` | `#D4B97A` | Luxury accents |
| `charcoal-900` | `#1A1714` | Dark sections, text |
| `mauve-300` | `#C4AEC4` | Soft feminine accents |

### Typography
- **Display / Headings:** Cormorant Garamond (elegant serif)
- **Body / UI:** Jost (clean geometric sans)
- **Accent / Pull quotes:** DM Serif Display (editorial serif)

### Key CSS Classes
```css
.btn-primary       /* Dark filled CTA */
.btn-outline       /* Bordered CTA */
.btn-ghost         /* Light bordered (on dark bg) */
.section-label     /* Eyebrow text */
.display-heading   /* Large hero text */
.sub-heading       /* Section title */
.body-lg           /* Large body text */
.input-field       /* Underline form inputs */
.card-hover        /* Hover lift effect */
```

---

## 📦 CMS Integration — Sanity

### Why Sanity?
- **Real-time editing** with Sanity Studio
- **CDN-backed** image delivery via Cloudinary-style transforms
- **GROQ** query language for flexible data fetching
- **Type-safe** with TypeScript generation
- **Generous free tier** — perfect for a platform this size

### Setup Steps

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Initialise Sanity in project
npx sanity@latest init --env .env.local

# Start Sanity Studio locally
npx sanity dev

# Deploy Sanity Studio to Sanity's hosted URL
npx sanity deploy
```

### Content Collections (Schemas)
| Collection | File | Purpose |
|-----------|------|---------|
| `coach` | `schemaTypes/index.ts` | Guru/coach profiles |
| `program` | `schemaTypes/index.ts` | Course offerings |
| `testimonial` | `schemaTypes/index.ts` | Member stories |
| `post` | `schemaTypes/index.ts` | Blog content |
| `siteSettings` | `schemaTypes/index.ts` | Global site config |

### How to Edit Content (Non-Technical Admins)
1. Go to `https://lumiracircle.sanity.studio` (after deployment)
2. Log in with your Sanity account
3. Select the content type (e.g., "Coach / Guru")
4. Click "Create new" or select existing
5. Fill in fields and click "Publish"

Changes are live within seconds — no code deployment needed.

---

## 📝 Form Submissions

### Recommended: Resend + Next.js API Routes

```bash
npm install resend
```

Create `/src/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  
  await resend.emails.send({
    from: 'Lumira Circle <noreply@lumiracircle.com>',
    to: ['hello@lumiracircle.com'],
    subject: `New Application: ${body.name}`,
    html: `<p>${JSON.stringify(body)}</p>`,
  });

  return NextResponse.json({ success: true });
}
```

### Alternative: Formspree (No-Code)
1. Sign up at formspree.io
2. Create a form and get the endpoint URL
3. Replace `action=""` in form tags with your Formspree URL

---

## 🌐 Vercel Deployment

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/lumira-circle)

### Manual Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Required Environment Variables in Vercel Dashboard
```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_API_READ_TOKEN
RESEND_API_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
```

---

## 🔌 Recommended Integrations

| Need | Recommended Tool | Notes |
|------|-----------------|-------|
| CMS | **Sanity** | Already configured |
| Payments | **Stripe** | Subscription billing |
| Email | **Resend** | Transactional emails |
| Forms | **Resend + API Route** | Server-side submission |
| Analytics | **Vercel Analytics + GA4** | Built-in + custom |
| Video hosting | **Vimeo Pro** | Members-only content |
| Community | **Circle.so** | Embeddable community |
| Scheduling | **Calendly** | Coach booking |
| Course delivery | **Kajabi or Teachable** | Embed via iframe |

---

## ⏱ Project Timeline & Estimate

| Phase | Scope | Estimated Duration |
|-------|-------|-------------------|
| **Phase 1** | Core pages (all 6) + design system | 2–3 weeks |
| **Phase 2** | Sanity CMS setup + admin training | 1 week |
| **Phase 3** | Payment integration (Stripe) | 1–2 weeks |
| **Phase 4** | Course delivery integration | 1–2 weeks |
| **Phase 5** | QA, SEO audit, performance optimisation | 1 week |
| **Phase 6** | Launch & handover | 3–5 days |

**Total Estimated Timeline:** 7–10 weeks

### Budget Ranges (Development)
| Scope | Estimate |
|-------|---------|
| Core website (all pages, CMS, forms) | $8,000–$15,000 |
| + Stripe subscription integration | +$3,000–$5,000 |
| + Custom member portal | +$8,000–$15,000 |
| Monthly retainer (maintenance, updates) | $500–$1,500/mo |

### Ongoing Costs (Monthly)
| Service | Cost |
|---------|------|
| Vercel Pro | $20/mo |
| Sanity Growth | $99/mo |
| Resend | Free–$20/mo |
| Stripe | 2.9% + $0.30/transaction |
| Domain | ~$15/yr |

---

## 🛠 Adding a New Coach (CMS)

1. Log into Sanity Studio
2. Navigate to **Coach / Guru**
3. Click **+ Create**
4. Fill in: Name, Role, Specialty, Bio, Photo, Certifications, Quote, Social URLs
5. Set **Display Order** (lower = appears first)
6. Click **Publish**
7. Coach appears on `/meet-the-gurus` instantly ✓

---

## 📞 Support

For technical questions:
- GitHub Issues: [your-repo/issues]
- Developer Email: dev@lumiracircle.com

For content editing:
- Sanity Studio: https://lumiracircle.sanity.studio
- Admin guide: See `/docs/content-guide.pdf`
