import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "THN Stories",
  description: "Generated by Piotr Golon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Toaster />
          <Header />
          <main className="px-3 lg:px-14">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
