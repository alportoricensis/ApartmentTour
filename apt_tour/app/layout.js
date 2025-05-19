import { Fragment_Mono } from "next/font/google";
import Navbar from './components/Navbar'
import Script from "next/script";
import "./globals.css";

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment",
  subsets: ["latin"],
  weight: "400"
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
        <Script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js" strategy="beforeInteractive"/>
      </head>
      <body className={`${fragmentMono.variable} font-fragment antialiased`}>
        <div className="flex flex-col h-screen overflow-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
