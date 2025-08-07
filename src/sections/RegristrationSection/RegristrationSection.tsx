import RegistrationForm from "@/components/RegistrationForm";

const RegistrationSection = () => {
  return (
    <section id="zapisz" className="bg-white py-7 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 pb-4">
          Zapisz się na kurs
        </h2>
        <p className="text-gray-600 pb-8">
          Wypełnij formularz, aby zarezerwować miejsce na kursie. Odezwiemy się
          do Ciebie w ciągu 24 godzin.
        </p>
        <RegistrationForm />
      </div>
    </section>
  );
};

export default RegistrationSection;
