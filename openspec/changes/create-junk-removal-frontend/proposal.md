# Change: Create TCS Junk Removal Frontend

## Why
We need a new frontend project for the "TCS Junk Removal" service. It should share the modern tech stack and project structure of `TCS-Paint` but adopt the styling and branding conventions of `applience-repair-frontend` (likely cleaner, service-oriented look) as requested.

## What Changes
- **New Project Initialization**:
  - Create a new folder `TCS-Junk-Removal` at the root.
  - Initialize a Vite + React + TypeScript project.
  - Configure Tailwind CSS.
- **Structure**:
  - Mirror the directory structure of `TCS-Paint/src` (e.g., `pages/`, `custom-components/`, `NavBar.tsx`, `App.tsx`).
  - Copy `.env` configuration pattern from `TCS-Paint`.
- **Style & Content**:
  - Implement the base layout (NavBar, Footer) with a style similar to `applience-repair-frontend` (e.g., blue/white color scheme, clean typography) but adapted for Junk Removal content.
  - Create placeholder pages: Home, Gallery, About, Form.

## Impact
- Affected specs: `project-setup`
- New project: `TCS-Junk-Removal`

