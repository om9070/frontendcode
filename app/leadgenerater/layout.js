import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
      <Head>
        <title>
          Lead Generation Services in India | Digital Marketing Experts |
          hanuwebtechsolutions
        </title>
        <meta
          name="description"
          content="hanuwebtechsolutions offers expert lead generation services through digital marketing strategies, helping businesses attract quality leads and boost sales."
        />
        <meta
          name="keywords"
          content="lead generation services, digital marketing lead generation, B2B leads, online marketing, affordable lead generation India, sales growth"
        />

        <meta
          property="og:title"
          content="Lead Generation Services in India | hanuwebtechsolutions"
        />
        <meta
          property="og:description"
          content="Boost your sales with hanuwebtechsolutions’s lead generation services. We use proven digital marketing strategies to bring you high-quality leads."
        />
        <meta
          property="og:image"
          content="https://hanuwebtechsolutions.com/developement.webp"
        />
        <meta
          property="og:url"
          content="https://hanuwebtechsolutions.com/leadgenerater"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lead Generation Services in India | hanuwebtechsolutions"
        />
        <meta
          name="twitter:description"
          content="Attract and convert quality leads with our digital marketing-driven lead generation solutions."
        />
        <meta
          name="twitter:image"
          content="https://hanuwebtechsolutions.com/developement.webp"
        />
      </Head>
      {children}
    </>
  );
}
