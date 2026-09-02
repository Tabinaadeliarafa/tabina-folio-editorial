# Tabina Adelia Rafa — Editorial Portfolio

## Goal
Build a single-page, premium portfolio at `/` that presents Tabina as a multidisciplinary Informatics Engineering student working across design, development, and data. The experience will use the requested dark editorial art direction, fully designed replacement-safe media placeholders, and restrained agency-style motion.

## Structure
- Fixed minimal navigation with availability status, scroll-state treatment, active anchors, and mobile menu.
- Full-viewport cinematic hero with layered `PORTFOLIO` typography, configurable portrait placeholder, location/focus copy, parallax, and scroll cue.
- Dual infinite marquees introducing UI/UX, backend, web, analytics, and creative technology.
- Editorial About composition with configurable portrait placeholder and education/current-focus details.
- Four large, alternating project showcases for EcoTrack, IMDb Film Trends Data Warehouse, Teraz, and FundEx Redesign.
- Horizontal-row Experience & Journey timeline covering all five provided roles.
- Experimental skill grid grouped into Design, Development, Data, and Tools, followed by a skills marquee.
- Minimal leadership metrics section with count-up statistics.
- Full-screen contact finale with magnetic CTA, social links, oversized decorative type, and compact footer.

## Interaction & Motion
- Add Framer Motion for text-mask reveals, staggered entrances, viewport-triggered transitions, image clipping, parallax, count-up motion, and restrained hover perspective.
- Implement a custom desktop cursor that expands to `VIEW` over projects, magnetic CTA behavior, animated arrows, and a fixed scroll-progress indicator.
- Add smooth anchor scrolling, scroll-aware navigation, continuous CSS marquees, and a subtle global grain texture.
- Respect `prefers-reduced-motion`; disable cursor/parallax and simplify overlap and motion on touch/mobile layouts.

## Content Architecture
- Centralize identity, navigation, biography, projects, experience, skills, metrics, contact links, and configurable hero/about images in one typed portfolio data file.
- Give every project the requested reusable fields: `title`, `category`, `year`, `description`, `technologies`, `image`, `projectUrl`, `githubUrl`, and `caseStudyUrl`.
- Use a reusable media placeholder component whenever an image is absent so later asset replacement does not change layout.
- Split the page into reusable components: Navbar, Hero, Marquee, About, SelectedWork, ProjectShowcase, Experience, Skills, Leadership, Contact, Footer, CustomCursor, and ScrollProgress.

## Design System
- Replace the template palette with semantic OKLCH tokens matching near-black, charcoal, deep/muted burgundy, warm cream, primary/secondary text, and thin translucent borders.
- Load Instrument Serif for display typography and Manrope for interface/body typography through document head links.
- Use sharp editorial geometry, thin rules, generous negative space, asymmetric grids, and limited burgundy accents; avoid generic cards, glass effects, bright gradients, and developer-template styling.

## Responsive & Quality Checks
- Create distinct desktop, tablet, and mobile compositions rather than uniformly shrinking the desktop design.
- Verify navigation, anchors, project interactions, external links, image fallbacks, responsive layout, reduced-motion behavior, and no text overlap at representative desktop and mobile widths.
- Add route-specific title, description, Open Graph, and Twitter metadata for the portfolio home route.
