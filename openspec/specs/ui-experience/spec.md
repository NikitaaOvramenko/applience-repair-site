### Requirement: Responsive Layout Containers
The application SHALL use fluid, responsive containers for main content areas instead of fixed pixel widths.

#### Scenario: Desktop View
- **WHEN** the browser window is wider than 1280px
- **THEN** the content is centered with a maximum width (e.g., `max-w-7xl`)
- **AND** it does not overflow or get cut off

### Requirement: Fluid Component Sizing
Key components (Intro, Cards) SHALL scale their dimensions relative to the viewport or parent container.

#### Scenario: Mobile View
- **WHEN** the browser window is narrow (mobile)
- **THEN** components like the Intro section stack vertically
- **AND** text wraps appropriately without horizontal scrolling

