import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import "./globals.css";

// Font configurations
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galatasaray USA Championship Gala Dinner",
  description: "Join us for an unforgettable evening celebrating Galatasaray's legendary victory at our Championship Gala Dinner in New York City.",
  keywords: "Galatasaray, USA, Championship, Gala Dinner, New York, Football, Soccer",
  authors: [{ name: "Galatasaray USA" }],
  openGraph: {
    title: "Galatasaray USA Championship Gala Dinner",
    description: "Join us for an unforgettable evening celebrating Galatasaray's legendary victory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${playfair.variable} ${inter.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
