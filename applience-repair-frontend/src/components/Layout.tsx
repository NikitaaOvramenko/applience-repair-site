import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="font-bold text-xl tracking-tight text-primary"
          >
            TCS - Appliance Repair
          </Link>
          <Link
            to="/request-service"
            className="bg-primary text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            Book Online
          </Link>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      {/* Footer will be added here later */}
    </div>
  );
}
