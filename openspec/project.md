# Project Context

## Purpose
A web application for an Appliance Repair service. The goal is to provide a platform for users to likely book repairs, view services, and contact the business.

## Tech Stack
- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript (~5.9)
- **Styling**: Tailwind CSS 4
- **Linter**: ESLint 9

## Project Conventions

### Code Style
- Use TypeScript for all new logic (.ts, .tsx).
- Functional React components.
- Utility-first CSS with Tailwind.
- ESLint is configured for linting; follow the recommended rules.

### Architecture Patterns
- Currently structured as a single-package repository (monorepo-ready structure).
- Frontend logic resides in `applience-repair-frontend/src`.
- Entry point: `src/main.tsx`.
- Main App component: `src/App.tsx`.

### Testing Strategy
- *Current Status*: No testing framework configured.
- *Future*: likely Vitest + React Testing Library (standard for Vite).

### Git Workflow
- Standard feature branching workflow recommended.
- Commits should be descriptive.

## Domain Context
- Appliance repair industry: involves services, booking appointments, contact details, and potentially service areas.

## Important Constraints
- "applience" in directory names reflects the repository naming (likely a typo for "appliance"), but refer to the business domain as "Appliance Repair".

## External Dependencies
- None currently beyond standard npm packages.
