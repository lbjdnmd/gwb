import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "快点生活 - 让生活触手可及",
  description: "快点生活，您身边的生活服务平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
