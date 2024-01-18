import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/components/common/BaseLayout";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeMovies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
