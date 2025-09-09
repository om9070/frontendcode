
import Script from "next/script";

export const metadata = {
  title: "SEO Services | Website Ranking & Backlink Support | Vanapex",
  description:
    "Boost your website ranking with Vanapex SEO services. We specialize in keyword optimization, backlink support, and search engine visibility for better traffic and leads.",
  openGraph: {
    title: "SEO Services | Vanapex",
    description:
      "Vanapex offers expert SEO solutions including website ranking, keyword optimization, and backlink support to drive traffic and growth.",
    url: "https://vanapex.com/seo",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://vanapex.com/seo/seo.png", // create a banner showing SEO growth chart
        width: 1200,
        height: 628,
        alt: "Vanapex SEO Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Vanapex",
    description:
      "Website ranking, keyword research, and backlink support. Vanapex provides expert SEO services to boost your online visibility.",
    images: ["https://vanapex.com/seo/seo.png"],
  },
  alternates: {
    canonical: "https://vanapex.com/seo",
  },
  
};

export default function PageRoot({ children }) {
  return (
    <>
      {children}
      <Script
        id="seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Search Engine Optimization (SEO) Services",
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
              url: "https://vanapex.com/seo",
              description:
                "SEO services including website ranking, keyword optimization, and backlink support.",
              priceCurrency: "USD",
              price: "Contact for pricing",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "SEO Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website Ranking",
                    description:
                      "Boost your search engine ranking with proven SEO strategies.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Keyword Optimization",
                    description:
                      "Find and optimize the right keywords for faster ranking and targeted traffic.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Backlink Support",
                    description:
                      "Build high-quality backlinks to strengthen domain authority and SEO score.",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
