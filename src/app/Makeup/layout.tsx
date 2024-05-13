import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../App.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Профессиональная Косметика для ухода за волосами и бородой",
  description:
    "Исследуйте эксклюзивный ассортимент профессиональной косметики в BeMan Barber Shop. Качественные средства для ухода за волосами и бородой, подобранные нашими мастерами для вашего идеального образа.",
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
