import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../App.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Блог нашей команды BeMan Barber Shop | Советы и Тренды",
  description:
    "Читайте наш блог и оставайтесь в курсе последних тенденций и лучших советов по уходу за волосами и бородой от экспертов BeMan Barber Shop. Узнайте, как поддерживать ваш стиль на высоте.",
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
