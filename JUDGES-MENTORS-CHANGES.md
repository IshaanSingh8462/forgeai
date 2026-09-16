# ForgeHacks Judges/Mentors update — how to apply

Drop these files into your existing project at the **same relative paths**,
overwriting the old versions. `components/Organizers.js` is no longer used
and can be deleted (kept out of this package on purpose).

## New files
- `components/PersonCard.js` — shared card used by both Judges and Mentors.
  Shows a circular photo, name, and title. On hover/focus it expands to
  reveal a LinkedIn button (if provided) and a bio. Works with keyboard
  focus too, and tapping toggles it open on touch devices.
- `components/Judges.js` — new section, 12 placeholder judge cards in a
  2-column grid. No application/CTA button, per your request.

## Modified files
- `components/Mentors.js` — replaced the "Mentor Bench · Now forming"
  orbital graphic with a real 2-column grid of 8 placeholder mentor
  cards (same `PersonCard`). The "Become a Mentor" CTA and the three
  benefit bullets are still there, now as a card below the grid.
- `app/page.js` — swapped `<Organizers />` for `<Judges />`, in the same
  spot in the page (between Ambassadors and Sponsors).
- `components/Navbar.js` — nav link "Team" (`#team`) changed to
  "Judges" (`#judges`), both in the desktop nav and the mobile menu.

## What you need to do
Each person is one object in the `judges` array (`components/Judges.js`)
or the `mentors` array (`components/Mentors.js`):

```js
{
  name: "Jane Doe",
  title: "ML Engineer, Some Company",
  image: "/judges/jane-doe.jpg",   // add the file under /public/judges/
  bio: "One or two sentences on their background.",
  linkedin: "https://linkedin.com/in/janedoe", // "" to hide the button
}
```

1. Add photo files to `/public/judges/` and `/public/mentors/` (square
   images work best — they're cropped into a circle).
2. Replace the placeholder objects with real names/titles/bios/links.
3. Add or remove objects freely — the grid re-flows automatically, no
   layout changes needed for 12 judges, 20 judges, 5 mentors, etc.
4. If `image` is left empty (`""`), the card shows initials instead of
   a broken image, so you can fill in bios before photos are ready.

## Not changed (and why)
- Card behavior is hover-to-expand as specified: image + name + title by
  default, LinkedIn button + bio revealed on hover. Nothing else on the
  page was touched.
- `components/Organizers.js` still exists in your repo but is no longer
  imported anywhere — delete it once you've confirmed the new Judges
  section looks right.
