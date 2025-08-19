import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
      <Head>
        <title>
          hanuwebtechsolutions Blog | Web Development, App Development & Digital
          Marketing Insights
        </title>
        <meta
          name="description"
          content="Read the latest articles, tips, and insights on web development, mobile app development, and digital marketing from the experts at hanuwebtechsolutions."
        />
        <meta
          name="keywords"
          content="web development blog, app development blog, digital marketing tips, IT services blog, software company insights, tech news India"
        />

        <meta
          property="og:title"
          content="hanuwebtechsolutions Blog | Tech & Marketing Insights"
        />
        <meta
          property="og:description"
          content="Stay updated with hanuwebtechsolutions’s blog covering web development trends, app design tips, SEO strategies, and digital marketing best practices."
        />
        <meta
          property="og:image"
          content="https://hanuwebtechsolutions.com/ads7.webp"
        />
        <meta property="og:url" content="https://hanuwebtechsolutions.com/blog" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="hanuwebtechsolutions Blog | Web, App & Marketing Insights"
        />
        <meta
          name="twitter:description"
          content="Explore expert tips, tutorials, and strategies for web development, app design, and digital marketing."
        />
        <meta
          name="twitter:image"
          content="https://hanuwebtechsolutions.com/ads7.webp"
        />
      </Head>
      {children}
    </>
  );
}
