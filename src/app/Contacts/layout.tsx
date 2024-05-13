import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../App.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Как добраться до нашего барбершопа BeMan | BeMan barbeshop в Люберцах",
  description:
    "На странице контактов BeMan Барбершоп вы найдете наш контактный телефон и местоположение на карте. Свяжитесь с нами и посетите наш барбершоп для качественных услуг стрижки и ухода за волосами.",
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
