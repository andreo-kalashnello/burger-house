# Burger House — Design QA

**Findings**

- No actionable P0, P1, or P2 findings remain.
- [P3] The supplied Stitch promo and final CTA raster assets are 512 × 286 and look softer than the high-resolution banners in the composite reference when rendered across a 1280px desktop container.
  Location: `PromoSection`, `FinalCtaSection`.
  Evidence: the implementation preserves the complete supplied images and their native aspect ratios, while the composite reference contains wider, sharper banner variants.
  Impact: minor image softness on large desktop screens; copy and product subjects remain intact.
  Fix: replace the two files in `public/images/banners/` if higher-resolution Stitch exports become available; no component or layout change is needed.
- [P3] The composite reference shows six menu cards, while the implementation shows four.
  Location: `FeaturedFavorites`.
  Evidence: source composite versus the four-card desktop row in the final comparison.
  Impact: the implementation has slightly more whitespace below the menu grid.
  Fix: none for this delivery; four desktop cards are an explicit acceptance requirement in `task.md`.

**Open Questions**

- The composite board and the individual Stitch screens use different generated burger/banner variants. The implementation follows the explicit brief: the provided hero burger, four menu products, and the separately downloaded Stitch banner assets.

**Implementation Checklist**

- [x] Match the yellow/red/cream/charcoal palette and local Anton + Be Vietnam Pro typography.
- [x] Preserve the continuous section order and responsive grids.
- [x] Use the supplied local GLB as the interactive hero subject and local `next/image` assets for products, banners, avatars, and source-derived decorative wave/drip assets.
- [x] Preserve reduced-motion behavior by disabling the 3D auto-rotation when requested by the operating system.
- [x] Use a burger asset for the standard, shortcut, and Apple favicon metadata.
- [x] Keep promo and final CTA images uncropped and separate from the HTML footer.
- [x] Verify sticky header, mobile navigation, category filters, empty menu state, add-to-cart feedback, and cart count.
- [x] Verify reduced-motion handling, semantic landmarks, alt text, labels, focus styles, and mobile tap targets.
- [x] Verify no page-level horizontal overflow at 1440, 1024, 768, and 390 CSS px.

**Follow-up Polish**

- Replace the 512px banner files with higher-density Stitch exports if the design source later exposes them.

## Evidence

- Source visual truth: `output/reference/stitch-full-composite.png`
- Additional Stitch references:
  - `output/reference/stitch-hero-3d.png`
  - `output/reference/stitch-hero-classic.png`
  - `output/reference/stitch-favorites.png`
  - `output/reference/stitch-final.png`
- Browser-rendered implementation:
  - Desktop, current production hero: `output/playwright/desktop/burger-3d-prod-1440.png`
  - Desktop, original full-page baseline: `output/playwright/desktop/burger-1440.png`
  - Tablet: `output/playwright/tablet/burger-1024.png`
  - Tablet/narrow: `output/playwright/tablet/burger-768.png`
  - Mobile, current production hero: `output/playwright/mobile/burger-3d-prod-390.png`
  - Mobile, original full-page baseline: `output/playwright/mobile/burger-390.png`
  - Mobile menu: `output/playwright/mobile/burger-390-menu.png`
- Full-view side-by-side comparison: `output/comparisons/reference-vs-implementation-final.png`
- Focused hero comparison: `output/comparisons/hero-focus-final.png`
- Current 3D hero comparison: `output/playwright/comparison/stitch-vs-burger-3d.png`

## Capture Normalization

- Source full view: 809 × 1942 px.
- Implementation full view: 1440 × 4237 px at a 1440 × 1000 CSS viewport, device scale factor 1.
- Normalized implementation: 809px wide, preserving aspect ratio (809 × 2380 px).
- Full comparison canvas: 1714 × 2380 px.
- Focused hero comparison: equal 809 × 600 px crops placed side by side.
- Current 3D hero comparison: the 512 × 448 px Stitch 3D hero source and the 1440 × 1260 px production capture normalized to 512 × 448 px, then placed side by side.
- State: default landing page, all menu categories visible, all `whileInView` sections activated before the full-page captures.
- Browser: Playwright Chromium via the user-requested Playwright CLI.

