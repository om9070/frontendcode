import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
      <Head>
        <title>Website Development Company in India | hanuwebtechsolutions</title>
        <meta
          name="description"
          content="hanuwebtechsolutions offers professional website development services in India. We build fast, responsive, and SEO-friendly websites tailored to your business needs and budget."
        />
        <meta
          name="keywords"
          content="website development, web development company India, affordable website design, custom websites, SEO-friendly websites"
        />

        <meta
          property="og:title"
          content="Website Development Company in India | hanuwebtechsolutions"
        />
        <meta
          property="og:description"
          content="Get a fast, responsive, and SEO-friendly website for your business. hanuwebtechsolutions provides affordable and custom website development services in India."
        />
        <meta
          property="og:image"
          content="https://hanuwebtechsolutions.com/website1.webp"
        />
        <meta property="og:url" content="https://hanuwebtechsolutions.com/website" />
        <meta property="og:type" content="website" />
      </Head>
      {children}
    </>
  );
}
