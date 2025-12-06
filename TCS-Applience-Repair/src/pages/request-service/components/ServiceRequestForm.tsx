import { useState, type FormEvent } from "react";

import ServiceSelection from "./ServiceSelection";

import axios from "axios";

interface FormData {
  name: string;

  lastname: string;

  email: string;

  phone: string;

  street: string;

  town: string;

  postal_code: string;

  description: string;

  selectedServices: string[];

  workType: string;

  country: string;
}

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",

    lastname: "",

    email: "",

    phone: "",

    street: "",

    town: "",

    postal_code: "",

    description: "",

    selectedServices: [],

    workType: "Appliance Repair",

    country: "CANADA",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    const payload = {
      ...formData,

      service: formData.selectedServices.join(", "),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/email/form`,

        payload
      );

      console.log("Form Submitted:", payload);

      console.log("Response:", response);

      setIsSuccess(true);

      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData((prev) => {
      const services = prev.selectedServices;

      if (services.includes(serviceId)) {
        return {
          ...prev,

          selectedServices: services.filter((id) => id !== serviceId),
        };
      } else {
        return { ...prev, selectedServices: [...services, serviceId] };
      }
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>

        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Request Received!
        </h3>

        <p className="text-green-700">
          Thank you, {formData.name}. We have received your request and will
          contact you shortly at {formData.phone}.
        </p>

        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-green-700 font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Repair</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name
          </label>

          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address *
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number *
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="(555) 555-5555"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="town"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Town
          </label>

          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="City/Town"
          />
        </div>

        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>

          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Street Address"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="postal_code"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Postal Code
        </label>

        <input
          type="text"
          id="postal_code"
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="M5V 2T6"
        />
      </div>

      <ServiceSelection
        selectedServices={formData.selectedServices}
        onSelect={handleServiceSelect}
      />

      <div className="mb-8">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description of Issue
        </label>

        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Please describe the problem..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || formData.selectedServices.length === 0}
        className={`

          w-full py-4 rounded-lg font-bold text-lg text-white shadow-md transition-all

          ${
            isSubmitting || formData.selectedServices.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-blue-600 hover:-translate-y-1"
          }

        `}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
