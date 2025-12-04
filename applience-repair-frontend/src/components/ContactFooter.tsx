import {
  FaClock,
  FaAward,
  FaCertificate,
  FaShieldAlt,
  FaPhone,
  FaWhatsapp,
  FaComment,
} from "react-icons/fa";

export default function ContactFooter() {
  const phoneNumber = "+16479169777";
  const cleanPhone = "+16479169777";

  const benefits = [
    { icon: <FaClock />, text: "Service within 1–2 hours" },
    { icon: <FaAward />, text: "25+ years of experience" },
    { icon: <FaCertificate />, text: "Certified technicians" },
    { icon: <FaShieldAlt />, text: "Warranty on repairs" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Trust Signals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-sm font-medium text-gray-300 flex flex-col items-center gap-2"
            >
              <span className="text-primary text-2xl">{benefit.icon}</span>
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Contact Actions */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
          <a
            href={`tel:${phoneNumber}`}
            className="w-full md:w-auto flex-1 bg-primary text-center py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <FaPhone /> Call Now
          </a>
          <a
            href={`https://wa.me/${cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex-1 bg-green-600 text-center py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href={`sms:${phoneNumber}`}
            className="w-full md:w-auto flex-1 bg-gray-700 text-center py-4 rounded-lg font-bold text-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
          >
            <FaComment /> SMS
          </a>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Appliance Repair Service. Serving Toronto
          & GTA.
        </div>
      </div>
    </footer>
  );
}
