import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
        <title>About InexpensiveCode | Affordable Software, Web & App Development in India</title>
<meta name="description" content="Learn about InexpensiveCode, one of the best Bihari IT companies in India. We specialize in affordable custom software, web development, mobile app development, and digital marketing services." />
<meta name="keywords" content="about inexpensivecode, bihari IT company, affordable software development India, web development company Bihar, mobile app development, digital marketing services" />

<meta property="og:title" content="About InexpensiveCode | Affordable IT & Software Solutions in India" />
<meta property="og:description" content="InexpensiveCode is a leading Bihari IT company offering affordable web, app, and software development with a focus on quality and innovation." />
<meta property="og:image" content="https://inexpensivecode.com/digital/digital1.webp" />
<meta property="og:url" content="https://inexpensivecode.com/about" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="About InexpensiveCode | Affordable Software, Web & App Development" />
<meta name="twitter:description" content="Get to know InexpensiveCode — a top IT company in Bihar delivering budget-friendly custom software, web solutions, and mobile apps in India." />
<meta name="twitter:image" content="https://inexpensivecode.com/digital/digital1.webp" />

      {children}
    </>
  );
}