## Required Fidelity Surfaces

- Fonts and typography: local Anton provides the condensed display hierarchy; local Be Vietnam Pro provides navigation, body, controls, and supporting copy. Weights, line-height, wrapping, and desktop hero scale were checked in the focused comparison.
- Spacing and layout rhythm: header shell, 1050px desktop hero, four-card grid, banner frames, benefit row, CTA, footer columns, radii, shadows, and section gaps were checked across all four widths.
- Colors and tokens: yellow hero, red actions, warm cream surface, charcoal footer, badge colors, borders, and shadows are mapped through CSS variables and remain consistent.
- Image quality and asset fidelity: all available Stitch and user-provided source assets are local. The supplied 21 MB GLB replaces the flat hero image and renders at 760 × 535 CSS px on desktop with transparent background, neutral lighting, and a real-time shadow. Product images keep their crops; banners keep full content and native aspect ratios. The remaining low-resolution banner softness is classified P3 above.
- Copy and content: required headings, product names, descriptions, prices, banner copy, benefit copy, contact details, and footer labels are present.
- Icons and affordances: Lucide icons share a consistent stroke family; active category, active nav, cart badge, add success, mobile open/close, hover, focus, and reduced-motion states were checked.

## Primary Interactions Tested

- Cart: `Cart with 2 items` → add Classic Burger → `Cart with 3 items`.
- Filters: select Chicken → accessible empty state appears → select All → four cards restored.
- Mobile menu: trigger reports `aria-expanded="true"` and exposes seven links/actions; Escape handling is implemented.
- Navigation and primary CTAs resolve to the intended in-page anchors.
- 3D hero: GLB reports `loaded: true`; auto-rotation and camera controls are enabled; a drag test changes the camera orbit; zoom and pan are disabled to avoid hijacking page scroll.
- Favicon: the rendered icon link resolves to `/images/hero/hero-burger.png`.
- Console: 0 errors and 0 warnings in the clean production session.
- Overflow: `scrollWidth === clientWidth` at 1440, 1024, 768, and 390.

## Comparison History

1. Pass 1 — `output/comparisons/reference-vs-implementation-pass-1.png`
   - Capture issue: below-the-fold Reveal sections had not entered the viewport and were transparent in the initial full-page screenshot.
   - Fix: exercised the complete scroll path before capture and recaptured the fully revealed page.
2. Pass 2 — `output/comparisons/reference-vs-implementation-pass-2.png`
   - [P2] Desktop hero was vertically compressed relative to the source, and the header/brand hierarchy was undersized.
   - Fixes: increased desktop hero height and inner frame, corrected display scale and grid balance, refined burger positioning, enlarged the brand lockup, and replaced decorative CSS shapes with local source-derived image assets.
3. Final — `output/comparisons/reference-vs-implementation-final.png` and `output/comparisons/hero-focus-final.png`
   - Post-fix evidence shows the hero boundary, typography hierarchy, header scale, product composition, and source decoration aligned without actionable P0/P1/P2 drift.
   - Responsive captures show no clipping, broken grids, control loss, or page-level overflow.
4. 3D hero update — `output/playwright/comparison/stitch-vs-burger-3d.png`
   - Intentional change: replaced the static hero burger image with the user-supplied GLB while preserving the source layout, badges, decoration, typography, and hero proportions.
   - Post-change evidence confirms the model is fully visible on desktop, remains intentionally oversized within the clipped mobile composition, loads successfully, supports pointer interaction, and introduces no page-level overflow.
   - No actionable P0/P1/P2 drift was found; the new 3D subject is an explicit user-requested deviation from the flat source image.

final result: passed
