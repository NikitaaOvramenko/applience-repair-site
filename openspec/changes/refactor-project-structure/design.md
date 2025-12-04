## Context
Aligning the project structure with the "E-Commerce-Drug-Store" reference provided by the user.

## Goals
- **Standardized Exports**: `export default function` is the mandated style.
- **Structure**:
    - `src/components/` (Feature grouped)
    - `src/pages/`
    - `src/contexts/`
    - `src/hooks/`
    - `src/utils/`

## Decisions
- **Feature Grouping**:
    - `ServiceRequestForm` and `ServiceSelection` are tightly coupled -> Group into `src/components/ServiceForm/`.
    - `Hero`, `ServiceList`, `ServiceAreas` are currently generic landing page components. Will keep them at `src/components/` root for now unless "Landing" folder is preferred, but user example showed `Auth` (a feature). I will keep generic UI components at root or group them if they become numerous. Given the small size, `ServiceForm` is the most obvious candidate for grouping.
- **Export Style**:
    - Switching to named functions (`function Name() {}`) aids in debugging (better stack traces) and matches the user's preference.
    - Default exports will be used for components.

## Risks
- **Refactoring churn**: High chance of breaking imports. Must verify `npm run build` frequently.

