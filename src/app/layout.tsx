import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { bold, extralight, light, medium, regular, semibold } from "./fontexport";


export const metadata: Metadata = {
  title: "CredBevy",
  description: "Best Loan Platform",
  icons: "/images/logo.svg", 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bold.variable} ${medium.variable} ${semibold.variable} ${regular.variable} ${light.variable} ${extralight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
