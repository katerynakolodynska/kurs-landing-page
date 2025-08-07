"use client";

import Image from "next/image";
import instructorImg from "../../../public/images/author-portrait.jpg";
import { Camera, Award, Users, School } from "lucide-react";

const AboutInstructorSection = () => {
  return (
    <section id="about" className="bg-cyan-100 py-60 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={instructorImg}
            alt="Instruktor kursu"
            width={400}
            height={400}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 pb-4">
            Poznaj swojego instruktora
          </h2>

          <h3 className="text-xl font-semibold text-cyan-600 pb-2">
            Michał Nowak
          </h3>

          <p className="text-gray-700 leading-relaxed pb-4">
            Fotograf z ponad <strong>10-letnim doświadczeniem</strong>,
            specjalizujący się w portretach, fotografii studyjnej oraz
            komercyjnej. Współpracował z markami odzieżowymi, magazynami i
            agencjami modelek.
          </p>

          <p className="text-gray-700 leading-relaxed pb-6">
            Prowadził warsztaty w całej Polsce i online. Jego celem jest
            pokazanie, że profesjonalna fotografia jest dostępna dla każdego –
            bez względu na sprzęt czy doświadczenie.
          </p>

          <div className="grid grid-cols-2 gap-5 text-sm text-gray-800">
            <div className="flex items-center gap-3">
              <Camera className="text-cyan-600 w-6 h-6" />
              <span>
                <strong>200+</strong> sesji komercyjnych
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-cyan-600 w-6 h-6" />
              <span>
                <strong>1000+</strong> przeszkolonych kursantów
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-cyan-600 w-6 h-6" />
              <span>
                Publikacje w <strong>magazynach branżowych</strong>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <School className="text-cyan-600 w-6 h-6" />
              <span>
                <strong>7 lat</strong> doświadczenia jako wykładowca
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructorSection;
