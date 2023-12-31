import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { AlertSuccess } from "@/components/Alert/AlertSuccess";
import { ScriptGeneral } from "@/components/ScriptGeneral";

interface IMainLayout {
  children: ReactNode;
}

export function MainLayout({ children }: IMainLayout) {
  return (
    <div className="min-h-screen max-w-full">
      <Analytics />
      <SpeedInsights />
      <NextTopLoader />
      <AlertSuccess />
      <ScriptGeneral />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
