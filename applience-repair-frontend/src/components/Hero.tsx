import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gray-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-90 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Appliance Repair in{" "}
          <span className="text-blue-400">Toronto & GTA</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Fast, reliable repair for Washers, Fridges, Dryers, Dishwashers, and
          Stoves.
          <br className="hidden md:block" />
          Same-day service available.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/request-service"
            className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-600 transform transition-all hover:-translate-y-1 inline-block"
          >
            Book Repair
          </Link>
          <button
            onClick={scrollToServices}
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
