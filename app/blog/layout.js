import Script from "next/script";

export const metadata = {
  title: "Vanapex Blog | Insights on Web, Mobile, AI & Digital Marketing",
  description:
    "Read expert articles from Vanapex on website development, mobile apps, AI/ML, chatbots, and digital marketing. Stay updated with the latest industry trends.",
  openGraph: {
    title: "Vanapex Blog | Web Development, Mobile Apps, AI & Marketing",
    description:
      "Explore Vanapex blog for tips on software development, app building, AI/ML solutions, and digital advertising strategies.",
    url: "https://vanapex.com/blog",
    siteName: "Vanapex Technologies",
    images: [
      {
        url: "https://vanapex.com/seo/blog.png", // create 1200x628 blog banner
        width: 1200,
        height: 628,
        alt: "Vanapex Blog - Web, AI & Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanapex Blog | Web, Mobile, AI & Marketing Insights",
    description:
      "Latest articles on website development, mobile apps, AI chatbots, and digital marketing by Vanapex Technologies.",
    images: ["https://vanapex.com/seo/blog.png"],
  },
  alternates: {
    canonical: "https://vanapex.com/blog",
  },
  
};
export default function PageRoot({ children }) {
  return (
    <>
      {children}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Vanapex Blog",
            url: "https://vanapex.com/blog",
            description:
              "Expert blog articles on website development, mobile applications, AI, chatbots, and digital marketing by Vanapex Technologies.",
            publisher: {
              "@type": "Organization",
              name: "Vanapex Technologies",
              logo: {
                "@type": "ImageObject",
                url: "https://vanapex.com/logo.png",
              },
            },
            blogPost: [
              {
                "@type": "BlogPosting",
                headline: "How AI Chatbots are Transforming Business",
                url: "https://vanapex.com/blog",
                datePublished: "2025-08-20",
                author: {
                  "@type": "Organization",
                  name: "Vanapex Technologies",
                },
              },
              {
                "@type": "BlogPosting",
                headline: "Latest Mobile App Development Trends in 2025",
                url: "https://vanapex.com/blog",
                datePublished: "2025-08-15",
                author: {
                  "@type": "Organization",
                  name: "Vanapex Technologies",
                },
              },
              {
                "@type": "BlogPosting",
                headline:
                  "Top Digital Marketing Strategies for Small Businesses",
                url: "https://vanapex.com/blog",
                datePublished: "2025-08-10",
                author: {
                  "@type": "Organization",
                  name: "Vanapex Technologies",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
