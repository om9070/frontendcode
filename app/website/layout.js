import Script from "next/script";

export const metadata = {
  title: "Website Development Services | UI/UX, Backend & Database Experts | Vanapex",
  description:
    "Vanapex provides expert website development services including UI/UX design, API implementation, custom backend development, and database optimization for performance.",
  openGraph: {
    title: "Website Development Services | Vanapex",
    description:
      "Get expert website development solutions with Vanapex. From UI/UX design to backend development and database optimization, we deliver scalable, high-performance websites.",
    url: "https://vanapex.com/website",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://vanapex.com/seo/website.png", // Create a banner with code + UI elements
        width: 1200,
        height: 628,
        alt: "Vanapex Website Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Services | Vanapex",
    description:
      "Vanapex specializes in website development, UI/UX, backend systems, API integration, and database optimization to boost performance.",
    images: ["https://vanapex.com/seo/website.png"],
  },
  alternates: {
    canonical: "https://vanapex.com/website",
  },
  
};

export default function PageRoot({ children }) {
  return (
    <>
      {children}
       <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Website Development Services",
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
              url: "https://vanapex.com/website",
              description:
                "Expert website development services including UI/UX design, backend systems, API implementation, and database optimization.",
              priceCurrency: "USD",
              price: "Contact for pricing",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Website Development Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "UI/UX Design",
                    description:
                      "Designing user-friendly, modern, and conversion-focused interfaces.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "API Implementation",
                    description:
                      "Seamless third-party and custom API integrations for business apps.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Backend Development",
                    description:
                      "Robust and scalable server-side development for websites and apps.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Database Optimization",
                    description:
                      "Improving database performance, reliability, and scalability.",
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
