import { IBM_Plex_Sans, Lora, Poppins } from "next/font/google";

export const navLinks = [
  {
    name: "Trading",
    href: "/",
  },
  {
    name: "More On $SUI",
    href: "/",
  },
  {
    name: "About Us",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
];

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
];

export const joinCards = [
  {
    image: "/woman-vegetables.png",
    title: "Register as a Farmer",
    description:
      "Are you a farmer seeking to sell your agricultural produce to a global market, sign up as a farmer and kickstart your journey to maximum sales.",
  },
  {
    image: "/woman-box.png",
    title: "Register as a Buyer",
    description:
      "Do you want to buy high quality agricultural commodities at the best prices, sign up as a buyer and enjoy transparent and easy trading.",
  },
];

export const offerIcons = [
  {
    icon: "/lightning.svg",
    text: "Diverse Commodity Options",
  },
  {
    icon: "/padlock.svg",
    text: "Seamless Payment Process",
  },
  {
    icon: "/half-moon.svg",
    text: "Instant Trade Execution",
  },
  {
    icon: "/person-icon.svg",
    text: "Robust Security Measures",
  },
  {
    icon: "/frame.svg",
    text: "User-Friendly Dashboard",
  },
  {
    icon: "/folder.svg",
    text: "Transparent Pricing Display",
  },
  {
    icon: "/starlight.svg",
    text: "Comprehensive Transaction History",
  },
  {
    icon: "/heart.svg",
    text: "Regulatory Compliance Support",
  },
];

export const feedback = [
  {
    avatar: "/michael.png",
    name: "Michael Smith",
    feed: "Buying and selling hard commodities on this platform is quick and secure. I've never felt more in control of my investments!",
  },
  {
    avatar: "/aisha.png",
    name: "Aisha Umar",
    feed: "The user-friendly dashboard makes it easy to track my balance and view available commodities. Highly recommended!",
  },
  {
    avatar: "/david.png",
    name: "David Brown",
    feed: "Instant settlement for trades is a game changer. This platform has simplified my trading experience drastically!",
  },
  {
    avatar: "/sofia.png",
    name: "Sofia Garcia",
    feed: "The payment feature is innovative and allows me to buy and sell with ease. I'm impressed!",
  },
  {
    avatar: "/liam.png",
    name: "Liam O'Connor",
    feed: "I love how transparent the transaction history is. It gives me confidence in my trading decisions.",
  },
  {
    avatar: "/chloe.png",
    name: "Chloe Patel",
    feed: "The encryption of user data is top-notch. I feel safe while trading on this platform.",
  },
];

export const footerLinks = {
  "Key Features": [
    {
      name: "Instant Trade Execution",
      href: "/",
    },
    {
      name: "Secure Wallet",
      href: "/",
    },
    {
      name: "User-Friendly Dashboard",
      href: "/",
    },
    {
      name: "Real-Time Price Updates",
      href: "/",
    },
    {
      name: "Comprehensive Compliance",
      href: "/",
    },
  ],
  "Available Commodities": [
    {
      name: "Wheat",
      href: "/",
    },
    {
      name: "Barley",
      href: "/",
    },
    {
      name: "Cocoa",
      href: "/",
    },
    {
      name: "Coffee",
      href: "/",
    },
    {
      name: "Soybeans",
      href: "/",
    },
  ],
  "About Us": [
    {
      name: "Our Mission",
      href: "/",
    },
    {
      name: "Our Vision",
      href: "/",
    },
    {
      name: "Join Us",
      href: "/",
    },
    {
      name: "Contact Support",
      href: "/",
    },
    {
      name: "Terms of Service",
      href: "/",
    },
  ],
  "Follow Us": [
    {
      name: "Facebook",
      href: "/",
    },
    {
      name: "Twitter | X",
      href: "/",
    },
    {
      name: "LinkedIn",
      href: "/",
    },
    {
      name: "Instagram",
      href: "/",
    },
    {
      name: "Youtube",
      href: "/",
    },
  ],
};

