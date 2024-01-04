import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { AlertSuccess } from "@/components/Alert/AlertSuccess";
import { ScriptGeneral } from "@/components/ScriptGeneral";
import { SpeedInsights } from "@vercel/speed-insights/next"

interface IMainLayout {
  children: ReactNode;
}

export function MainLayout({ children }: IMainLayout) {
  return (
    <div className="min-h-screen max-w-full">
      <NextTopLoader />
      <AlertSuccess />
      <ScriptGeneral />
      <SpeedInsights />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
