# Biech Software Solutions — Website

The marketing site for **Biech Software Solutions Pvt. Ltd.** (Noida, India).

Multi-page Next.js 14 / TypeScript / Tailwind app with five hand-built Three.js
scenes, smooth inertial scroll, and a working lead-capture form backed by
Prisma.

---

## Quick start

```bash
# 1. Install
npm install

# 2. Initialise the database (SQLite by default — file at prisma/dev.db)
cp .env.example .env       # edit LEADS_API_KEY before going live
npx prisma migrate dev --name init

# 3. Run
npm run dev                # http://localhost:3000
```

That is the entire setup. No external services required for local development.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript (strict) |
| Styling | Tailwind v3 with custom theme (cream / vermilion / gold palette) |
| 3D | `@react-three/fiber`, `@react-three/drei`, `three`, `simplex-noise` |
| Motion | `framer-motion` for reveals, stagger, counters, page-load sequence |
| Smooth scroll | `lenis` (client-only provider) |
| Forms | `react-hook-form` + `zod` |
| Database | Prisma ORM. **SQLite for dev** — see "Switching to PostgreSQL" below |
| Fonts | `next/font/google` — DM Serif Display + Plus Jakarta Sans |

---

## Project structure

```
app/
├── layout.tsx                     fonts, metadata, smooth scroll, navbar, footer
├── page.tsx · HomeContent.tsx     homepage (6 sections + marquee)
├── about/                         page.tsx + Content.tsx
├── contact/                       page.tsx + Content.tsx (lead form)
├── services/                      software-development | digital-marketing | staffing-solutions
├── api/leads/route.ts             POST (public) + GET (api-key)
├── providers/SmoothScroll.tsx     Lenis init
└── globals.css                    tailwind + Lenis baseline + animations

components/
├── three/                         5 R3F scenes + skeleton fallback
│   ├── HeroScene.tsx              floating cluster + mouse parallax + drift particles
│   ├── GlobeScene.tsx             wireframe globe + orbiting nodes + nearest-neighbor lines
│   ├── ParticleStream.tsx         sine-wave ribbon + 3 pulsing nodes
│   ├── ConstellationScene.tsx     instanced spheres + activate-on-hover wave
│   ├── MorphBlob.tsx              simplex-noise displaced gem
│   └── CanvasSkeleton.tsx         Suspense fallback (pulsing canvas-coloured div)
├── icons/                         3 custom inline SVG icons (one per service)
├── Navbar.tsx                     sticky, scroll-blur, mobile sheet
├── Footer.tsx
├── LeadForm.tsx                   RHF + Zod, inline success card
├── PageHero.tsx                   reused header for 3 service pages
├── ServiceCard.tsx                hover lift + clip-path underline sweep
├── SectionHeading.tsx             eyebrow + display H2 + optional decorative number
├── CtaBanner.tsx                  reusable vermilion CTA section
├── MarqueeTicker.tsx              CSS-keyframe seamless horizontal scroll
└── AnimatedCounter.tsx            framer-motion useMotionValue + animate

lib/
├── prisma.ts                      hot-reload-safe Prisma client singleton
├── validation.ts                  Zod schema for the lead form
└── copy.ts                        single source of truth for marketing copy

prisma/
└── schema.prisma                  Lead model (sqlite by default)
```

---

## API

### `POST /api/leads`

Public endpoint used by the contact form. Validates with Zod, inserts via Prisma.

```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Priya Iyer",
    "email":"priya@example.com",
    "phone":"+91 98xxxxxxxx",
    "company":"Acme",
    "service":"software",
    "message":"We are scoping a marketplace MVP for Q3 — would love to talk."
  }'
```

Response on success:

```json
{ "success": true }
```

### `GET /api/leads`

Admin endpoint. Requires the `x-api-key` header to match `LEADS_API_KEY` from
`.env`. Compared in constant time. Returns the 500 most recent leads,
newest first.

```bash
curl http://localhost:3000/api/leads \
  -H "x-api-key: $LEADS_API_KEY"
```

---

## Switching to PostgreSQL (production)

1. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Update `DATABASE_URL` in `.env` to your Postgres connection string —
   e.g. a Neon, Supabase, or RDS URL:
   ```
   DATABASE_URL="postgresql://user:password@host:5432/biech?schema=public"
   ```
3. Run `npx prisma migrate deploy` (CI/prod) or `npx prisma migrate dev --name init` (first dev run).

The schema is identical between providers; no app-code changes are needed.

---

## Customising

- **Copy** — every piece of marketing text lives in `lib/copy.ts`. Rewrite the
  voice in one file.
- **Palette** — `tailwind.config.ts` exposes `cream`, `ink`, `vermilion`,
  `gold`, `muted`, `canvas`. Change them once; everything follows.
- **Scenes** — each Three.js scene is self-contained in
  `components/three/*.tsx`. Edit colours, polygon counts, motion speeds in
  the file you want to change.
- **Reduced motion** — users who set `prefers-reduced-motion: reduce` get
  Lenis disabled (native scroll) and CSS animations short-circuited via
  `globals.css`. Three.js scenes still animate; consider an opt-out toggle
  if you want to honour the preference there too.

---

## Performance notes

- All five `<Canvas>` components are loaded via `next/dynamic({ ssr: false })`
  with a `CanvasSkeleton` fallback — they never block first paint.
- Canvas `dpr` is capped at `[1, 1.5]` so high-DPI screens do not pay 3× pixel
  cost.
- Geometry is procedural; **no GLTF / texture assets** are loaded over the
  network at runtime.
- All `useFrame` animations multiply by `delta` for frame-rate independence.

---

## Definition of done (live checklist)

- [ ] `npm run build` finishes with zero errors.
- [ ] Smooth scroll feels inertial across all pages.
- [ ] All five Three.js scenes render without console errors.
- [ ] Mouse parallax tilts the hero cluster (try moving the cursor over the
      canvas).
- [ ] Lead form submission writes a row — verify with `npx prisma studio`.
- [ ] `GET /api/leads` returns `401` without the api key, `200` with it.
- [ ] At 375px (mobile), the hamburger opens, hero stacks cleanly, no
      horizontal overflow.

---

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Next dev server (port 3000) |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint via `next lint` |
| `npm run db:migrate` | `prisma migrate dev` |
| `npm run db:studio` | Open Prisma Studio at port 5555 |
| `npm run db:generate` | Regenerate the Prisma client |

---

## Licence

Proprietary. © Biech Software Solutions Pvt. Ltd.
