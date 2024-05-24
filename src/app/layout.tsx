import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(()=>import("@/components/theme/ThemeProvider"), {ssr: false,});
import { Header } from "@/components/navbar/Header";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: "Highrise Construction Solutions", // a default is required when creating a template
  },
  description: "We are a construction company with over 25 years of experience in the Construction Management and General Contracting domain specializing in building skyscrapers. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring budget within set constraints.",
  twitter: {
    card: "summary_large_image"
  },
  // openGraph: {

  // }
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
        <Footer />
      </ThemeProvider>
        </body>
    </html>
  );
}
