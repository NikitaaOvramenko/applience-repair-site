### Requirement: Stable Loading Layout
The gallery page SHALL maintain its structural height during data loading to prevent layout shifts.

#### Scenario: Loading Images
- **WHEN** the gallery is fetching images
- **THEN** a skeleton grid is displayed
- **AND** the footer remains pushed to the bottom of the page

### Requirement: Preserved Styling
The gallery container SHALL maintain its specific semi-transparent dark background.

#### Scenario: Visual Check
- **WHEN** the gallery loads
- **THEN** the picture container has the background color `rgba(3,0,0,0.72)`

### Requirement: Responsive Grid
Images SHALL be displayed in a responsive grid that fills the available container width.

#### Scenario: Desktop View
- **WHEN** viewed on desktop
- **THEN** images are arranged in a 3-column grid
