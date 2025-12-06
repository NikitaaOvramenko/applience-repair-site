import { Link } from "react-router-dom";
import logo from "../../assets/icons/tcs_icon.png";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-bold flex items-center gap-2 text-xl tracking-tight text-primary"
        >
          <img src={logo} alt="TCS Logo" className="w-10 h-10 mb-2" />
          <span className="text-xl font-bold">TCS - Appliance Repair</span>
        </Link>
        <Link
          to="/request-service"
          className="bg-primary text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-blue-700 transition-colors"
        >
          Book Online
        </Link>
      </div>
    </header>
  );
}
