"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Czy muszę mieć profesjonalny aparat?",
    answer:
      "Nie, wystarczy telefon lub prosty aparat. Na kursie nauczysz się jak wykorzystać każde narzędzie.",
  },
  {
    question: "Ile trwa kurs?",
    answer:
      "Kurs trwa 4 tygodnie - każdy tydzień to nowy moduł z praktyką i materiałami.",
  },
  {
    question: "Czy mogę uczyć się w swoim tempie?",
    answer:
      "Tak! Masz dostęp do materiałów przez 6 miesięcy po zakończeniu kursu.",
  },
  {
    question: "Czy dostanę certyfikat?",
    answer:
      "Tak, po ukończeniu kursu otrzymasz imienny certyfikat w formie PDF.",
  },
  {
    question: "Czy mogę zapłacić w ratach?",
    answer:
      "Tak, oferujemy płatność w 2 ratach - szczegóły znajdziesz przy zapisie.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-cyan-100 py-7 border-b border-cyan-200">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 pb-5">
          Często zadawane pytania
        </h2>

        <div className="space-y-4">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 text-left text-gray-800 font-medium flex justify-between items-center"
                >
                  <span>{question}</span>
                  <span className="text-xl">{isOpen ? "-" : "+"}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ maxHeight: 200, opacity: 1 }}
                      exit={{ maxHeight: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-sm text-gray-600">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
