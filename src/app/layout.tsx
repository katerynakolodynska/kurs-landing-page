import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fotograf z zera - Kurs online",
  description:
    "Profesjonalny kurs fotograficzny z dostępem do materiałów online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'pl',
                includedLanguages: 'pl,uk,en',
                autoDisplay: false
              });
            }
          `}
        </Script>

        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <Script id="set-lang-cookie" strategy="afterInteractive">
          {`
            (function() {
              const saved = localStorage.getItem('googtrans');
              const cookie = document.cookie.includes('googtrans');

              if (!saved && !cookie) {
                const lang = (navigator.language || 'pl').slice(0, 2);
                if (lang === 'uk' || lang === 'en') {
                  const val = '/pl/' + lang;
                  document.cookie = 'googtrans=' + val + ';path=/;max-age=31536000';
                  localStorage.setItem('googtrans', val);
                  location.reload();
                }
              }
            })();
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 flex flex-col min-h-screen`}
      >
        <Header />

        <main className="flex-grow max-w-7xl mx-auto md:px-12 w-full">
          {children}
          <CookieBanner />
        </main>

        <Footer />
      </body>
    </html>
  );
}
