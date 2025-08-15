import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
      <Head>
        <title>
          InexpensiveCode Blog | Web Development, App Development & Digital
          Marketing Insights
        </title>
        <meta
          name="description"
          content="Read the latest articles, tips, and insights on web development, mobile app development, and digital marketing from the experts at InexpensiveCode."
        />
        <meta
          name="keywords"
          content="web development blog, app development blog, digital marketing tips, IT services blog, software company insights, tech news India"
        />

        <meta
          property="og:title"
          content="InexpensiveCode Blog | Tech & Marketing Insights"
        />
        <meta
          property="og:description"
          content="Stay updated with InexpensiveCode’s blog covering web development trends, app design tips, SEO strategies, and digital marketing best practices."
        />
        <meta
          property="og:image"
          content="https://inexpensivecode.com/ads7.webp"
        />
        <meta property="og:url" content="https://inexpensivecode.com/application" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="InexpensiveCode Blog | Web, App & Marketing Insights"
        />
        <meta
          name="twitter:description"
          content="Explore expert tips, tutorials, and strategies for web development, app design, and digital marketing."
        />
        <meta
          name="twitter:image"
          content="https://inexpensivecode.com/ads7.webp"
        />
      </Head>
      {children}
    </>
  );
}
