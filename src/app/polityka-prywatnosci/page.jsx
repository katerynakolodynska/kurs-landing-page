"use client";

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Polityka prywatności</h1>

      <p className="mb-4">
        Niniejsza polityka prywatności opisuje, w jaki sposób przetwarzamy Twoje
        dane osobowe na stronie kursu online "Fotograf z Zera" dostępnej pod
        adresem: <strong>[wstaw adres strony]</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Administrator danych osobowych
      </h2>
      <p className="mb-4">
        Administratorem danych osobowych jest [Imię i nazwisko / nazwa firmy], z
        siedzibą w [adres], NIP: [NIP], e-mail: [adres e-mail kontaktowy].
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Cele i podstawy prawne przetwarzania
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Realizacja zapisów na kurs - art. 6 ust. 1 lit. b RODO</li>
        <li>
          Odpowiedzi na zapytania z formularza kontaktowego - art. 6 ust. 1 lit.
          f RODO
        </li>
        <li>
          Wysyłka materiałów marketingowych (newsletter) - art. 6 ust. 1 lit. a
          RODO
        </li>
        <li>
          Analiza ruchu na stronie (Google Analytics) - art. 6 ust. 1 lit. f
          RODO
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Odbiorcy danych</h2>
      <p className="mb-4">
        Twoje dane mogą być przekazywane podmiotom trzecim, takim jak:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Formspree / EmailJS - w celu obsługi formularzy</li>
        <li>Google - w celu analizy statystyk (Google Analytics)</li>
        <li>Dostawcy hostingu (np. Vercel)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Czas przechowywania danych
      </h2>
      <p className="mb-4">
        Dane osobowe przechowujemy przez czas niezbędny do realizacji celu,
        maksymalnie przez 5 lat od ostatniego kontaktu lub do czasu wycofania
        zgody.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Prawa użytkownika</h2>
      <p className="mb-4">Masz prawo do:</p>
      <ul className="list-disc list-inside mb-4">
        <li>dostępu do swoich danych</li>
        <li>sprostowania danych</li>
        <li>usunięcia danych ("prawo do bycia zapomnianym")</li>
        <li>ograniczenia przetwarzania</li>
        <li>sprzeciwu wobec przetwarzania</li>
        <li>przenoszenia danych</li>
        <li>wniesienia skargi do Prezesa UODO</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Pliki cookies</h2>
      <p className="mb-4">
        Strona wykorzystuje pliki cookies w celu zapewnienia jej prawidłowego
        działania, analizy ruchu oraz działań marketingowych. Korzystając ze
        strony, wyrażasz zgodę na ich używanie.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. Zmiany polityki prywatności
      </h2>
      <p className="mb-4">
        Zastrzegamy sobie prawo do zmiany niniejszej polityki prywatności.
        Aktualna wersja będzie zawsze dostępna na stronie.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Ostatnia aktualizacja: sierpień 2025
      </p>
    </main>
  );
};

export default PrivacyPolicyPage;
