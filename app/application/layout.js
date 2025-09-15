import Script from "next/script";

export const metadata = {
  title: "Mobile & iOS Application Development | Vanapex Technologies",
  description:
    "Vanapex specializes in mobile app, iOS app, and tablet application development with Play Store & App Store publishing support. Build innovative apps at affordable prices.",
  openGraph: {
    title: "Mobile & iOS Application Development | Vanapex Technologies",
    description:
      "Get expert mobile app, iOS app, and tablet application development services. Vanapex also helps with Google Play Store and Apple App Store publishing.",
    url: "https://www.vanapex.com/application",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://www.vanapex.com/seo/application.png", // create a 1200x628 banner for application dev
        width: 1200,
        height: 628,
        alt: "Mobile App Development Vanapex",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & iOS App Development | Vanapex Technologies",
    description:
      "Vanapex offers expert mobile, iOS, and tablet app development services with full Play Store and App Store publishing support.",
    images: ["https://www.vanapex.com/seo/application.png"],
  },
  alternates: {
    canonical: "https://www.vanapex.com/application",
  },
  
};

export default function PageRoot({ children }) {
  return (
    <>
      {children}
       <Script
        id="application-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType:
              "Mobile Application, iOS Application, Tablet Application Development",
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
              name: "Application Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile Application Development",
                    description:
                      "Custom mobile app development for Android and iOS devices.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "iOS Application Development",
                    description:
                      "Professional iOS app development for iPhone and iPad.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tablet Application Development",
                    description:
                      "Engaging, optimized apps built for tablet devices.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "App Store & Play Store Publishing",
                    description:
                      "End-to-end support for uploading and publishing apps on Google Play Store and Apple App Store.",
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
