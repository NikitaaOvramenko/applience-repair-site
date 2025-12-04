## 1. Setup & Dependencies
- [x] 1.1 Install `react-router-dom` for multi-page navigation.
- [x] 1.2 Configure `main.tsx` and `App.tsx` with `BrowserRouter` and `Routes`.

## 2. Component Implementation
- [x] 2.1 Create `ServiceSelection` component (Card style selection for Washer, Dryer, etc.).
- [x] 2.2 Create `ServiceRequestForm` component:
    - Fields: Name, Last Name, Email (req), Phone (req), Postal Code.
    - Integration with `ServiceSelection`.
    - Description text area.
    - Submit button.

## 3. Page Implementation
- [x] 3.1 Create `RequestServicePage` wrapping the form component.
- [x] 3.2 Add back navigation to Home.

## 4. Integration
- [x] 4.1 Update `Hero` component: Change "Call Now" button to "Book Repair" Link (pointing to `/request-service`).
- [x] 4.2 Update `Layout` header CTA: Change "Call Now" to "Book Online" or similar.

## 5. Validation & Testing
- [x] 5.1 Verify form validation (Email and Phone required).
- [x] 5.2 Verify navigation flow (Home -> Request Page -> Back).
