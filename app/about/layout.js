import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
        <title>About vanapextechnologies | Affordable Software, Web & App Development in India</title>
<meta name="description" content="Learn about vanapextechnologies, one of the best Bihari IT companies in India. We specialize in affordable custom software, web development, mobile app development, and digital marketing services." />
<meta name="keywords" content="about vanapextechnologies, bihari IT company, affordable software development India, web development company Bihar, mobile app development, digital marketing services" />

<meta property="og:title" content="About vanapextechnologies | Affordable IT & Software Solutions in India" />
<meta property="og:description" content="vanapextechnologies is a leading Bihari IT company offering affordable web, app, and software development with a focus on quality and innovation." />
<meta property="og:image" content="https://vanapextechnologies.com/digital/digital1.webp" />
<meta property="og:url" content="https://vanapextechnologies.com/about" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="About vanapextechnologies | Affordable Software, Web & App Development" />
<meta name="twitter:description" content="Get to know vanapextechnologies — a top IT company in Bihar delivering budget-friendly custom software, web solutions, and mobile apps in India." />
<meta name="twitter:image" content="https://vanapextechnologies.com/digital/digital1.webp" />

      {children}
    </>
  );
}
