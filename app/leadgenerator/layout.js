import Script from "next/script";

export const metadata = {
  title: "Lead Generation Services | Vanapex Technologies",
  description:
    "Vanapex specializes in targeted lead generation for job seekers, students, IT professionals, non-technical individuals, and civil members. Get high-quality leads to grow your business.",
  openGraph: {
    title: "Lead Generation Experts | Vanapex Technologies",
    description:
      "We provide professional lead generation services for job seekers, students, IT & non-technical audiences, and civil members. Drive growth with Vanapex.",
    url: "https://vanapex.com/leadgenerator",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://vanapex.com/seo/leadgenerator.png", // create 1200x628 banner image for lead generation
        width: 1200,
        height: 628,
        alt: "Vanapex Lead Generation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Services | Vanapex",
    description:
      "Expert lead generation solutions for businesses. Vanapex delivers high-quality leads across industries — job seekers, students, IT & non-technical audiences.",
    images: ["https://vanapex.com/seo/leadgenerator.png"],
  },
  alternates: {
    canonical: "https://vanapex.com/leadgenerator",
  },
};

export default function PageRoot({ children }) {
  return (
    <>
      
      {children}
      <Script
        id="lead-generator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Lead Generation Services",
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
              name: "Lead Generation Types",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Job Seeker Leads",
                    description:
                      "Targeted lead generation for individuals searching for jobs.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Student Leads",
                    description:
                      "Lead generation for IT students, non-technical students, and learners.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Civil Member Leads",
                    description:
                      "High-quality lead generation for civil and community members.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "IT Professional Leads",
                    description:
                      "Qualified IT professional leads for companies and recruiters.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Non-Technical Leads",
                    description:
                      "Lead generation for non-technical job seekers and professionals.",
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
