import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../App.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Комплекс стрижка+ борода | BeMan barbeshop в Люберцах",
  description:
    "Изучите прайс-лист на комплексные услуги в BeMan Barber Shop.Скидки на стрижку волос+бороды, пап и сын или друг+друг. Выберите идеальный комплекс для себя.",
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
