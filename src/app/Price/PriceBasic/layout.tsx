import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../App.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Услуги на мужскую стрижку | BeMan barbeshop в Люберцах",
  description:
    "Профессиональные стрижки для мужчин и детей, коррекция бороды, опасное бритье, химическая завивка и окрашивание. Предлагаем широкий спектр услуг для мужского образа.",
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
