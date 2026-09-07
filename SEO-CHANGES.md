# ForgeHacks SEO changes — how to apply

Drop these files into your existing project at the **same relative paths**,
overwriting the old versions. No other files were touched.

## New files
- `app/sitemap.js` — generates `/sitemap.xml`
- `app/robots.js` — generates `/robots.txt`
- `components/StructuredData.js` — JSON-LD (Organization, WebSite, Event, FAQPage)

## Modified files
- `app/layout.js` — metadataBase, title template, description, OG/Twitter
  tags, canonical, robots directives, renders Organization/WebSite/Event JSON-LD
- `app/page.js` — renders FAQPage JSON-LD from `components/FAQ.js`
- `components/FAQ.js` — added 3 FAQ entries (online?, how long?, how to
  register?) and exports a plain-text `faqSchema` array for JSON-LD
- `components/Navbar.js` — logo alt text fixed to "ForgeHacks logo",
  switched `<img>` → `next/image`, added aria-labels for the mobile menu
- `components/Hero.js` — filled the previously-empty eyebrow element with
  "ForgeHacks 2026 · Online AI Hackathon for Students"; date line now
  reads "Fully online, worldwide"
- `components/About.js` — one-sentence edit making "fully online" and
  "everywhere" explicit in the first paragraph

## Not changed (and why)
- No new pages/routes were created — the site is genuinely a single page,
  so adding thin pages just to "target keywords" would violate your own
  Step 13 constraint and Google's guidelines on doorway pages.
- No pricing/"free" language was added anywhere, because the codebase
  doesn't state a price — I didn't want to assert a fact not present on
  the site itself.
- Visual design, animations, and layout are untouched.
