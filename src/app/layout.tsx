import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import { RouteTransitionProvider } from "@/components/RouteTransitionProvider";
import { SmoothScrollProvider, SmoothScrollViewport } from "@/components/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toseef Ferozi | 3D Portfolio",
  description: "A full animated and smooth scrolling 3D portfolio built with React and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-950 text-white">
        <RouteTransitionProvider>
          <SmoothScrollProvider>
            <Navbar />
            <SmoothScrollViewport>
              <Background />
              {children}
            </SmoothScrollViewport>
            <ChatWidget />
          </SmoothScrollProvider>
        </RouteTransitionProvider>
      </body>
    </html>
  );
}
