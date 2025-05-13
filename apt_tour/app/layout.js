import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/Navbar'
import Script from "next/script";
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
  title: "3D Apartment Tour",
  description: "3D Tour of my college apartment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://aframe.io/releases/1.4.2/aframe.min.js" strategy="beforeInteractive"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
