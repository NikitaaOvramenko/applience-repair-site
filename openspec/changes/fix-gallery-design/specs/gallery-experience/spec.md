## ADDED Requirements
### Requirement: Stable Page Layout
The page layout SHALL NOT shift significantly during content loading.

#### Scenario: Initial Load
- **WHEN** the gallery page is opened
- **THEN** the footer remains at the bottom of the viewport or below the fold
- **AND** it does not jump up and down as images load

### Requirement: Image Loading State
The gallery SHALL display a loading indicator while images are being fetched.

#### Scenario: Fetching Images
- **WHEN** the gallery data is being retrieved
- **THEN** a loading skeleton or spinner is shown in place of the images

