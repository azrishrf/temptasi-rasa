import AOSProvider from "@/components/AOSProvider";
import type { Metadata } from "next";
import { Dancing_Script, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Temptasi Rasa - Sajian Menggoda, Rasa Membekas",
  description:
    "Nikmati hidangan tradisional & moden yang menyelerakan di Temptasi Rasa. Sejak 2020, kami menyajikan makanan berkualiti dengan penuh kasih sayang.",
  keywords: "restoran malaysia, makanan tradisional, nasi lemak, kuala lumpur",
  authors: [{ name: "Temptasi Rasa" }],
  openGraph: {
    title: "Temptasi Rasa - Sajian Menggoda, Rasa Membekas",
    description: "Nikmati hidangan tradisional & moden yang menyelerakan di Temptasi Rasa",
    type: "website",
    locale: "ms_MY",
    images: [
      {
        url: "/logo.png",
        width: 640,
        height: 300,
        alt: "Temptasi Rasa Logo",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body
        className={`${outfit.variable} ${playfair.variable} ${dancing.variable} font-sans antialiased`}
      >
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
