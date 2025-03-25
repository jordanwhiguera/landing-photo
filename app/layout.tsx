import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Home Media: Real Estate Photography in Port St Lucie, FL.",
  description:
    "Open Home Media provides premier real estate photography, videography, drone, 3D virtual tours, and floor plans at an affordable price. We service Port St Lucie, Fort Pierce, Vero Beach, Stuart, Palm City, Jensen Beach, Hobe Sound, and more! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
