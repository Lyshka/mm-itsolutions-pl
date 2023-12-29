import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";
import { MainContextProvider } from "@/context/MainContext";
import { Locales } from "@/messages";
import { unstable_setRequestLocale } from "next-intl/server";

const jost = Jost({ subsets: ["latin"] });

export function generateStaticParams() {
  return Object.values(Locales).map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "ITSolutions| Tworzenie stron internetowych | SMM |Reklama",
  description:
    "Agencja ITSolutions specjalizuje się w tworzeniu stron internetowych z wysoką konwersją oraz w promocji w mediach społecznościowych, SEO",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <MainContextProvider>
        <body className={jost.className}>{children}</body>
      </MainContextProvider>
    </html>
  );
}
