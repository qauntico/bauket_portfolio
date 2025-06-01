import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio | Bauket Fabrice", // Application Name
  description: "A portfolio showcasing Bauket Fabrice work, skills, and projects.",
  keywords: ["portfolio", "web developer", "projects", "skills", "contact"],
  authors: [{ name: "Bauket Fabrice" }],
  icons: {
    icon: "/logo.png", // Path relative to the /public folder
    shortcut: "/logo.png", // Optional: for Apple and other shortcuts
    apple: "/logo.png", // Optional: for iOS home screen icons
  },
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
