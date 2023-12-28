import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NexCart - Online Shopping for [PC Components, Phones, Laptops]",
  description:
    "Explore a wide range of [Great Product] at NexCart, your go-to online shopping marketplace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
