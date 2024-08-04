import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Armel Munyaneza",
  description: "Software Enginner",
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
        {children}
      </body>
    </html>
  );
}
