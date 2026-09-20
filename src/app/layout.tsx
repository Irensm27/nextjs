import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cars API",
  description: "Cars application built with Next.js",
};


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-white antialiased`}
      >

      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
              href="/"
              className="text-xl font-bold"
          >
            Cars API
          </Link>

          <nav className="flex items-center gap-6">

            <Link
                href="/cars"
                className="text-zinc-400 transition hover:text-white"
            >
              All cars
            </Link>

            <Link
                href="/cars/create"
                className="rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:bg-zinc-200"
            >
              + Add car
            </Link>

          </nav>

        </div>
      </header>

      {children}

      </body>
      </html>
  );
}
