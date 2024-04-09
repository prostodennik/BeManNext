import "./globals.scss";
import Layout from "./components/Layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    <Layout title="ololo">{children}</Layout>
    //   </body>
    // </html>
  );
}
