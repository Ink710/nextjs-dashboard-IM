import "./globals.css";
import { inter } from "./ui/fonts";


export const metadata = {
  title: "NextJS Financial Dashboard",
  description: "Starter code for Module 25 Capstone project - Financial Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

// MO-PCCO.R3 - NextJS Financial Dashboard - Starter Code