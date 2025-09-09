import Script from "next/script";

export const metadata = {
  title: "Contact Vanapex Technologies | Get in Touch",
  description:
    "Contact Vanapex Technologies for website development, mobile app, AI/ML solutions, and digital marketing. Reach us for inquiries, support, or project discussions.",
  openGraph: {
    title: "Contact Vanapex Technologies | Web, Mobile, AI & Marketing Experts",
    description:
      "Get in touch with Vanapex for expert website development, mobile apps, AI chatbot solutions, and digital marketing services.",
    url: "https://vanapex.com/contact",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://vanapex.com/seo/contact.png", // create a 1200x628 banner for contact page
        width: 1200,
        height: 628,
        alt: "Contact Vanapex Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vanapex Technologies",
    description:
      "Reach out to Vanapex Technologies for web development, mobile apps, AI solutions, and digital marketing inquiries.",
    images: ["https://vanapex.com/seo/contact.png"],
  },
  alternates: {
    canonical: "https://vanapex.com/contact",
  },
  
};
export default function PageRoot({ children }) {
  return (
    <>
      {children}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "Vanapex Technologies",
              url: "https://vanapex.com",
              logo: "https://vanapex.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-83406-06970",
                contactType: "customer support",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/people/Vanapex/61580135445838/",
                "https://www.instagram.com/vanapex",
                "https://www.linkedin.com/company/vanapex",
                "https://x.com/vanapex",
              ],
            },
          }),
        }}
      />
    </>
  );
}
