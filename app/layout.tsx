import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/LanguageContext";
import { SiteFrame } from "@/components/SiteFrame";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT для филологов",
  description:
    "Учебный портал с лекциями, практиками, презентациями и материалами по ИТ для филологов"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <LanguageProvider>
          <SiteFrame>{children}</SiteFrame>
        </LanguageProvider>
      </body>
    </html>
  );
}
