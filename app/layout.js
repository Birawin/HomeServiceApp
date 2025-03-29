import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";

import "./globals.css";
import Header from "./_components/details/header";
import Hero from "./_components/details/hero";
import Home from "./page";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <div className="mx-6 md:mx-16">
          <Header>
            {children}
          </Header>
          <Hero>
            {children}
          </Hero>

        </div>
      </body>
    </html>
  );
}
