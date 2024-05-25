import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(()=>import("@/components/theme/ThemeProvider"), {ssr: false,});
import { Header } from "@/components/navbar/Header";
import { Footer } from "@/components/footer/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s | Highrise Construction Solutions',
    default: "Highrise Construction Solutions", // a default is required when creating a template
  },
  description: "We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.",
  twitter: {
    card: "summary_large_image"
  },
  keywords: ['Construction Management', 'Jersey City', 'Construction, Buildings and SkyScrapers', 'High Rise Construction Solutions', 'High Rise', 'Junaid Qazi', 'Construction Jersey City', 'High Rise Construction'],
  authors: [
    { name: 'Sandeep Singh Mehra', url: 'https://github.com/sandeepsinghmehra' }
  ], 
  openGraph: {
    title: 'Highrise Construction Solutions',
    description: 'We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.',
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "/favicon/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },

  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
