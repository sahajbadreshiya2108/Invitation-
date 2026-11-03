import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Playfair_Display, Great_Vibes, Montserrat, Cinzel } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daksh & Isha | Royal Wedding Invitation",
  description: "Join us in celebrating the wedding of Daksh and Isha. 1 & 2 December 2026, ATM Farm House, Gujarat.",
  openGraph: {
    title: "Daksh & Isha Wedding Invitation",
    description: "You are cordially invited to celebrate the royal wedding of Daksh & Isha.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#590D22",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} ${montserrat.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#1c080e] text-[#F8F0E3] overflow-x-hidden selection:bg-[#C5A059] selection:text-[#38251F]">
        {children}
      </body>
    </html>
  );
}
