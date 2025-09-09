import Script from "next/script";

export const metadata = {
  title: "Load Management & Balancing Services | Vanapex Technologies",
  description:
    "Vanapex provides expert load management solutions for frontend, backend, and mobile apps. Improve project performance, scalability, and reliability with our load balancing services.",
  openGraph: {
    title: "Load Management & Balancing Services | Vanapex",
    description:
      "Optimize your systems with Vanapex load management solutions. We balance load across frontend, backend, and mobile apps to boost performance and efficiency.",
    url: "https://vanapex.com/loadmanagement",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://vanapex.com/seo/loadmanagement.png", // create a 1200x628 banner showing performance/load balancing
        width: 1200,
        height: 628,
        alt: "Vanapex Load Balancing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Load Balancing & Performance Optimization | Vanapex",
    description:
      "Vanapex specializes in load management for frontend, backend, and mobile apps. Improve project speed, reliability, and scalability.",
    images: ["https://vanapex.com/seo/loadmanagement.png"],
  },
  alternates: {
    canonical: "https://vanapex.com/loadmanagement",
  },
  
};

export default function PageRoot({ children }) {
  return (
    <>
      {children}
      <Script
        id="loadmanagement-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Load Management and Load Balancing Services",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Load Balancing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Frontend Load Balancing",
                    description:
                      "Optimize client-side rendering and distribute load for smooth user experiences.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Backend Load Balancing",
                    description:
                      "Distribute API and server requests to ensure scalability and reduce downtime.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile App Load Optimization",
                    description:
                      "Improve mobile app performance with intelligent load distribution and balancing.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Performance Improvement",
                    description:
                      "Boost project speed, stability, and scalability with load balancing techniques.",
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
