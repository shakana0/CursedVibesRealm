import type { Metadata } from "next";
import { Playfair_Display_SC, Fira_Code } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "CursedVibesRealm",
  description: "Enter the realm. Your choices shape the curse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${firaCode.variable} antialiased bg-obsidian text-mist`}
      >
        {children}
      </body>
    </html>
  );
}
