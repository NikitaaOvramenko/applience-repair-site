# Change: Replace Icons with React Icons

## Why
The current emoji-based icons appear informal ("corny") and do not align with the desired "Technical/Professional" aesthetic. Switching to a standard SVG icon library will improve the visual quality and consistency of the application.

## What Changes
- **Dependencies**: Install `react-icons`.
- **Components**: Update `ServiceList`, `ServiceSelection`, and `ContactFooter` to use imported vector icons instead of emojis.

## Impact
- **Visuals**: Emojis will be replaced with icons from FontAwesome (FA), Material Design (MD), or similar packs within `react-icons`.
- **Code**: Import statements added to component files.

