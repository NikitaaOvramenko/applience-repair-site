# Change: Refactor Project Structure

## Why
To align with the developer's preferred project conventions and improved scalability, we are restructuring the codebase. This includes standardized export patterns and specific directory organizations (contexts, hooks, utils, feature-based components).

## What Changes
- **File Structure**: Introducing `contexts`, `hooks`, and `utils` directories.
- **Component Exports**: Converting all `export const Component = () =>` to `export default function Component() {}`.
- **Component Organization**: Grouping related components into feature folders (e.g., `ServiceForm`).
- **Import Paths**: Updating all import references to match the new structure.

## Impact
- **Frontend**:
    - `src/components` will be reorganized.
    - All component files will be edited to change export syntax.
    - `src/App.tsx`, `src/main.tsx`, and page files will require import updates.

