import Script from "next/script";

export const metadata = {
  title: "About Vanapex Technologies | Software Development Across Industries",
  description:
    "Vanapex Technologies specializes in software and app development for Healthcare, E-commerce, Education, Gym, Real Estate, Travel, Event, Jewellery, Networking, Manufacturing, Logistics, Accounting, and Web Hosting industries.",
  openGraph: {
    title: "About Vanapex Technologies",
    description:
      "We are experts in building software solutions for Healthcare, E-commerce, Education, Real Estate, Travel, Logistics, Accounting, and more industries.",
    url: "https://www.vanapex.com/about",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://www.vanapex.com/seo/about.png", // create a banner with industry icons
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
    images: ["https://www.vanapex.com/seo/about.png"],
  },
  alternates: {
    canonical: "https://www.vanapex.com/about",
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
            url: "https://www.vanapex.com",
            logo: "https://www.vanapex.com/logo.png",
            description:
              "Vanapex Technologies specializes in building custom software solutions for Healthcare, E-commerce, Education, Real Estate, Logistics, and more industries.",
            areaServed: {
              "@type": "Place",
              name: "Global",
            }
          }),
        }}
      />
    </>
  );
}
