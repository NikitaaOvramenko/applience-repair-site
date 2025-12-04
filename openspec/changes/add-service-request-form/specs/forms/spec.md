## ADDED Requirements

### Requirement: Service Request Page

The system SHALL provide a dedicated page for users to submit repair requests.

#### Scenario: Form Fields

- **WHEN** a user visits the service request page
- **THEN** they see a form with the following fields:
  - First Name
  - Last Name
  - Email (Required)
  - Phone Number (Required)
  - Postal Code
  - Description of Issue

#### Scenario: Service Selection

- **WHEN** filling out the form
- **THEN** the user must select a service type (Washer, Fridge, Dryer, etc.) presented as selectable cards.

#### Scenario: Form Submission

- **WHEN** the user submits valid data
- **THEN** a success message is displayed (mock submission).

## MODIFIED Requirements

### Requirement: Navigation and CTA

- FROM: `### Requirement: Landing Page Structure`
- TO: `### Requirement: Landing Page Structure`
  (Note: Updating the specific Hero scenario)

#### Scenario: Hero CTA

- **WHEN** a user visits the homepage
- **THEN** the primary call-to-action is "Book Repair" which navigates to the Service Request page.
