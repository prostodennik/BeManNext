import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Барбершоп BeMan в Люберцах м. Некрасовка: Мужксие стрижки",
  description:
    "Мы команда профессионалов с многолетним опытом, которые создали новое место для мужчин всех возрастов, где все смогут ощутить качество и сервис наших услуг.p",
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
