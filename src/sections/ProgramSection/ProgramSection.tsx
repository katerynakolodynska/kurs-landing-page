"use client";

import { motion } from "framer-motion";

const modules = [
  {
    week: "Tydzień 1",
    title: "Podstawy fotografii",
    description:
      "Poznasz ustawienia aparatu, światło i kompozycję. Nauczysz się robić ostre i poprawne technicznie zdjęcia.",
  },
  {
    week: "Tydzień 2",
    title: "Portrety i praca z modelką",
    description:
      "Dowiesz się, jak ustawić osobę do zdjęcia, jak pracować ze światłem i tworzyć profesjonalne kadry.",
  },
  {
    week: "Tydzień 3",
    title: "Obróbka zdjęć",
    description:
      "Photoshop i Lightroom - nauczysz się edytować zdjęcia, usuwać niedoskonałości i nadawać im styl.",
  },
  {
    week: "Tydzień 4",
    title: "Budowanie portfolio i pierwsze zlecenia",
    description:
      "Dowiesz się jak zdobywać klientów, wycenić pracę i zbudować markę fotografa.",
  },
];

const ProgramSection = () => {
  return (
    <section id="program" className="py-7 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 pb-7">
          Program kursu
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="bg-cyan-50 p-6 rounded-xl border-2 border-blue-100  shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-6 left-6 bg-cyan-100 text-cyan-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                {module.week}
              </div>

              <div className="pt-12">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {module.title}
                </h4>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
