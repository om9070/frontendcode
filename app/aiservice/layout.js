import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
    <Head>
        <title>AI Solutions & Artificial Intelligence Services | vanapextechnologies India</title>
<meta name="description" content="vanapextechnologies provides advanced AI solutions in India, including machine learning, AI automation, natural language processing, and predictive analytics to help businesses innovate and grow." />
<meta name="keywords" content="AI services India, artificial intelligence solutions, machine learning development, AI automation, NLP services, predictive analytics, AI software development Bihar" />

<meta property="og:title" content="AI Solutions & Artificial Intelligence Services | vanapextechnologies" />
<meta property="og:description" content="Boost your business with AI-powered solutions from vanapextechnologies. We offer ML models, AI automation, NLP, and predictive analytics tailored to your needs." />
<meta property="og:image" content="https://vanapextechnologies.com/ai.webp" />
<meta property="og:url" content="https://vanapextechnologies.com/aiservice" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="AI Solutions & Artificial Intelligence Services | vanapextechnologies" />
<meta name="twitter:description" content="Custom AI solutions including ML, automation, NLP, and predictive analytics for business growth." />
<meta name="twitter:image" content="https://vanapextechnologies.com/ai.webp" />

    </Head>
      {children}
    </>
  );
}
