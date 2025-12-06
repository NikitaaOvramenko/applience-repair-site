## 1. Layout Refactor
- [ ] 1.1 Create `src/components/layout/` directory.
- [ ] 1.2 Extract Navbar code from `Layout.tsx` to `src/components/layout/Navbar.tsx`.
- [ ] 1.3 Move `src/components/ContactFooter.tsx` to `src/components/layout/Footer.tsx`.
- [ ] 1.4 Update `src/components/Layout.tsx` to import and use `Navbar` and `Footer` surrounding `children`.

## 2. Home Page Refactor
- [ ] 2.1 Create `src/pages/home/components/` directory.
- [ ] 2.2 Move `src/pages/HomePage.tsx` to `src/pages/home/HomePage.tsx`.
- [ ] 2.3 Move `Hero.tsx`, `ServiceList.tsx`, `ServiceAreas.tsx` from `src/components/` to `src/pages/home/components/`.
- [ ] 2.4 Update imports in `src/pages/home/HomePage.tsx` to point to local components.
- [ ] 2.5 Update `src/App.tsx` imports for HomePage.

## 3. Request Service Page Refactor
- [ ] 3.1 Create `src/pages/request-service/components/` directory.
- [ ] 3.2 Move `src/pages/RequestServicePage.tsx` to `src/pages/request-service/RequestServicePage.tsx`.
- [ ] 3.3 Move `ServiceRequestForm` folder content (flattened or kept as is) to `src/pages/request-service/components/`.
    - Move `ServiceRequestForm.tsx` and `ServiceSelection.tsx` to `src/pages/request-service/components/`.
- [ ] 3.4 Update imports in `RequestServicePage.tsx` and form components.
- [ ] 3.5 Update `src/App.tsx` imports for RequestServicePage.

## 4. Cleanup
- [ ] 4.1 Remove empty directories in `src/components/`.
- [ ] 4.2 Verify application builds and runs correctly.

