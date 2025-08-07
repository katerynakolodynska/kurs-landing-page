"use client";

import { useEffect, useState } from "react";

const courseModules = [
  {
    title: "Tydzień 1 - Podstawy fotografii",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Tydzień 2 - Portrety i modelka",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Tydzień 3 - Obróbka zdjęć",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  {
    title: "Tydzień 4 - Portfolio i klienci",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
];

const CourseContentPage = () => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const access = url.searchParams.get("access");

    if (access === "ok") {
      setHasAccess(true);
    }
  }, []);

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <p className="text-lg text-gray-700">
          Ta strona jest dostępna tylko dla uczestników kursu.
          <br />
          Skontaktuj się z nami, jeśli masz pytania.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyan-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Twoje materiały kursowe
        </h1>

        <div className="space-y-12">
          {courseModules.map(({ title, videoUrl }, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {title}
              </h2>
              <div className="aspect-video w-full">
                <iframe
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseContentPage;
