import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import {
  OrganizationJsonLd,
  WebsiteJsonLd,
  EventJsonLd,
} from "../components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Canonical production domain. Update if the real domain ever changes.
const SITE_URL = "https://forgehacks.dev";
const OG_IMAGE = "/cinder.png";

const TITLE = "ForgeHacks 2026 — Online AI Hackathon for Students";
const DESCRIPTION =
  "ForgeHacks is an online AI hackathon for high school and college students worldwide. Build real-world AI projects across six tracks — October 3–10, 2026.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | ForgeHacks",
  },
  description: DESCRIPTION,
  keywords: [
    "ForgeHacks",
    "ForgeHacks 2026",
    "ForgeHacks hackathon",
    "ForgeHacks AI hackathon",
    "AI hackathon",
    "online AI hackathon",
    "student hackathon",
    "high school AI hackathon",
    "student AI hackathon",
    "online hackathon for students",
    "AI hackathon 2026",
  ],
  applicationName: "ForgeHacks",
  authors: [{ name: "ForgeHacks" }],
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ForgeHacks",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 512,
        height: 512,
        alt: "ForgeHacks logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/cinder.png",
    apple: "/cinder.png",
  },
};

export const viewport = {
  themeColor: "#060504",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-void text-white font-body antialiased selection:bg-ember/30 selection:text-white">
        {/* Structured data: helps Google + AI search engines understand
            ForgeHacks as a distinct, legitimate online student hackathon. */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <EventJsonLd />
        {children}
      </body>
    </html>
  );
}
