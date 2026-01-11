import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tiquetaire - Consulta la teva targeta de transport",
  description: "Llegeix les dades de la teva targeta ATM de Tarragona, Girona o Lleida directament des del teu telèfon. Sense connexió, sense registres, sense complicacions.",
  keywords: ["ATM", "transport", "NFC", "Tarragona", "Girona", "Lleida", "targeta transport", "T-10", "títol transport"],
  authors: [{ name: "Òscar Rovira" }],
  openGraph: {
    title: "Tiquetaire - Consulta la teva targeta de transport",
    description: "Llegeix les dades de la teva targeta ATM de Tarragona, Girona o Lleida directament des del teu telèfon.",
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_ES", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiquetaire - Consulta la teva targeta de transport",
    description: "Llegeix les dades de la teva targeta ATM de Tarragona, Girona o Lleida directament des del teu telèfon.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F28C00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
