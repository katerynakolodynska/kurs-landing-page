"use client";

import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "299 zł",
    features: [
      "Dostęp do kursu przez 4 tygodnie",
      "Materiały PDF",
      "Wsparcie mailowe",
    ],
  },
  {
    name: "Pro",
    price: "499 zł",
    features: [
      "Wszystko z Basic",
      "Dostęp do grupy na Facebooku",
      "Mini konsultacja 1:1",
    ],
    popular: true,
  },
  {
    name: "VIP",
    price: "799 zł",
    features: [
      "Wszystko z Pro",
      "Pełna konsultacja 1:1",
      "Analiza Twoich zdjęć przez instruktora",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="cennik" className="bg-white pb-7">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 pb-5">Cennik</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(({ name, price, features, popular }) => (
            <div
              key={name}
              className={`border rounded-xl shadow-md p-8 flex flex-col justify-between ${
                popular
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="pb-4">
                <h3 className="text-xl font-semibold pb-2">{name}</h3>
                <p className="text-3xl font-bold text-cyan-600 pb-4">{price}</p>
                <ul className="text-sm text-gray-700 space-y-2 ">
                  {features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#zapisz"
                className="mt-auto bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Zapisz się
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
