import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { FiLogIn } from "react-icons/fi";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "cv.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
