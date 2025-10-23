import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rick & Morty App",
  description: "Rick & Morty character explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className} suppressHydrationWarning>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
