"use client";
import "./globals.css";
import { Sora } from "next/font/google";

import Navbar from "@/components/ui/Navbar";
import TopLeftImage from "@/components/TopLeftImage";
import Header from "@/components/Header";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import Transition from "@/components/Transition";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${sora.className} bg-secondary overflow-hidden leading-relaxed`}
      >
        <AnimatePresence mode="wait">
          <motion.div key={pathname} className="h-full">
            <Transition />
            <div
              className={`w-full h-screen overflow-hidden bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
            >
              <TopLeftImage />
              <Navbar />
              <Header />
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
