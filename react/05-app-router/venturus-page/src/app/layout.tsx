import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Dropdown, Header } from "@/components/Header";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dias Dev Site",
  description: "Site modelo criado para estudos de Lucas Dias dev front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      
      </body>
    </html>
  );
}
