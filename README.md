# AttendFlow

Smart attendance management for universities — QR code scanning and GPS
verification, built for Marusoft Technology.

This repo is the frontend for the landing page (plus login/signup shells for
routing), built with React + Vite and CSS Modules.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build to /dist
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Project structure

```
src/
├── main.jsx              # React entry point, mounts <App />
├── App.jsx                # All routing lives here (react-router)
├── index.css              # Global reset + design tokens (CSS variables)
├── assets/images/         # SVG logo mark, avatar illustrations, favicon
├── components/            # Every reusable UI piece, one folder each:
│   │                         ComponentName.jsx
│   │                         ComponentName.module.css
│   ├── Navbar/             # Sticky header, responsive mobile drawer
│   ├── Hero/                # Landing hero copy + CTA + trust strip
│   ├── DashboardPreview/    # The product mockup shown in the landing hero
│   ├── QrCode/              # Deterministic QR-style SVG pattern generator
│   ├── Features/            # Landing page's 6-card feature teaser
│   ├── FeaturesHero/         # Hero for the dedicated /features page
│   ├── FeatureGrid/           # Full 12-card grid on /features
│   ├── AiAssistantBanner/      # "Ask our AI Assistant" CTA on /features
│   ├── PageHero/              # Shared centered heading (How It Works, etc.)
│   ├── ProcessSteps/           # 6-step flow with device mockups
│   ├── WhyItMatters/            # Accurate/Fast/Secure/Insightful banner
│   ├── AboutHero/                # About page intro + photo collage
│   ├── InfoTrio/                  # Mission / Vision / Story cards
│   ├── ValuesSection/              # What Drives Us + team card
│   ├── ContactHero/                 # Contact page intro
│   ├── ContactInfo/                  # Contact cards + map + company card
│   ├── ContactForm/                   # Working (UI-only) contact form
│   ├── HowItWorks/                     # Landing page's 3-step teaser
│   ├── About/                           # Landing page's About teaser
│   ├── CtaBanner/                        # Bottom conversion banner
│   ├── Footer/                            # Footer + contact info
│   ├── AuthSplitLayout/                     # Split-screen shell used by Login/Signup
│   ├── SocialAuthButtons/                    # "Continue with Google/Microsoft"
│   ├── RoleSelector/                          # Student/Lecturer/Admin picker (Signup)
│   ├── Reveal/                                 # Scroll-triggered fade-up animation wrapper
│   ├── Button/                                 # Shared button (primary/secondary/ghost)
│   ├── Icons/                                   # Shared stroke-icon set (no icon package needed)
│   └── index.jsx                                # THE one components entry point — import anything
│                                                   from '../../components'
└── pages/
    ├── Landing/               # Composes Hero + Features + ... + Footer
    ├── FeaturesPage/           # /features
    ├── HowItWorksPage/          # /how-it-works
    ├── AboutPage/                 # /about
    ├── ContactPage/                # /contact
    ├── Login/                       # /login (split-screen redesign)
    ├── Signup/                       # /signup (split-screen, role selector)
    ├── NotFound/                      # Catch-all 404 route
    └── index.jsx                      # THE one pages entry point (used by App.jsx)
```

`src/data/content.js` holds all static content (nav/footer links, feature
lists, steps, stats, contact details, the brand tagline, etc.) so copy can be
edited in one place without touching component code.

## Notes

- **Styling**: CSS Modules only, no CSS framework. Design tokens (colors,
  radii, shadows, the `--font-sans` stack) live in `src/index.css` as CSS
  variables, so re-theming means editing one file.
- **Routing**: `react-router` (not `react-router-dom`) v8, set up in `App.jsx`.
  Routes: `/` (landing), `/features`, `/how-it-works`, `/about`, `/contact`,
  `/login`, `/signup`, and a catch-all 404. The landing page also has an
  in-page preview of Features/How It Works with anchor scrolling, but the
  navbar links to the full dedicated pages.
- **Images**: the avatars, logo, and page illustrations (student/team/QR
  scenes) are hand-built SVGs rather than stock photos — this keeps the
  bundle tiny and avoids licensing stock imagery. Swap any file in
  `src/assets/images/` for a real photo/logo whenever you're ready; every
  usage is a plain `<img src={...} />` import.
- **QR codes**: `components/QrCode` renders a real-looking, deterministic
  QR-style pattern from a string (e.g. a session name) purely for the UI —
  it's not a functioning scanner code. Wire up a real QR library (e.g.
  `qrcode`) here once you build the actual session-check-in feature.
- **Forms**: Login/Signup forms are UI-only (`onSubmit` calls
  `preventDefault()`). Hook them up to your backend/auth provider when ready.

## Next suggested steps

1. Wire the Login/Signup forms to your auth API.
2. Build the authenticated dashboard routes (the `DashboardPreview` component
   is a static mockup — a real one will need live data, likely its own
   `pages/Dashboard` route).
3. Replace the placeholder contact details in the footer.
