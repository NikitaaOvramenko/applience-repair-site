import { BiWater, BiFridge, BiWind, BiDish } from "react-icons/bi";
import { GiGasStove } from "react-icons/gi";
import { FaTools } from "react-icons/fa";

const services = [
  { title: "Washer Repair", icon: <BiWater /> },
  { title: "Fridge Repair", icon: <BiFridge /> },
  { title: "Dryer Repair", icon: <BiWind /> },
  { title: "Dishwasher Repair", icon: <BiDish /> },
  { title: "Stove & Oven Repair", icon: <GiGasStove /> },
  { title: "Installation", icon: <FaTools /> },
];

export default function ServiceList() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 border border-gray-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-3 text-primary">{service.icon}</div>
              <h3 className="font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
