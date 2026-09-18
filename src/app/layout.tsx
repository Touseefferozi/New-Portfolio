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
  title: {
    default: "Toseef Ferozi | Full-Stack Developer & Web Design Case Studies",
    template: "%s | Toseef Ferozi",
  },
  description:
    "Full-stack developer specializing in SEO-friendly websites, corporate platforms, and product UI — featuring case studies like HNYDC Global and BW Digit.",
  keywords: [
    "full stack developer",
    "web design case studies",
    "Next.js developer",
    "corporate website design",
    "SaaS website development",
    "Toseef Ferozi",
  ],
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
