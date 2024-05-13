import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../App.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Команда профессиональных мастеров | BeMan Barber Shop",
  description:
    "Познакомьтесь с командой профессиональных мастеров BeMan Barber Shop. Узнайте больше о наших барберах, их опыте и уникальных навыках. Выберите своего мастера для идеальной стрижки или ухода за бородой.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
