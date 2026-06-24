# MOTOBAJER v2

## Tech Stack
- **Astro 5.9**, **Tailwind CSS 4**, **TypeScript**, **Lucide Astro** icons
- Static output — no server runtime
- Polish language site (`lang="pl"`)

## Commands
```
npm run dev      # Dev server at localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview built output
```

## Key Conventions

**Colors — always use OKLCH tokens.** Custom colors are defined in `src/styles/global.css` under `@theme` and applied via inline `style=` attributes. Tailwind 4's JIT cannot generate arbitrary OKLCH values, so use `style="color: var(--color-navy);"` rather than Tailwind class syntax for brand colors.

**Reveal animations.** Elements with `.reveal` start hidden; the IntersectionObserver in `src/layouts/BaseLayout.astro` adds `.visible` when they enter the viewport. Never manually set `opacity` on `.reveal` elements. Add `.reveal-clip` for the wipe/clip entrance on section headings.

**Two booking forms on index.astro.** Keep them in sync when modifying form behavior:
- `BookingSection.astro` — navy background, `field-*` CSS classes (`src/styles/global.css`), IDs: `booking-form`, `booking-success`
- `ContactSection.astro` — white background, `lf-*` CSS classes (local `<style>` block), IDs: `contact-form`, `contact-success`, `contact-submit`

**Formspree.** Set `PUBLIC_FORMSPREE_ID=xxxxxxxx` in `.env` (not committed) to activate AJAX form submission. Without it, both forms degrade gracefully to `mailto:`.

**Hover states — use CSS classes, not inline handlers.** CSS utilities in `global.css`:
- `.hover-accent` — accent-color background hover (for accent buttons)
- `.hover-surface` — light surface hover (for white/light buttons on dark bg)
- `.hover-surface-border` — subtle surface fill hover (for bordered links)
- `.hover-text-white` — white text hover
- `.hover-text-navy-light` — navy-light text hover

## Content Blockers
- **Gallery photos** — real photos go in `/public/images/gallery/warsztat-01.jpg` through `warsztat-08.jpg`. The gallery section currently shows an editorial placeholder. When photos arrive, restore the commented-out masonry grid in `GallerySection.astro`.
- **Formspree ID** — see above.
