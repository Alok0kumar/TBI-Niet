"use client";

import SplashScreen from "@/components/layout/SplashScreen";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <SplashScreen>
      {children}
    </SplashScreen>
  );
}
