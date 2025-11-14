import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мар'ян Собчук - Веб Розробник | React & Next.js Expert | Professional Websites from $150",
  description: "Професійна веб-розробка від Мар'яна Собчука. Створюю MVP, SaaS додатки, корпоративні сайти на Next.js, React. Швидка розробка, сучасні технології. Досвід 5+ років.",
  keywords: "веб розробник, Next.js розробник, React розробник, фронтенд розробник, MVP розробка, SaaS розробка, Україна, Мар'ян Собчук, веб сайти, додатки, web developer, React developer, Next.js expert, Ukraine developer, professional websites, web development services",
  authors: [{ name: "Мар'ян Собчук" }],
  creator: "Мар'ян Собчук",
  publisher: "Мар'ян Собчук",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://maryan-sobchuk.dev",
    title: "Мар'ян Собчук - Професійний Веб Розробник",
    description: "Створюю сучасні веб-додатки та сайти. MVP, SaaS, корпоративні рішення на Next.js та React.",
    siteName: "Мар'ян Собчук - Веб Розробник",
  },
  twitter: {
    card: "summary_large_image",
    title: "Мар'ян Собчук - Веб Розробник",
    description: "Професійна веб-розробка. Next.js, React, Tailwind CSS. Швидка розробка якісних рішень.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://maryan-sobchuk.dev",
    languages: {
      'uk': 'https://maryan-sobchuk.dev',
      'en': 'https://maryan-sobchuk.dev',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
