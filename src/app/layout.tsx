import type { Metadata } from "next";
import { IBM_Plex_Sans, Lora, Poppins } from "next/font/google";
import "./globals.css";

const ibm = IBM_Plex_Sans({
  weight: '600',
  subsets: ["latin"],
  variable: "--font-ibm"
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
})
const poppins = Poppins({
  weight: '300',
  subsets: ["latin"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
