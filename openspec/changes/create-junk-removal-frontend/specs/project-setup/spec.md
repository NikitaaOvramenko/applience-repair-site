## ADDED Requirements
### Requirement: New Project Initialization
The system SHALL include a new frontend project named `TCS-Junk-Removal`.

#### Scenario: Project Existence
- **WHEN** the repository is checked out
- **THEN** a `TCS-Junk-Removal` directory exists with a valid `package.json`

### Requirement: Project Structure Alignment
The new project SHALL follow the directory structure conventions of `TCS-Paint`.

#### Scenario: Folder check
- **WHEN** inspecting `TCS-Junk-Removal/src`
- **THEN** it contains `pages`, `custom-components`, and `App.tsx` at the top level (or matching the reference structure)

### Requirement: Styling Consistency
The visual design of the new project SHALL resemble `applience-repair-frontend`.

#### Scenario: Visual check
- **WHEN** the application is run
- **THEN** the color palette and layout style match the appliance repair site (clean, service-oriented) rather than the dark/bold style of the paint site

