import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nablaFont = localFont({
  src: "./fonts/Nabla-Regular-VariableFont_EDPT,EHLT.ttf",
  variable: "--font-nabla",
  weight: "100 900",
});

const chakraFont = localFont({
  src: "./fonts/ChakraPetch-Regular.ttf",
  variable: "--font-chakra",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZEKz 3D",
  description: "This is a website, with a 3D twist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nablaFont.variable} ${chakraFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
