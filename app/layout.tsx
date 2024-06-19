import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ponte las Pilas",
  description: "Una app donde puedes usar AI a que te ayude con tus apuntes.",
  //added the favicons here
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:dark",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme:light",
        url: "/logog.svg",
        href: "/logog.svg",
      },
    ],
  },
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
