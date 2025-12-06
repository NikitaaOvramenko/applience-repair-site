## 1. Layout Stabilization
- [ ] 1.1 Update `Gallery.tsx` to ensure the main content area grows to fill available space (`flex-grow`) and has a minimum height to prevent footer jumping.

## 2. Picture Section Refactor
- [ ] 2.1 Update `PictureSection.tsx` to remove the `bg-[rgba(3,0,0,0.72)]` container styling.
- [ ] 2.2 Implement a loading state (`isLoading`) in `PictureSection.tsx`.
- [ ] 2.3 Add a skeleton loader or spinner that displays while `isLoading` is true.
- [ ] 2.4 Ensure the grid layout is responsive (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

## 3. Verification
- [ ] 3.1 Verify footer stays at the bottom during page load.
- [ ] 3.2 Verify gallery images load without shifting the layout significantly (using placeholders).

