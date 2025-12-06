### Requirement: Modular Page Structure

The codebase SHALL organize page-specific logic and components into dedicated directories within `src/pages/<page-name>/`.

#### Scenario: Developer navigation

- **WHEN** a developer looks for Home page components
- **THEN** they find them in `src/pages/home/components/`
- **AND** they are not mixed with global components

### Requirement: Explicit Layout Components

The application SHALL use distinct `Navbar` and `Footer` components integrated into the main Layout.

#### Scenario: Layout composition

- **WHEN** the application renders
- **THEN** the `Navbar` is rendered at the top
- **AND** the `Footer` is rendered at the bottom
- **AND** the page content is rendered between them
