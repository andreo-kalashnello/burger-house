import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const anton = localFont({
  src: "../assets/fonts/anton.ttf",
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

const beVietnamPro = localFont({
  src: [
    { path: "../assets/fonts/be-vietnam-pro-400.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/be-vietnam-pro-500.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/be-vietnam-pro-600.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/be-vietnam-pro-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burger House — Big Flavor. Big Burgers. Big Mood.",
  description:
    "Fresh burgers, bold flavors and fast delivery from Burger House. Explore our featured favorites and order your next bite.",
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/icons/favicon-32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${beVietnamPro.variable}`}>
      <body className="min-h-screen">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
