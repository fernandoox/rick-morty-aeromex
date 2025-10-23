import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";

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
      <body suppressHydrationWarning>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
