import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/icon-192.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://devs-plus.com",
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
    canonical: "https://devs-plus.com",
    languages: {
      'uk': 'https://devs-plus.com',
      'en': 'https://devs-plus.com',
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
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Мар'ян Собчук" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
