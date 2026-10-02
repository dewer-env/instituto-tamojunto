import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Instituto Tamo Junto",
    template: "%s | Instituto Tamo Junto",
  },
  description:
    "Desde 2016, o Instituto Tamo Junto transforma a Rota Ecológica dos Milagres através da força da comunidade. Aqui nós vivemos em comunidade e você faz parte dela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${libreBaskerville.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
