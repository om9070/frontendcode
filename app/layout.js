import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Oswald } from "next/font/google";
import dynamic from "next/dynamic";
import LoadingSpinner from "./loading";
import Script from "next/script";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  loading: () => (
    <p>
      <LoadingSpinner />
    </p>
  ),
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], // or just the ones you use
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.vanapex.com"), // base domain
  alternates: {
    canonical: "/",
  },
  title: "Vanapex Technologies | Website, Mobile App & AI Solutions",
  description:
    "Vanapex Technologies is a leading software development company specializing in website design, web applications, mobile apps (iOS & Android), AI/ML solutions, and digital marketing at affordable prices.",
  keywords: [
    "Vanapex",
    "Vanapex Technologies",
    "software company",
    "website development",
    "web app development",
    "mobile app development",
    "iOS app development",
    "AI solutions",
    "ML development",
    "digital marketing",
    "software company in delhi",
    "software company in Ranchi",
    "software company in patna",
    "software company in india",
    "software company in latehar",
  ],
  openGraph: {
    title: "Vanapex Technologies | Website, Mobile App & AI Solutions",
    description:
      "We build websites, web apps, mobile apps, AI/ML solutions, and provide digital marketing services at affordable prices.",
    url: "https://www.vanapex.com",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://www.vanapex.com/seo/home.png",
        width: 1200,
        height: 630,
        alt: "Vanapex Technologies Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanapex Technologies | Website, Mobile App & AI Solutions",
    description:
      "Experts in website development, mobile apps, AI/ML, and digital marketing.",
    images: ["https://www.vanapex.com/seo/home.png"],
  },
  icons: {
    icon: "/favicon.ico", // your custom favicon
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiasedcss ${oswald.className}`}
      >
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
        <Script
          id="home-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vanapex Technologies",
              url: "https://www.vanapex.com",
              logo: "https://www.vanapex.com/logo.png",
              description:
                "Vanapex Technologies specializes in website development, mobile applications, digital marketing, and AI & ML solutions.",
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.facebook.com/people/Vanapex/61580135445838/",
                "https://www.instagram.com/vanapex_",
                "https://www.linkedin.com/company/vanapex",
                "https://www.x.com/vanapex",
              ],
              knowsAbout: [
                "Healthcare Software",
                "E-commerce Development",
                "Education Platforms",
                "Gym Management Systems",
                "Real Estate Applications",
                "Travel & Tourism Apps",
                "Event Management Software",
                "Jewellery Business Solutions",
                "Networking Solutions",
                "Manufacturing Software",
                "Logistics Applications",
                "Accounting & Finance Tools",
                "Web Hosting Solutions",
                "Logo Designer",
                "Graphic Designer"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8340606970",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Vanapex Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website & Web Applications",
                      description:
                        "Custom website and web application development tailored to your business needs.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Android & iOS Applications",
                      description:
                        "Native and cross-platform mobile app development, including Play Store and App Store publishing.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing",
                      description:
                        "Comprehensive digital marketing services including SEO, social media, and paid campaigns.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & ML Solutions",
                      description:
                        "AI-powered solutions including chatbots, automation, predictive models, and machine learning applications.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
