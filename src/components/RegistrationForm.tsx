"use client";

import { useState } from "react";

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
      <select
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="Basic">Basic</option>
        <option value="Pro">Pro</option>
        <option value="VIP">VIP</option>
      </select>

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
