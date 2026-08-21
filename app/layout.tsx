import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { DonationProvider } from "@/context/DonationContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationModal from "@/components/DonationModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chothani Foundation — Compassion. Service. Legacy.",
    template: "%s | Chothani Foundation",
  },
  description:
    "Chothani Foundation is a charitable family trust established in honour of Dr. Krishnakumar Chothani, devoted to rural healthcare, education, animal welfare, and community development.",
  keywords: [
    "Chothani Foundation",
    "Dr. Krishnakumar Chothani",
    "Shrirampur charitable trust",
    "rural healthcare India",
    "education trust Maharashtra",
    "paediatrician legacy trust",
  ],
  authors: [{ name: "Chothani Foundation" }],
  openGraph: {
    title: "Chothani Foundation — Compassion. Service. Legacy.",
    description:
      "A charitable family trust carrying forward 50 years of rural healthcare service by Dr. Krishnakumar Chothani.",
    url: "https://www.chothanifoundation.com",
    siteName: "Chothani Foundation",
    locale: "en_IN",
    type: "website",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <DonationProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <DonationModal />
        </DonationProvider>
      </body>
    </html>
  );
}
