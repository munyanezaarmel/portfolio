import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Armel Munyaneza-Software Enginner",
  description: "Armel Munyaneza-Software Enginner",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-back font-poppins">
      <body className={poppins.className}>
        <Cursor />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
