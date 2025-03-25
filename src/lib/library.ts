import { IBM_Plex_Sans, Lora, Poppins } from "next/font/google";

export const navLinks = [
 {
    name: "Trading", href: "/"
 },
 {
    name: "More On $SUI", href: "/"
 },
 {
    name: "About Us", href: "/"
 },
 {
    name: "Contact", href: "/"
 },
]

export const heroStats = [
    {
        stat: "5.5M",
        title: "Farmers Onboarded",
    },
    {
        stat: "13.5M",
        title: "Active Buyers",
    },
    {
        stat: "99%",
        title: "Percentage Growth Rate",
    },
    {
        stat: "$24.5B",
        title: "Market Value",
    },
]

export const joinCards = [
    {
        image: "/woman-vegetables.png",
        title: "Register as a Farmer",
        description: "Are you a farmer seeking to sell your agricultural produce to a global market, sign up as a farmer and kickstart your journey to maximum sales."
    },
    {
        image: "/woman-box.png",
        title: "Register as a Buyer",
        description: "Do you want to buy high quality agricultural commodities at the best prices, sign up as a buyer and enjoy transparent and easy trading."
    },
]

export const offerIcons = [
    {
        icon: "/lightning.svg",
        text: "Diverse Commodity Options"
    },
    {
        icon: "/padlock.svg",
        text: "Seamless Payment Process"
    },
    {
        icon: "/half-moon.svg",
        text: "Instant Trade Execution"
    },
    {
        icon: "/person-icon.svg",
        text: "Robust Security Measures"
    },
    {
        icon: "/frame.svg",
        text: "User-Friendly Dashboard"
    },
    {
        icon: "/folder.svg",
        text: "Transparent Pricing Display"
    },
    {
        icon: "/starlight.svg",
        text: "Comprehensive Transaction History"
    },
    {
        icon: "/heart.svg",
        text: "Regulatory Compliance Support"
    }
]

export const feedback = [
    {
        avatar: "/michael.png",
        name: "Michael Smith",
        feed: "Buying and selling hard commodities on this platform is quick and secure. I've never felt more in control of my investments!"
    },
    {
        avatar: "/aisha.png",
        name: "Aisha Umar",
        feed: "The user-friendly dashboard makes it easy to track my balance and view available commodities. Highly recommended!"
    },
    {
        avatar: "/david.png",
        name: "David Brown",
        feed: "Instant settlement for trades is a game changer. This platform has simplified my trading experience drastically!"
    },
    {
        avatar: "/sofia.png",
        name: "Sofia Garcia",
        feed: "The payment feature is innovative and allows me to buy and sell with ease. I'm impressed!"
    },
    {
        avatar: "/liam.png",
        name: "Liam O'Connor",
        feed: "I love how transparent the transaction history is. It gives me confidence in my trading decisions."
    },
    {
        avatar: "/chloe.png",
        name: "Chloe Patel",
        feed: "The encryption of user data is top-notch. I feel safe while trading on this platform."
    },
]

export const footerLinks = {
    "Key Features" : [
        {
            name: "Instant Trade Execution",
            href: "/"
        },
        {
            name: "Secure Wallet",
            href: "/"
        },
        {
            name: "User-Friendly Dashboard",
            href: "/"
        },
        {
            name: "Real-Time Price Updates",
            href: "/"
        },
        {
            name: "Comprehensive Compliance",
            href: "/"
        }
    ],
    "Available Commodities" : [
        {
            name: "Wheat",
            href: "/"
        },
        {
            name: "Barley",
            href: "/"
        },
        {
            name: "Cocoa",
            href: "/"
        },
        {
            name: "Coffee",
            href: "/"
        },
        {
            name: "Soybeans",
            href: "/"
        }
    ],
    "About Us" : [
        {
            name: "Our Mission",
            href: "/"
        },
        {
            name: "Our Vision",
            href: "/"
        },
        {
            name: "Join Us",
            href: "/"
        },
        {
            name: "Contact Support",
            href: "/"
        },
        {
            name: "Terms of Service",
            href: "/"
        }
    ],
    "Follow Us" : [
        {
            name: "Facebook",
            href: "/"
        },
        {
            name: "Twitter | X",
            href: "/"
        },
        {
            name: "LinkedIn",
            href: "/"
        },
        {
            name: "Instagram",
            href: "/"
        },
        {
            name: "Youtube",
            href: "/"
        }
    ],
}


export const ibm = IBM_Plex_Sans({
    weight: '600',
    subsets: ["latin"],
    variable: "--font-ibm",
    adjustFontFallback: false
  })
  
  export const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora"
  })
  
  export const poppins = Poppins({
    weight: ['300', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--font-poppins"
  })
  