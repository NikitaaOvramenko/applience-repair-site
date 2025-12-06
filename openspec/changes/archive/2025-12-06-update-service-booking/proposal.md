# Change: Update Service Booking Form

## Why
To better accommodate customer needs, the service request form requires additional location details and the ability to book multiple services in a single request.

## What Changes
- Add "Town" and "Address" fields to the submission form (both optional).
- Update service selection to allow multiple services to be selected instead of just one.
- Configure the form submission to send all selected services as a single comma-separated string.

## Impact
- Affected specs: `service-booking`
- Affected code:
  - `applience-repair-frontend/src/components/ServiceForm/ServiceRequestForm.tsx`
  - `applience-repair-frontend/src/components/ServiceForm/ServiceSelection.tsx`

