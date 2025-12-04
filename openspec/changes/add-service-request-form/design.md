## Context
Adding a dedicated page for users to submit service requests digitally. This replaces the immediate "Call Now" urgency with a more structured data collection flow for users who prefer not to call.

## Goals / Non-Goals
- **Goals**:
    - Capture structured lead data (Contact + Problem details).
    - maintain the "minimalist/technical" aesthetic.
    - Simple validation (Required fields).
- **Non-Goals**:
    - Backend integration (Form will log to console or show success message for MVP).
    - Payment processing.
    - Complex multi-step wizard (Single page form preferred for simplicity).

## Architecture Decisions
- **Routing**: Introducing `react-router-dom` is necessary now that we have a true multi-page application.
- **Form State**: Use standard React `useState` or `react-hook-form` if complexity grows (sticking to simple state for MVP).
- **Service Selection**: Reusing the icons/concepts from the landing page but making them selectable "cards" in the form.

## Risks / Trade-offs
- **Conversion**: Adding a form step might reduce immediate calls. We should keep the "Call Now" option visible in the footer or header as a secondary option.
- **Validation**: Basic regex for phone/email to prevent spam/errors.

