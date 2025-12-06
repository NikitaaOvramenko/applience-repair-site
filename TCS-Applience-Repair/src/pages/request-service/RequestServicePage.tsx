import { Link } from "react-router-dom";
import ServiceRequestForm from "./components/ServiceRequestForm";

export default function RequestServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-primary font-medium mb-8 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Request Service
          </h1>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <ServiceRequestForm />
      </div>
    </div>
  );
}
