import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../App.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Акции на мужские стрижки в BeMan Барбершоп: Специальные предложения",
  description:
    "Узнайте о текущих акциях и скидках на мужские стрижки в BeMan Барбершоп. Получите высококачественное обслуживание по выгодной цене.",
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
