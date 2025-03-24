import type { Metadata } from "next";
// import { IBM_Plex_Sans, Lora, Poppins } from "next/font/google";
import "./globals.css";

// export const ibm = IBM_Plex_Sans({
//   weight: '600',
//   subsets: ["latin"],
//   variable: "--font-ibm"
// })

// export const lora = Lora({
//   subsets: ["latin"],
//   variable: "--font-lora"
// })
// export const poppins = Poppins({
//   weight: '300',
//   subsets: ["latin"],
//   variable: "--font-poppins"
// })

export const metadata: Metadata = {
  title: "FarmFi - Decentralized Agriculture Marketplace",
  description: "FarmFi is a blockchain-powered agricultural marketplace that connects rural farmers directly with local and international buyers, ensuring fair pricing and secure transactions through smart contracts and $SUI-based escrows. The platform eliminates the need for intermediaries, allowing farmers to receive instant payments while providing buyers with transparent and traceable farm produce. By leveraging Web3 technology, decentralized finance (DeFi), and smart contracts, FarmFi enables seamless, trustless transactions that empower farmers and create a more efficient global food supply chain.",
  icons: [{sizes: "64x64 32x", type: "image/x-icon", url: "/favicon.ico", rel:"icon"}, {url: "https://olayinka.codes/image.jpg", type: "image/png", rel: "apple-touch-icon"}],
  applicationName: "theactualdev",
  authors: [{ name: "Olayinka Ayodele", url: "https://olayinka.codes" }],
  generator: "Next.js",
  keywords: [
    "Software Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Frontend Developer",
    "Developer",
    "Web Developer",
    "theactualdev",
    "Olayinka Ayodele",
    "Olayinka",
    "Ayodele",
    "Software Engineer in Nigeria",
    "Software Engineer in Lagos",
    "Software Engineer in Africa",
    "Software Engineer in the World",
    "Software Engineer in the Universe",
    "Software Engineer in the Galaxy",
    "Software Engineer in the Solar System",
    "Software Engineer in the Milky Way",
    "Software Engineer in the Andromeda Galaxy",
    "Software Engineer in the Multiverse",
    "Software Engineer in the Omniverse",
    "Software Engineer in the Metaverse",
    "Open to Work",
    "Freelancer",
    "Frontend Development Portfolio",
    "Personal Website",
    "Portfolio",
    "Software Developer",
    "Software Engineer Portfolio",
    "Software Developer Portfolio",
    "Frontend Developer Portfolio",
    "Web Developer Portfolio",
    "Frontend Engineer Portfolio",
    "Web Engineer Portfolio",
    "Javascript",
  ],
  referrer: "origin",
  creator: "Olayinka Ayodele",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    nosnippet: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': "large",
      notranslate: false,
    }
  },
  openGraph: {
    type: "website",
    url: "https://olayinka.codes",
    title: "Olayinka Ayodele | Software Engineer",
    description: "crafted with wit by theactualdev",
    siteName: "theactualdev",
    images: [
      {
        url: "https://olayinka.codes/image.jpg",
        width: 1200,
        height: 630,
        alt: "Olayinka Ayodele | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theactualdev",
    creator: "@theactualdev",
    title: "Olayinka Ayodele | Software Engineer",
    description: "crafted with wit by theactualdev",
    images: "https://olayinka.codes/image.jpg",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  }
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
