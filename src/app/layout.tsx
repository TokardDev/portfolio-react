import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FlareCursor from "@/components/FlareCursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUGEIX Adrien - Portfolio",
  description: "Personal portfolio of AUGEIX Adrien, a developer based in France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}

