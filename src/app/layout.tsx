import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
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
    <html lang="pl" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/logo.svg" sizes="32x32" />
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
