import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Muditha Sri | Executive Creative Direction & Digital Marketing",
  description: "Senior Graphic Designer & Digital Marketing Executive in the UAE. Fusing elite corporate identity frameworks with high-conversion web development.",
icons: {
    icon:'/favicon.ico',
    shortcut: '/icon.png',
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#FAF9F6]`}>
        {/* Persisted Navigation Bar Component */}
        <Navbar />
        
        {/* Main Application Page Content Injector */}
        {children}
        
        {/* Persisted Footer Component */}
        <Footer />
      </body>
    </html>
  );
}