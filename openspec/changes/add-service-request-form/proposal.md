# Change: Add Service Request Form

## Why
The business wants to offer a digital alternative to phone calls for booking repairs. A dedicated "Service Request" form allows users to provide structured details about their issue, improving lead qualification and allowing customers to book outside of business hours.

## What Changes
- **New Capability**: `service-request-form`
- **New Page**: `RequestServicePage` for form submission.
- **Navigation Update**: Replace the primary "Call Now" CTA in the Hero section with a "Book Repair" link to the new page.
- **Form Implementation**: A multi-field form including Name, Contact Info, Postal Code, Service Type, and Description.

## Impact
- **Frontend**:
    - New `ServiceRequestForm` component.
    - New `RequestServicePage` route.
    - Updates to `Hero` and `Layout` components to change CTA behavior.
    - Routing configuration updates (requires React Router).

