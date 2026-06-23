---
name: a11y-check
description: Audit the MOTOBAJER site for WCAG AA accessibility violations — contrast, touch targets, semantic HTML, heading hierarchy, reduced-motion support. Uses Playwright MCP against the running dev server.
disable-model-invocation: true
---

# a11y-check

Target: WCAG 2.1 AA. The user base is 35+ Polish car owners on mobile — generous touch targets and readable text are critical.

## Steps

1. Run `npm run build && npm run preview -- --port 4322` in the background (the port avoids conflicts with the dev server).
2. Use Playwright MCP to navigate to `http://localhost:4322`.
3. Inject axe-core via `browser_evaluate`:
   ```js
   const s = document.createElement('script');
   s.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.1/axe.min.js';
   document.head.appendChild(s);
   await new Promise(r => s.onload = r);
   return await axe.run({ resultTypes: ['violations'] });
   ```
4. Also manually check:
   - All interactive elements ≥ 44×44 px touch target (check `StickyCtaBar.astro` CTA first)
   - Color contrast on hero text over background image
   - `prefers-reduced-motion` respected in any CSS animations
   - Correct heading hierarchy (one `<h1>`, logical `<h2>`/`<h3>` order)
   - `alt` attributes on all `<img>` elements
   - `aria-label` on icon-only buttons (phone icon CTA)

## Output format

Report violations grouped by component filename. For each:
- **Severity**: critical / serious / moderate
- **Element**: selector or description
- **Issue**: what's wrong
- **Fix**: specific code change

If no violations: confirm "WCAG AA — no violations found."