export const ibm = IBM_Plex_Sans({
  weight: ["600", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ibm",
  adjustFontFallback: false,
});

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


export const dashboardLinks = [
    {
        icon: "/market-icon.svg",
        title: "Marketplace",
        url: "/marketplace"
    },
    {
        icon: "/person.svg",
        title: "User Profile",
        url: "/profile"
    },
    {
        icon: "/cart-icon.svg",
        title: "Cart",
        url: "/cart"
    },
    {
        icon: "/order-icon.svg",
        title: "Order Status",
        url: "/order"
    },
    {
        icon: "/heart-icon.svg",
        title: "Saved Items",
        url: "/saved"
    },
    {
        icon: "/settings.svg",
        title: "Settings",
        url: "/settings"
    },
]

export const crops = [
    {
        title: "Staple Crops",
        link: "/"
    },
    {
        title: "Cash Crops",
        link: "/"
    },
    {
        title: "Other Crops",
        link: "/"
    },
]

export const marketPlaceItems = {
    stapleCrops: [
        {
            photo: "/maize.png",
            title: "Maize",
            price: "13",
            weight: "3",
            rating: 4.5,
            description: "Maize is a versatile grain used in various dishes worldwide. It's rich in carbohydrates, providing energy, and contains essential vitamins like B-complex and antioxidants for overall health.",
            reviews: [
                { name: "John D.", review: "Fresh and high-quality maize. Perfect for making cornmeal and other dishes. Highly recommend!" },
                { name: "Emily R.", review: "The maize was sweet and fresh. Great for my family recipes!" }
            ],
            seller: {
                name: "Adekunle Farms",
                location: "Ibadan, Oyo"
            }
        },
        {
            photo: "/cassava.png",
            title: "Cassava",
            price: "12",
            weight: "2",
            rating: 5.0,
            description: "Cassava is a starchy root vegetable, perfect for making fufu, tapioca, and other traditional dishes. It's a great source of carbohydrates and dietary fiber.",
            reviews: [
                { name: "Grace A.", review: "The cassava was fresh and easy to process. Great quality!" },
                { name: "Michael T.", review: "Perfect for making garri. Will definitely buy again!" }
            ],
            seller: {
                name: "Chukwu Farms",
                location: "Enugu, Enugu"
            }
        },
        {
            photo: "/yam.png",
            title: "Yam",
            price: "9",
            weight: "4",
            rating: 5.0,
            description: "Yam is a nutritious tuber rich in carbohydrates and potassium. It's ideal for boiling, frying, or making pounded yam.",
            reviews: [
                { name: "Ngozi E.", review: "The yams were fresh and delicious. Perfect for pounded yam!" },
                { name: "Samuel K.", review: "Great quality yams. My family loved them!" }
            ],
            seller: {
                name: "Olu Farms",
                location: "Abeokuta, Ogun"
            }
        },
        {
            photo: "/sorghum.png",
            title: "Sorghum",
            price: "15",
            weight: "3",
            rating: 5.0,
            description: "Sorghum is a gluten-free grain used in making porridge, flour, and beverages. It's rich in protein, fiber, and antioxidants.",
            reviews: [
                { name: "Fatima H.", review: "High-quality sorghum. Perfect for making traditional drinks!" },
                { name: "Ahmed Y.", review: "Great for my gluten-free recipes. Highly recommend!" }
            ],
            seller: {
                name: "Hausa Agro",
                location: "Kano, Kano"
            }
        },
        {
            photo: "/millet.png",
            title: "Millet",
            price: "12",
            weight: "2",
            rating: 5.0,
            description: "Millet is a small-seeded grain rich in protein and fiber. It's perfect for making porridge, flatbreads, and other traditional dishes.",
            reviews: [
                { name: "Amina S.", review: "The millet was fresh and clean. Great for my porridge!" },
                { name: "Joseph O.", review: "Excellent quality millet. Will buy again!" }
            ],
            seller: {
                name: "Northern Grains",
                location: "Jos, Plateau"
            }
        },
        {
            photo: "/yam-two.png",
            title: "Yam",
            price: "10",
            weight: "3",
            rating: 5.0,
            description: "This variety of yam is perfect for frying or boiling. It's rich in carbohydrates and provides a delicious, hearty meal.",
            reviews: [
                { name: "Chinwe I.", review: "The yams were fresh and tasty. Perfect for fried yam!" },
                { name: "Peter N.", review: "Great quality and value for money. Highly recommend!" }
            ],
            seller: {
                name: "Eze Farms",
                location: "Onitsha, Anambra"
            }
        },
        {
            photo: "/millet-two.png",
            title: "Millet",
            price: "13",
            weight: "2",
            rating: 5.0,
            description: "Millet is a nutritious grain used in traditional dishes and gluten-free recipes. It's rich in vitamins and minerals.",
            reviews: [
                { name: "Hassan B.", review: "Clean and fresh millet. Perfect for my recipes!" },
                { name: "Mary J.", review: "Great quality millet. Will definitely buy again!" }
            ],
            seller: {
                name: "Green Fields",
                location: "Kaduna, Kaduna"
            }
        },
        {
            photo: "/maize-to.png",
            title: "Maize",
            price: "15",
            weight: "4",
            rating: 5.0,
            description: "This maize variety is perfect for roasting or boiling. It's sweet, fresh, and packed with nutrients.",
            reviews: [
                { name: "Tunde A.", review: "The maize was fresh and sweet. Perfect for roasting!" },
                { name: "Linda K.", review: "Great quality maize. My kids loved it!" }
            ],
            seller: {
                name: "Golden Harvest",
                location: "Benin City, Edo"
            }
        },
        {
            photo: "/cassava-two.png",
            title: "Cassava",
            price: "13",
            weight: "2",
            rating: 5.0,
            description: "Cassava is a versatile root vegetable used in making garri, tapioca, and other traditional dishes. It's rich in carbohydrates and fiber.",
            reviews: [
                { name: "Blessing O.", review: "The cassava was fresh and easy to process. Great quality!" },
                { name: "Henry P.", review: "Perfect for making fufu. Highly recommend!" }
            ],
            seller: {
                name: "Roots Agro",
                location: "Calabar, Cross River"
            }
        },
    ],
    cashCrops: [
        {
            photo: "/coffee.png",
            title: "Coffee",
            price: "13",
            weight: "3",
            rating: 5.0,
            description: "These coffee beans are rich in flavor and aroma, perfect for brewing a refreshing cup of coffee.",
            reviews: [
                { name: "Sophia L.", review: "The coffee beans were fresh and aromatic. Great for my morning brew!" },
                { name: "Daniel W.", review: "Excellent quality coffee beans. Highly recommend!" }
            ],
            seller: {
                name: "Coffee Haven",
                location: "Jos, Plateau"
            }
        },
        {
            photo: "/palmoil.png",
            title: "PalmOil",
            price: "12",
            weight: "2",
            rating: 5.0,
            description: "Palm oil is a rich source of healthy fats and is perfect for cooking and frying. It's a staple in many traditional dishes.",
            reviews: [
                { name: "Esther N.", review: "The palm oil was fresh and rich in flavor. Perfect for my soups!" },
                { name: "Victor E.", review: "Great quality palm oil. Will buy again!" }
            ],
            seller: {
                name: "Red Gold Farms",
                location: "Uyo, Akwa Ibom"
            }
        },
        {
            photo: "/barley.png",
            title: "Barley",
            price: "9",
            weight: "4",
            rating: 5.0,
            description: "Barley is a nutritious grain used in soups, stews, and beverages. It's rich in fiber and essential nutrients.",
            reviews: [
                { name: "Musa K.", review: "The barley was fresh and clean. Great for my soups!" },
                { name: "Angela T.", review: "Excellent quality barley. Highly recommend!" }
            ],
            seller: {
                name: "Grain Masters",
                location: "Zaria, Kaduna"
            }
        },
        {
            photo: "/coffee-two.png",
            title: "CoffeeBeans",
            price: "15",
            weight: "3",
            rating: 5.0,
            description: "These premium coffee beans are perfect for espresso and other specialty coffee drinks. Rich in flavor and aroma.",
            reviews: [
                { name: "Olivia P.", review: "The coffee beans were top-notch. Perfect for my espresso machine!" },
                { name: "Chris J.", review: "Great quality coffee beans. Highly recommend!" }
            ],
            seller: {
                name: "Brew Masters",
                location: "Lagos, Lagos"
            }
        },
        {
            photo: "/cocoa.png",
            title: "Cocoa Beans",
            price: "12",
            weight: "2",
            rating: 5.0,
            description: "Cocoa beans are rich in antioxidants and perfect for making chocolate and other cocoa-based products.",
            reviews: [
                { name: "Amaka U.", review: "The cocoa beans were fresh and aromatic. Great for my chocolate recipes!" },
                { name: "David K.", review: "Excellent quality cocoa beans. Highly recommend!" }
            ],
            seller: {
                name: "Cocoa Delight",
                location: "Akure, Ondo"
            }
        },
        {
            photo: "/palmoil-two.png",
            title: "Palm Oil",
            price: "10",
            weight: "3",
            rating: 5.0,
            description: "This palm oil is rich in flavor and perfect for traditional dishes. It's a great source of healthy fats.",
            reviews: [
                { name: "Joyce A.", review: "The palm oil was fresh and rich in flavor. Perfect for my stews!" },
                { name: "Emeka O.", review: "Great quality palm oil. Will definitely buy again!" }
            ],
            seller: {
                name: "Golden Palm",
                location: "Port Harcourt, Rivers"
            }
        },
        {
            photo: "/barley-two.png",
            title: "Barley",
            price: "13",
            weight: "2",
            rating: 5.0,
            description: "Barley is a versatile grain used in soups, stews, and beverages. It's rich in fiber and essential nutrients.",
            reviews: [
                { name: "Fatima Z.", review: "The barley was fresh and clean. Great for my recipes!" },
                { name: "John M.", review: "Excellent quality barley. Highly recommend!" }
            ],
            seller: {
                name: "Harvest Grains",
                location: "Minna, Niger"
            }
        },
        {
            photo: "/soybean.png",
            title: "Soybeans",
            price: "15",
            weight: "4",
            rating: 5.0,
            description: "Soybeans are a rich source of protein and perfect for making soy milk, tofu, and other soy-based products.",
            reviews: [
                { name: "Grace K.", review: "The soybeans were fresh and high-quality. Perfect for my soy milk!" },
                { name: "Paul T.", review: "Great quality soybeans. Highly recommend!" }
            ],
            seller: {
                name: "Soy Masters",
                location: "Makurdi, Benue"
            }
        },
        {
            photo: "/cocoa-two.png",
            title: "Cocoa Beans",
            price: "13",
            weight: "2",
            rating: 5.0,
            description: "These cocoa beans are perfect for making chocolate and other cocoa-based products. Rich in antioxidants and flavor.",
            reviews: [
                { name: "Chinelo A.", review: "The cocoa beans were fresh and aromatic. Great for my recipes!" },
                { name: "Henry L.", review: "Excellent quality cocoa beans. Highly recommend!" }
            ],
            seller: {
                name: "Cocoa Bliss",
                location: "Ibadan, Oyo"
            }
        },
        {
            photo: "/soybean-two.png",
            title: "Soybeans",
            price: "13",
            weight: "3",
            rating: 5.0,
            description: "Soybeans are a versatile legume used in various dishes. They're rich in protein and essential nutrients.",
            reviews: [
                { name: "Aisha M.", review: "The soybeans were fresh and clean. Great for my recipes!" },
                { name: "Victor N.", review: "Excellent quality soybeans. Will buy again!" }
            ],
            seller: {
                name: "Green Soy",
                location: "Lokoja, Kogi"
            }
        },
    ]
};

export const recentlyViewed = [
    {
        photo: "/cassava.png",
        title: "Cassava",
        url: "cassava"
    },
    {
        photo: "/cocoa.png",
        title: "Cocoa Beans",
        url: "cocoa"
    },
    {
        photo: "/soybeans-three.png",
        title: "Soybeans",
        url: "soybeans"
    },
    {
        photo: "/barley-three.png",
        title: "Barley",
        url: "barley"
    },
    {
        photo: "/kolanut.png",
        title: "Kolanut",
        url: "kolanut"
    },
    {
        photo: "/sorghum.png",
        title: "Sorghum",
        url: "sorghum"
    },
]

export const userProfile = {
    name: "Ayodele Olayinka",
    email: "olayinkacodes@gmail.com",
    wallet: {
        balance: "500",
        transactions: [
            {id: 12345, amount: 13},
            {id: 12346, amount: 15},
            {id: 12347, amount: 12},   
        ]
    }
}