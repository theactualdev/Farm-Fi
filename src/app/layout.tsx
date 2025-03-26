import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FarmFi - Decentralized Agriculture Marketplace",
  description:
    "FarmFi is a blockchain-powered agricultural marketplace that connects rural farmers directly with local and international buyers, ensuring fair pricing and secure transactions through smart contracts and $SUI-based escrows. The platform eliminates intermediaries, enabling instant payments for farmers and providing buyers with transparent, traceable farm produce. Leveraging Web3, DeFi, and smart contracts, FarmFi fosters a trustless, efficient global food supply chain.",

  applicationName: "FarmFi",
  generator: "Next.js",
  referrer: "origin",
  publisher: "FarmFi",
  creator: "Olayinka Ayodele | Emmanuel Adesipe",

  authors: [
    { name: "Olayinka Ayodele", url: "https://olayinka.codes" },
    { name: "Emmanuel Adesipe", url: "https://github.com/LukoOG" },
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },

  keywords: [
    "FarmFi",
    "Blockchain agriculture",
    "Decentralized agriculture",
    "Web3 farming",
    "Crypto-powered farming",
    "Agricultural supply chain",
    "Direct-to-consumer farming",
    "Smart contract farming",
    "Web3 marketplace",
    "Farm-to-table blockchain",
    "DeFi agriculture",
    "Smart contract payments",
    "Tokenized farming",
    "Crypto-powered supply chain",
    "$SUI escrow",
    "Decentralized trading",
    "On-chain transactions",
    "Web3 supply chain",
    "Blockchain-powered marketplace",
    "Digital farm assets",
    "Crypto payments for agriculture",
    "Instant crypto settlements",
    "Sui blockchain payments",
    "Stablecoin transactions",
    "Escrow payments on blockchain",
    "Tokenized agricultural assets",
    "Web3-based financial inclusion",
    "Blockchain remittances for farmers",
    "Agricultural DeFi lending",
    "Yield farming in real agriculture",
    "Smallholder farmers",
    "Rural farming economy",
    "Farm produce marketplace",
    "Digital agriculture solutions",
    "Smart farming technology",
    "Agricultural logistics",
    "Farm-to-market solutions",
    "Sustainable farming supply chain",
    "AgriTech blockchain",
    "Fair trade for farmers",
    "Decentralized supply chain",
    "Blockchain traceability",
    "Farm-to-market logistics",
    "Direct farm-to-consumer sales",
    "Agri-supply chain solutions",
    "Verified farm produce",
    "Trustless trading for farmers",
    "Agricultural freight management",
    "End-to-end farm trade",
    "Automated order fulfillment",
    "International farm trade",
    "Exporting farm goods with crypto",
    "Digital trade for farmers",
    "Global agricultural e-commerce",
    "Web3 cross-border trade",
    "Peer-to-peer farm commerce",
    "Online farm product exchange",
    "Direct farm exports",
    "Blockchain-powered food distribution",
    "Verified organic food trade",
    "Financial inclusion for farmers",
    "Web3-powered economic growth",
    "Tokenized agribusiness",
    "Next-gen farming economy",
    "Empowering rural farmers",
    "Blockchain for food security",
    "Sustainable agricultural finance",
    "Crypto farming investment",
    "Web3 impact in agriculture",
    "Digital transformation in farming",
  ],

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  openGraph: {
    type: "website",
    url: "https://farm-fi.vercel.app",
    title: "FarmFi - Decentralized Agriculture Marketplace",
    description:
      "FarmFi is a blockchain-powered agricultural marketplace that connects rural farmers directly with local and international buyers, ensuring fair pricing and secure transactions through smart contracts and $SUI-based escrows. The platform eliminates intermediaries, enabling instant payments for farmers and providing buyers with transparent, traceable farm produce. Leveraging Web3, DeFi, and smart contracts, FarmFi fosters a trustless, efficient global food supply chain.",
    siteName: "FarmFi",
    images: [
      {
        url: "https://farm-fi.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "FarmFi - Decentralized Agriculture Marketplace",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@theactualdev",
    creator: "@theactualdev",
    title: "FarmFi - Decentralized Agriculture Marketplace",
    description:
      "FarmFi is a blockchain-powered agricultural marketplace that connects rural farmers directly with local and international buyers, ensuring fair pricing and secure transactions through smart contracts and $SUI-based escrows.",
    images: [
      {
        url: "https://farm-fi.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "FarmFi - Decentralized Agriculture Marketplace",
      },
    ],
  },

  formatDetection: {
    telephone: false, 
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
