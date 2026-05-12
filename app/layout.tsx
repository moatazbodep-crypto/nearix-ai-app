import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nearix - Luxury Intelligence",
  description: "Global market hunter & price predictor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#050505" }}>
        {children}
      </body>
    </html>
  );
}
