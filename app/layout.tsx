// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Escuela Helen Keller — Portal de Aplicaciones",
  description: "Acceso a las herramientas digitales de la Esc. N° 2-006 Helen Keller, Mendoza.",
  // --- AGREGÁ ESTO ---
  icons: {
    icon: "/logo-escuela.png", // El archivo en la carpeta public
    shortcut: "/logo-escuela.png",
    apple: "/logo-escuela.png", // Para que se vea bien en iPhones
  },
  // -------------------
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${dmMono.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}