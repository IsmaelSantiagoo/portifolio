import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { useState } from 'react'
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ismael Santiago",
  description: "Meu portifólio feito em Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}