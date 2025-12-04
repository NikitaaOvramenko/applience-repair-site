## Context
Improving the visual fidelity of the "Digital Postcard" by removing emojis.

## Goals
- **Professionalism**: Vector icons scale better and look more serious than emojis.
- **Consistency**: Use a unified style (or compatible styles) from `react-icons`.

## Design Decisions
- **Library**: `react-icons` provides access to multiple libraries.
    - **Appliances**: Specific appliances are hard to find in one set. We will mix compatible outlined/filled icons from `fa` (FontAwesome), `md` (Material), `tb` (Tabler), or `gi` (GameIcons - *carefully selected*) if needed.
    - **Mappings**:
        - Washer: `BiWater` or `MdLocalLaundryService`
        - Fridge: `TbFridge` (Tabler has good appliance icons) or `BiFridge`
        - Dryer: `MdLocalFireDepartment` (Heat) or `BiWind`
        - Dishwasher: `BiDish` or `MdWash`
        - Stove: `TbToolsKitchen2` or `GiGasStove` (if clean)
        - Install: `FaTools`
- **Sizing**: Icons should be sized similarly to the text (`text-4xl` or `text-2xl` depending on context).

## Risks
- **Bundle Size**: `react-icons` uses tree-shaking, so impact should be minimal, but we are adding a dependency.

