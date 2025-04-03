import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talent Mint",
  description: "Where dev talent gets discovered and minted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
