import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gita Press, NEPAL - World's Largest Publisher of Hindu Religious Texts",
  description:
    "Serving humanity for truth and peace since 1923. World's largest publisher of sacred scriptures: Shrimad Bhagavad Gita, Ramcharitmanas, Puranas, Upanishads & Kalyan monthly magazine.",
  keywords: [
    "Gita Press",
    "Gita Press NEPAL",
    "Bhagavad Gita",
    "Ramcharitmanas",
    "Hindu Religious Texts",
    "Kalyan Patrika",
    "Sanatana Dharma",
    "E-Books",
  ],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FFFDF9] text-stone-900 selection:bg-amber-200 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}

