import type { Metadata } from "next";
import { Audiowide, Golos_Text } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/Footer";

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const golosText = Golos_Text({
  weight: "400",
  variable: "--font-golostext",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Olivion",
  description: "Olivion Interior Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golosText.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
