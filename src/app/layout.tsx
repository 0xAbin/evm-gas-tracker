import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terminal = VT323({ 
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evm Gas Tracker",
  description: "Track EVM Gas Fee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Terminal.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
