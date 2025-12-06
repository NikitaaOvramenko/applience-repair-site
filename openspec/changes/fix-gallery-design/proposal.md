# Change: Fix Gallery Page Design and Loading

## Why
The current Gallery page has issues with layout shifts (Footer jumping) during image loading, and the picture container design is outdated/restrictive. The goal is to stabilize the layout and modernize the gallery presentation.

## What Changes
- **Container Design**:
  - Remove the semi-transparent container background in `PictureSection.tsx` for a cleaner look.
  - Use a responsive grid layout for images.
- **Layout Stability**:
  - Implement a loading state or placeholder for images to prevent layout shifts.
  - Ensure the page container has a minimum height to keep the footer pushed down even before content loads.
- **Image Loading**:
  - Add a loading skeleton or spinner while images are being fetched.

## Impact
- Affected specs: `gallery-experience`
- Affected code:
  - `TCS-Paint/src/Gallery-Page/PictureSection.tsx`
  - `TCS-Paint/src/pages/Gallery.tsx`

