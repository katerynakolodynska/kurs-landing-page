"use client";

import { useState } from "react";
import PlanSelect from "./PlanSelect";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Basic",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      action="https://formspree.io/f/mqalgzvj"
      method="POST"
      className="max-w-xl mx-auto space-y-4 "
    >
      <input
        type="text"
        name="name"
        placeholder="Imię i nazwisko"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 "
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefon"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <PlanSelect
        value={formData.plan}
        onChange={(value) => setFormData((prev) => ({ ...prev, plan: value }))}
      />
      {/* <div className="relative">
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="VIP">VIP</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div> */}

      <button
        type="submit"
        className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-lg hover:bg-cyan-700 transition"
      >
        Zapisz się na kurs
      </button>
    </form>
  );
};

export default RegistrationForm;
