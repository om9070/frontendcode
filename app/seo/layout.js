import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
      <Head>
        <title>
          SEO Services in India | Affordable Digital Marketing | hanuwebtechsolutions
        </title>
        <meta
          name="description"
          content="Boost your website ranking with hanuwebtechsolutions’s affordable SEO services in India. We offer keyword research, on-page & off-page SEO, and digital marketing to grow your business online."
        />
        <meta
          name="keywords"
          content="SEO services India, affordable SEO, best SEO company Bihar, digital marketing services, keyword research, on-page SEO, off-page SEO"
        />

        <meta
          property="og:title"
          content="Affordable SEO Services in India | hanuwebtechsolutions"
        />
        <meta
          property="og:description"
          content="Grow your business online with expert SEO and digital marketing from hanuwebtechsolutions. Affordable packages for startups, small businesses, and enterprises."
        />
        <meta
          property="og:image"
          content="https://hanuwebtechsolutions.com/seo5.webp"
        />
        <meta property="og:url" content="https://hanuwebtechsolutions.com/seo" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Affordable SEO Services in India | hanuwebtechsolutions"
        />
        <meta
          name="twitter:description"
          content="Get more traffic and leads with hanuwebtechsolutions’s SEO and digital marketing solutions tailored to your budget."
        />
        <meta
          name="twitter:image"
          content="https://hanuwebtechsolutions.com/seo5.webp"
        />
      </Head>
      {children}
    </>
  );
}
