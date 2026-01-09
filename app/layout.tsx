import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/custom/Navbar/NavBar";
import Provider from "@/common/Provider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

// Google Fonts setup with CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

// Metadata for the app
export const metadata: Metadata = {
  title: "Car Rental - GreatStack",
  description: "Car-Rental built with Next.js",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
};

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <Toaster richColors position="bottom-right" />
        <NextTopLoader showSpinner={false} color="#0CAF60" />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
