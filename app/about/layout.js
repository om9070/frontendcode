import Script from "next/script";

export const metadata = {
  title: "About Vanapex Technologies | Software Development Across Industries",
  description:
    "Vanapex Technologies specializes in software and app development for Healthcare, E-commerce, Education, Gym, Real Estate, Travel, Event, Jewellery, Networking, Manufacturing, Logistics, Accounting, and Web Hosting industries.",
  openGraph: {
    title: "About Vanapex Technologies",
    description:
      "We are experts in building software solutions for Healthcare, E-commerce, Education, Real Estate, Travel, Logistics, Accounting, and more industries.",
    url: "https://vanapex.com/about",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://vanapex.com/seo/about.png", // create a banner with industry icons
        width: 1200,
        height: 628,
        alt: "About Vanapex Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vanapex Technologies",
    description:
      "Vanapex develops tailored software for Healthcare, E-commerce, Education, Real Estate, Travel, Logistics, Accounting, and more industries.",
    images: ["https://vanapex.com/seo/about.png"],
  },
  alternates: {
    canonical: "https://vanapex.com/about",
  }
};

export default function PageRoot({ children }) {
  return (
    <>
      {children}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Vanapex Technologies",
            url: "https://vanapex.com",
            logo: "https://vanapex.com/logo.png",
            description:
              "Vanapex Technologies specializes in building custom software solutions for Healthcare, E-commerce, Education, Real Estate, Logistics, and more industries.",
            sameAs: [
              "https://www.facebook.com/people/Vanapex/61580135445838/",
              "https://www.instagram.com/vanapex",
              "https://www.linkedin.com/company/vanapex",
              "https://x.com/vanapex",
            ],
            areaServed: {
              "@type": "Place",
              name: "Global",
            },
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
            ],
          }),
        }}
      />
    </>
  );
}
