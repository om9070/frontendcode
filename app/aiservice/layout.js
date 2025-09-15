
import Script from "next/script";

export const metadata = {
  title: "AI Services | Chatbot & AI Solutions | Vanapex Technologies",
  description:
    "Vanapex offers AI-powered services including intelligent chatbots, AI voice chatbots, and WhatsApp chatbots. Automate customer support, boost engagement, and improve business efficiency with our AI solutions.",
  openGraph: {
    title: "AI Services | Chatbot & AI Solutions | Vanapex Technologies",
    description:
      "Explore Vanapex's AI-powered services: Chatbots, AI Voice Chatbots, and WhatsApp Chatbots designed to automate customer support and drive engagement.",
    url: "https://www.vanapex.com/aiservice",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://www.vanapex.com/seo/aiservice.png", // create 1200x628 image for AI services
        width: 1200,
        height: 628,
        alt: "Vanapex AI Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services | Vanapex Technologies",
    description:
      "AI-powered chatbots, AI voice chatbots, and WhatsApp chatbot solutions by Vanapex Technologies. Enhance customer experience with smart automation.",
    images: ["https://www.vanapex.com/seo/aiservice.png"],
  },
  alternates: {
    canonical: "https://www.vanapex.com/aiservice",
  },
  
};

export default function PageRoot({ children }) {
  return (
    <>
      {children}
      <Script
        id="ai-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "AI Services - Chatbots, AI Voice Chatbots, WhatsApp Chatbots",
            provider: {
              "@type": "Organization",
              name: "Vanapex Technologies",
              url: "https://www.vanapex.com",
              logo: "https://www.vanapex.com/logo.png",
            },
            areaServed: {
              "@type": "Place",
              name: "Global",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Chatbot Development",
                    description:
                      "Custom AI-powered chatbots for websites and applications to handle customer queries and automate responses.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Voice Chatbot",
                    description:
                      "Voice-enabled AI chatbots for natural, conversational customer experiences.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "WhatsApp Chatbot",
                    description:
                      "Smart WhatsApp chatbot solutions to engage customers on the world's most popular messaging app.",
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
