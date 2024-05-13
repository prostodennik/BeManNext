import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../App.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Дополнительные услуги в барбершопе BeMan barbeshop в Люберцах",
  description:
    "Откройте новый уровень стиля с нашими доп. услугами: черные маски, камуфляж волос и бороды, депиляция воском, мужские укладки, окантовка с подбриванием в вашем распоряжении в нашем барбершопе!",
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
