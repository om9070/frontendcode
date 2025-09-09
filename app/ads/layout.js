import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Digital Advertising Services | Vanapex Technologies",
  description:
    "Boost your business with Vanapex's targeted Facebook Ads, Instagram marketing, and Google Ads campaigns. Drive sales, increase visibility, and grow your brand with affordable ad solutions.",
  openGraph: {
    title: "Digital Advertising Services | Vanapex Technologies",
    description:
      "Vanapex specializes in Facebook & Instagram ads, Google Ads promotions, and location-based ad campaigns that convert traffic into loyal customers.",
    url: "https://vanapex.com/ads",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://vanapex.com/seo/ads.png", // create a 1200x628 promo image
        width: 1200,
        height: 628,
        alt: "Vanapex Digital Advertising Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Advertising Services | Vanapex Technologies",
    description:
      "Get high-impact Facebook, Instagram, and Google Ads with Vanapex. Our ad campaigns drive engagement, brand awareness, and conversions.",
    images: ["https://vanapex.com/seo/ads.png"],
  },
  alternates: {
    canonical: "https://vanapex.com/ads",
  },
  
};

export default function PageRoot({ children }) {
  return (
    <>
      {children}
      <Script
        id="ads-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Digital Advertising Services",
            provider: {
              "@type": "Organization",
              name: "Vanapex Technologies",
              url: "https://vanapex.com",
              logo: "https://vanapex.com/logo.png",
            },
            areaServed: {
              "@type": "Place",
              name: "Global",
            },
            offers: {
              "@type": "Offer",
              url: "https://vanapex.com/ads",
              description:
                "Targeted Facebook, Instagram, and Google Ads campaigns that drive brand awareness, engagement, and sales.",
              priceCurrency: "USD",
              price: "Contact us", // replace with actual pricing if available
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  );
}
