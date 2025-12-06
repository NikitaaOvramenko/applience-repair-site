### Requirement: Service Request Location Details

The system SHALL provide input fields for Town and Address in the service request form.

#### Scenario: Optional location fields

- **WHEN** a user views the service request form
- **THEN** they see fields for Town and Address
- **AND** these fields are not marked as required

### Requirement: Multiple Service Selection

The system SHALL allow users to select multiple service types for a single request.

#### Scenario: Selecting multiple services

- **WHEN** a user clicks multiple service options
- **THEN** all clicked options are visually selected
- **AND** the form considers all of them valid for submission

### Requirement: Service Submission Format

The system SHALL submit selected services as a single comma-separated string.

#### Scenario: Submission payload

- **WHEN** the user submits the form with "Washer Repair" and "Fridge Repair" selected
- **THEN** the service field in the payload is "washer, fridge" (or equivalent IDs joined by commas)
