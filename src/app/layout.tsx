import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google"; // Importando mais fontes
import "./globals.css";

// Carregar as fontes do Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist", // Variável para usar a fonte
  subsets: ["latin"],
  weight: ["400", "700"], // Peso para o roboto (normal e negrito)
});

// Metadados do site
export const metadata: Metadata = {
  title: "Pamela Otéro",
  description: "Portfólio criado por Pamela com React Next, Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
