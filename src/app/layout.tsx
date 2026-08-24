import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Emmanuel Dada | Frontend Developer & Software Engineer",
    template: "%s | Emmanuel Dada",
  },

  description:
    "Portfolio of Emmanuel Dada, a frontend developer and software engineer specializing in React, Next.js, modern web applications, and cybersecurity.",

  openGraph: {
    title: "Emmanuel Dada | Frontend Developer & Software Engineer",
    description:
      "Explore Emmanuel Dada's portfolio featuring modern web applications, frontend development, software engineering, and cybersecurity projects.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Dada | Frontend Developer & Software Engineer",
    description:
      "Frontend developer and software engineer building modern, scalable web applications with React, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
