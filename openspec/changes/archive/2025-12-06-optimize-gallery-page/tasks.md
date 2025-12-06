## 1. Layout Fixes

- [ ] 1.1 Update `Gallery.tsx` layout to use `flex-grow` on the main content div to push the footer down.

## 2. Component Updates

- [ ] 2.1 Update `BeforeAfterCard.tsx` to support fluid `width` (e.g., "w-full") and handle percentage-based slider logic.

## 3. Picture Section Logic

- [ ] 3.1 Refactor `PictureSection.tsx` to use a grid layout (`grid grid-cols-1 ...`) inside the existing `bg-[rgba(3,0,0,0.72)]` container.
- [ ] 3.2 Add `isLoading` state and a skeleton loader component to prevent layout shifts.
- [ ] 3.3 Render skeletons when loading; render grid cards when loaded.

## 4. Verification

- [ ] 4.1 Verify background color remains `rgba(3,0,0,0.72)`.
- [ ] 4.2 Verify footer does not jump during load.
- [ ] 4.3 Verify gallery is responsive.
