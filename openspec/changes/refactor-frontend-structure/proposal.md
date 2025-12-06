# Change: Refactor Frontend Structure

## Why
The current codebase structure is flat and difficult to navigate. Grouping components by page and extracting common layout elements (Navbar, Footer) will make the project more intuitive and maintainable for developers.

## What Changes
- **Layout Architecture**:
  - Extract `Navbar` logic from `Layout.tsx` into `src/components/layout/Navbar.tsx`.
  - Move `ContactFooter.tsx` to `src/components/layout/Footer.tsx`.
  - Update `Layout.tsx` to simply wrap content with `Navbar` and `Footer`.
- **Page Organization**:
  - Create `src/pages/home/` and move `HomePage.tsx` and its specific components (`Hero`, `ServiceList`, `ServiceAreas`) there.
  - Create `src/pages/request-service/` and move `RequestServicePage.tsx` and its specific components (`ServiceRequestForm`, `ServiceSelection`) there.
- **Updates**:
  - Update all import paths to reflect the new structure.

## Impact
- Affected specs: `architecture`
- Affected code:
  - `src/components/*` (moves to page folders or layout)
  - `src/pages/*` (reorganization)
  - `src/App.tsx` (imports)

