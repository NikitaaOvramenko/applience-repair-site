## Context
Building a "Digital Postcard" landing page for Toronto Appliance Repair. The focus is speed, simplicity, and conversion (calls).

## Goals / Non-Goals
- **Goals**:
    - Load time < 2 seconds.
    - Mobile-first design.
    - Clear Call-to-Action.
- **Non-Goals**:
    - Complex booking systems (initially just phone/SMS).
    - User accounts or login.
    - CMS integration.

## Architecture Decisions
### Directory Structure
Adopting the requested "TCS-Paint" style structure:
```
src/
  assets/       # Images, fonts, global static files
  components/   # Reusable UI components (Hero, Button, etc.)
  pages/        # Page-level components (Home, Services)
  styles/       # Global styles and Tailwind directives
  App.tsx       # Main router/layout
  main.tsx      # Entry point
```

### Design System
- **Colors**:
    - Primary: `#005BBB` (Primary Blue)
    - Neutral: White, Gray
- **Typography**:
    - Family: Montserrat, Roboto, or Inter (Sans-serif technical look).
- **Visuals**:
    - Minimalist, technical aesthetic.
    - 1-2 lightweight context images.

## Risks / Trade-offs
- **Single Page vs Multi-page**: Starting with a single scrolling page for the MVP is simpler and faster for users. Can expand to separate pages later.
- **Performance**: High-res images are the biggest risk. Strict <250KB limit is enforced.

