// Importing assets from the assets folder
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

// Navigation links for the techfest website
export const navigation = [
  {
    id: "0",
    title: "Event Features",
    url: "#features",
  },
  {
    id: "1",
    title: "How to Attend",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Know US",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Event Schedule",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Register",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

// Hero section icons to highlight tech features
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// Notification images for updates and announcements
export const notificationImages = [notification4, notification3, notification2];

// Company logos or partner logos (can replace `yourlogo` with actual sponsor logos if available)
export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// Highlighted services or themes of the techfest
export const brainwaveServices = [
  "Innovate",
  "Collaborate",
  "Explore",
];

// Icons to represent techfest offerings or event highlights
export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// Techfest roadmap for upcoming or featured sessions and upgrades
export const roadmap = [
  {
    id: "0",
    title: "AI Revolution",
    text: "Dive into the latest advancements in artificial intelligence and its transformative impact.",
    date: "December 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Blockchain Breakthrough",
    text: "Discover blockchain technology and its potential in secure, decentralized solutions.",
    date: "December 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Augmented Reality",
    text: "Experience immersive AR demos and learn how it's reshaping user interactions.",
    date: "December 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Quantum Computing",
    text: "Explore the cutting-edge possibilities of quantum technology and future applications.",
    date: "December 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

// Collaboration section text for team and networking emphasis
export const collabText =
  "Empower your vision with smart tools and secure, seamless collaboration – the perfect solution for forward-thinking teams.";

// Collaboration highlights with descriptions
export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Networking",
  },
  {
    id: "2",
    title: "Advanced Tech Showcases",
  },
];

// App icons to showcase tech stack used in the event or available resources
export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

// Ticket pricing and descriptions
export const pricing = [
  {
    id: "0",
    title: "Basic Pass",
    description: "Access to exhibitions and guest lectures",
    price: "Free",
    features: [
      "Entry to all exhibition zones",
      "Access to guest lectures",
      "Networking opportunities with peers",
    ],
  },
  {
    id: "1",
    title: "Premium Pass",
    description: "All-access pass, priority seating, exclusive workshops",
    price: "49.99",
    features: [
      "Priority seating at guest lectures",
      "Exclusive access to advanced workshops",
      "Dedicated support and event materials",
    ],
  },
  {
    id: "2",
    title: "VIP Pass",
    description: "Full access with backstage entry and networking lounges",
    price: "99.99",
    features: [
      "Backstage access for select events",
      "VIP networking lounge access",
      "Personalized event itinerary",
    ],
  },
];

// Event benefits for attendees
export const benefits = [
  {
    id: "0",
    title: "Access Experts",
    text: "Gain insights from industry leaders and tech experts through panels and discussions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Hands-on Workshops",
    text: "Learn through interactive workshops designed to enhance your skills.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Network with Innovators",
    text: "Connect with tech enthusiasts, industry professionals, and like-minded peers.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Exclusive Demos",
    text: "Get a first-hand look at emerging technologies and future innovations.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Tech Challenges",
    text: "Participate in hackathons and challenges to test and showcase your skills.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Fun Activities",
    text: "Enjoy the techfest atmosphere with fun zones, games, and giveaways.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

// Social media links
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
