import type { Metadata } from "next";
import { Space_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import JsonLd from "./components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maryan Sobchuk | Web Development | React & Next.js | Professional Websites from $150",
  description: "Професійна веб-розробка від Maryan Sobchuk. Створюємо MVP, SaaS додатки, корпоративні сайти на Next.js, React. Швидка розробка, сучасні технології. Досвід 5+ років.",
  keywords: "веб розробник, Next.js розробник, React розробник, фронтенд розробник, MVP розробка, SaaS розробка, Україна, Maryan Sobchuk, веб сайти, додатки, web developer, React developer, Next.js expert, Ukraine developer, professional websites, web development services",
  authors: [{ name: "Maryan Sobchuk" }],
  creator: "Maryan Sobchuk",
  publisher: "Maryan Sobchuk",
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
    title: "Maryan Sobchuk | Professional Web Developer",
    description: "Створюємо сучасні веб-додатки та сайти. MVP, SaaS, корпоративні рішення на Next.js та React.",
    siteName: "Maryan Sobchuk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryan Sobchuk | Web Developer",
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
        <meta name="theme-color" content="#00f5ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Maryan Sobchuk" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} ${jetBrainsMono.variable} font-sans antialiased`}
      >
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
