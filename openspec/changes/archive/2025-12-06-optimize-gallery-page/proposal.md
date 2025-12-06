# Change: Optimize Gallery Page

## Why

The Gallery page suffers from layout shifts during image loading (causing the footer to jump) and uses an inflexible flex-wrap layout. We need to stabilize the layout and use a responsive grid while **strictly preserving** the existing background styling (`bg-[rgba(3,0,0,0.72)]`).

## What Changes

- **Layout Stabilization**:
  - Ensure `Gallery.tsx` uses a flex column layout with `min-h-screen` and `flex-grow` to keep the footer at the bottom.
- **Grid Layout**:
  - Switch `PictureSection.tsx` from `flex-wrap` to a responsive CSS Grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`).
  - **Crucial**: Keep the `bg-[rgba(3,0,0,0.72)]` container background exactly as is.
- **Loading State**:
  - Implement an `isLoading` state with a skeleton loader in `PictureSection.tsx` to prevent the grid from collapsing before images arrive.
- **Responsive Cards**:
  - Update `BeforeAfterCard.tsx` to support fluid widths (`w-full`) to fit the new grid cells.

## Impact

- Affected specs: `gallery-experience`
- Affected code:
  - `TCS-Paint/src/pages/Gallery.tsx`
  - `TCS-Paint/src/Gallery-Page/PictureSection.tsx`
  - `TCS-Paint/src/custom-components/BeforeAfterCard.tsx`
