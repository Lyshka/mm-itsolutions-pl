import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";
import { MainContextProvider } from "@/context/MainContext";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITSolutions| Tworzenie stron internetowych | SMM |Reklama",
  description: "Agencja ITSolutions specjalizuje się w tworzeniu stron internetowych z wysoką konwersją oraz w promocji w mediach społecznościowych, SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <MainContextProvider>
        <body className={jost.className}>{children}</body>
      </MainContextProvider>
    </html>
  );
}
