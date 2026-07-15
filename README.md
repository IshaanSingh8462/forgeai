# ForgeAI — Hackathon Website

A cinematic, single-page hackathon website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Dark neural-network aesthetic, scroll-triggered reveals, a self-drawing timeline, animated stat counters, and a live registration countdown — inspired by the TreeHacks-style scroll narrative.

## Requirements

- [Node.js](https://nodejs.org/) 18.17 or newer (Node 20 LTS recommended)
- npm (comes with Node)
- An internet connection the first time you run it (to fetch the Google Fonts used for the type system)

## Running it locally

1. Unzip the project and open a terminal in the project folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local dev server:

   ```bash
   npm run dev
   ```

4. Open **http://localhost:3000** in your browser.

Any changes you make to files in `app/` or `components/` will hot-reload automatically.

## Building for production

```bash
npm run build
npm run start
```

This produces an optimized production build and serves it at `http://localhost:3000`.

## Project structure

```
forgeai-website/
├── app/
│   ├── layout.js        # Root layout, fonts, page metadata
│   ├── page.js          # Assembles all sections in order
│   └── globals.css      # Design tokens, glass panels, glow utilities
├── components/
│   ├── Navbar.js         # Fixed nav with scroll-shrink + mobile menu
│   ├── NeuralField.js     # The signature animated constellation background
│   ├── Hero.js            # Full-screen hero with parallax + live countdown
│   ├── Stats.js           # "Bigger than a hackathon" animated counters
│   ├── About.js           # Split text/illustration section
│   ├── Tracks.js          # 6 expandable track cards
│   ├── Schedule.js        # Self-drawing vertical timeline (Fri/Sat/Sun)
│   ├── Prizes.js          # Featured grand prize + track prize grid
│   ├── Mentors.js         # Mentor card grid
│   ├── Sponsors.js        # Tiered sponsor logo wall + sponsor CTA
│   ├── FAQ.js              # Accordion FAQ
│   ├── Footer.js           # Register CTA + footer
│   └── SmoothScroll.js     # Lenis-powered smooth scrolling wrapper
├── tailwind.config.js    # Color palette, type scale, animation tokens
├── postcss.config.js
├── next.config.js
└── package.json
```

## Customizing content

All copy is plain text or arrays at the top of each component file — there's no CMS or database. To update:

- **Dates, tracks, schedule, prizes, mentors, sponsors, FAQ:** edit the arrays at the top of the matching file in `components/`.
- **Colors:** edit the `colors` block in `tailwind.config.js` (`void`, `abyss`, `ember`, `gold`, `neural`, `mist`).
- **Fonts:** `app/layout.js` loads Space Grotesk (display) and Inter (body) from Google Fonts via `next/font`. Swap the imports there to change typefaces.
- **Countdown target:** `components/Hero.js` sets the deadline 86 days from whenever the site is built/loaded — replace `REGISTRATION_DEADLINE` with a fixed date (e.g. `new Date("2026-10-09T17:00:00")`) once your real date is locked in.

## Notes

- The neural-network background (`NeuralField.js`) is generated from a deterministic seeded random, so it looks identical on every load and matches between server and client (no hydration flicker).
- All animations respect `prefers-reduced-motion` and smooth scrolling degrades gracefully if disabled.
- `npm audit` will flag a couple of advisories in Next.js 14.2.x that mostly affect self-hosted server deployments (image optimizer, middleware). They don't affect local development. If you plan to deploy this publicly, consider running `npm audit fix` or upgrading to the latest Next.js 14/15 patch release before going live.
