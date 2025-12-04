export default function ContactFooter() {
  const phoneNumber = "+15555555555";
  const cleanPhone = "15555555555";

  const benefits = [
    "⏱️ Service within 1–2 hours",
    "🏆 25+ years of experience",
    "📜 Certified technicians",
    "🛡️ Warranty on repairs",
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Trust Signals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-sm font-medium text-gray-300">
              {benefit}
            </div>
          ))}
        </div>

        {/* Contact Actions */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
          <a
            href={`tel:${phoneNumber}`}
            className="w-full md:w-auto flex-1 bg-primary text-center py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
          >
            📞 Call Now
          </a>
          <a
            href={`https://wa.me/${cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex-1 bg-green-600 text-center py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-colors"
          >
            💬 WhatsApp
          </a>
          <a
            href={`sms:${phoneNumber}`}
            className="w-full md:w-auto flex-1 bg-gray-700 text-center py-4 rounded-lg font-bold text-lg hover:bg-gray-600 transition-colors"
          >
            📱 SMS
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
