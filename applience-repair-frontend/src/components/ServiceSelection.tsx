const services = [
  { id: "washer", title: "Washer Repair", icon: "🫧" },
  { id: "fridge", title: "Fridge Repair", icon: "❄️" },
  { id: "dryer", title: "Dryer Repair", icon: "🔥" },
  { id: "dishwasher", title: "Dishwasher Repair", icon: "🍽️" },
  { id: "stove", title: "Stove & Oven", icon: "🍳" },
  { id: "install", title: "Installation", icon: "🔧" },
];

interface ServiceSelectionProps {
  selectedService: string;
  onSelect: (serviceId: string) => void;
}

export const ServiceSelection = ({
  selectedService,
  onSelect,
}: ServiceSelectionProps) => {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Select Service Type *
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelect(service.id)}
            className={`
              flex flex-col items-center p-4 rounded-lg border-2 transition-all
              ${
                selectedService === service.id
                  ? "border-primary bg-blue-50 text-primary"
                  : "border-gray-200 hover:border-blue-200 bg-white text-gray-600"
              }
            `}
          >
            <span className="text-2xl mb-2">{service.icon}</span>
            <span className="text-sm font-medium">{service.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
