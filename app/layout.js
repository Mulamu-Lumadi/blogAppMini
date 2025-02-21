import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tailwind CSS App",
  description: "Learning how to use CSS with tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
