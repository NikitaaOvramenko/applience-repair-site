## 1. Directory Setup
- [x] 1.1 Create `src/contexts`, `src/hooks`, and `src/utils` directories.
- [x] 1.2 Create `src/components/ServiceForm` directory.
- [x] 1.3 Create `src/components/Layout` directory (optional, or keep Layout at root of components if generic).

## 2. Component Refactoring (Exports & Moves)
- [x] 2.1 Refactor `Hero.tsx`:
    - Move to `export default function Hero() {}`.
    - Update imports in `HomePage.tsx`.
- [x] 2.2 Refactor `ServiceList.tsx` -> `export default function ServiceList() {}`.
- [x] 2.3 Refactor `ServiceAreas.tsx` -> `export default function ServiceAreas() {}`.
- [x] 2.4 Refactor `ContactFooter.tsx` -> `export default function ContactFooter() {}`.
- [x] 2.5 Refactor `Layout.tsx` -> `export default function Layout() {}`.
- [x] 2.6 Move `ServiceRequestForm.tsx` and `ServiceSelection.tsx` to `src/components/ServiceForm/`.
- [x] 2.7 Refactor `ServiceRequestForm.tsx` & `ServiceSelection.tsx` to `export default function`.

## 3. Page Refactoring
- [x] 3.1 Refactor `HomePage.tsx` -> `export default function HomePage() {}`.
- [x] 3.2 Refactor `RequestServicePage.tsx` -> `export default function RequestServicePage() {}`.

## 4. Verification
- [x] 4.1 Fix all broken imports resulting from moves and default exports.
- [x] 4.2 Verify application builds (`npm run build`).
- [x] 4.3 Verify application runs without runtime errors.
