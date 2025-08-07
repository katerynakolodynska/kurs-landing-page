"use client";

import Link from "next/link";
import { Camera, CheckCircle, Users, Clock, Award, Zap } from "lucide-react";

const AboutCoursePage = () => {
  return (
    <main className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 pb-10 text-center">
        O kursie <span className="text-cyan-600">"Fotograf z Zera"</span>
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-cyan-600 pb-4">
          Jak wygląda kurs?
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Kurs trwa <strong>4 tygodnie</strong> i składa się z krótkich,
          praktycznych lekcji wideo, zadań oraz sesji feedbackowych. Uczysz się
          kiedy chcesz — wszystko dostępne 24/7 z dowolnego urządzenia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="flex items-start gap-4">
            <Camera className="text-cyan-600 w-8 h-8" />
            <p>
              <strong>20+ lekcji wideo</strong> z konkretami — bez teorii dla
              teorii.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="text-cyan-600 w-8 h-8" />
            <p>
              <strong>Elastyczny czas nauki</strong> — uczysz się w swoim
              tempie.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Users className="text-cyan-600 w-8 h-8" />
            <p>
              <strong>Grupa wsparcia</strong> — wymiana doświadczeń z innymi
              kursantami.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-cyan-600 pb-4">
          Co zawiera kurs?
        </h2>
        <ul className="list-none space-y-4 text-gray-800 text-lg">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" /> 6 godzin profesjonalnych
            nagrań
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" /> Zadania praktyczne po
            każdej lekcji
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" /> Cotygodniowe wsparcie
            mentora
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" /> Certyfikat PDF po
            zakończeniu kursu
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" /> Bonus: checklisty,
            presety i poradniki PDF
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-cyan-600 pb-4">
          Czy to kurs dla Ciebie?
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          Tak, jeśli choć jedna z tych rzeczy Cię dotyczy:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>📸 Chcesz nauczyć się fotografować od podstaw</li>
          <li>🎯 Potrzebujesz szybkich efektów, nie lat nauki</li>
          <li>
            💸 Myślisz o zarabianiu jako freelancer lub dorabianiu na zleceniach
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-cyan-600 pb-4">
          Dlaczego warto zapisać się teraz?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 text-lg">
          <div className="bg-cyan-50 p-5 rounded-xl shadow-sm flex flex-col gap-3">
            <Award className="text-cyan-600 w-8 h-8" />
            <p>Program oparty na praktyce — 0% lania wody, 100% działania.</p>
          </div>
          <div className="bg-cyan-50 p-5 rounded-xl shadow-sm flex flex-col gap-3">
            <Zap className="text-cyan-600 w-8 h-8" />
            <p>Możesz zacząć zarabiać już po 4 tygodniach nauki.</p>
          </div>
          <div className="bg-cyan-50 p-5 rounded-xl shadow-sm flex flex-col gap-3">
            <Users className="text-cyan-600 w-8 h-8" />
            <p>Dołączasz do społeczności i masz wsparcie po kursie.</p>
          </div>
        </div>
      </section>

      <div className="text-center mt-12">
        <Link
          href="/#zapisz"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition text-lg"
        >
          Zapisz się teraz i zacznij swoją przygodę z fotografią
        </Link>
      </div>
    </main>
  );
};

export default AboutCoursePage;
