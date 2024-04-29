import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavMobile, Sidebar } from "./components";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Style Vintage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Sidebar />
          <NavMobile />
          <div className="pb-20 lg:pb-0 lg:ps-28">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
