---
name: content-update
description: Update MOTOBAJER workshop business content — hours, services, addresses, phone numbers, review quotes, staff names — across all Astro components without touching unrelated markup.
disable-model-invocation: true
---

# content-update

When invoked the user will describe what business data has changed (e.g. new phone number, updated service list, changed opening hours, new review quote). Your job:

1. Identify which component(s) in `src/components/` contain the data — do NOT guess, read the file first.
2. Make the minimal edit: change only the exact value, leave all surrounding markup untouched.
3. Run `npm run build` to confirm no build errors after the edit.
4. Report what changed and where (component name + line number).

## Component map (approximate — always verify by reading)
- Phone / CTA: `HeroSection.astro`, `StickyCtaBar.astro`, `ContactSection.astro`
- Addresses / maps: `LocationsSection.astro`, `ContactSection.astro`
- Services list: `ServicesSection.astro`
- Reviews / testimonials: `ReviewsSection.astro`
- Staff / about text: `AboutSection.astro`
- Footer details: `Footer.astro`

## Rules
- Never reformat, rename variables, or restructure markup — change only the data value.
- If the change touches multiple components, make all edits before running the build check.
- If the user provides Polish text, preserve it exactly (accents, punctuation).
