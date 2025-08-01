import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
