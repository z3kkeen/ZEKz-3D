import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My 3D Portfolio",
  description: "This is my portfolio, with a 3D twist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
