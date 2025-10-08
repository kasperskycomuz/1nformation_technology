import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ИТ для филологов",
  description:
    "Учебный портал с лекциями, практиками, презентациями и материалами по ИТ для филологов"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
