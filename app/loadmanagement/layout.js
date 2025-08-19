import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
      <Head>
        <title>
          Load Balancing Solutions | Server Performance & Traffic Management |
          hanuwebtechsolutions
        </title>
        <meta
          name="description"
          content="hanuwebtechsolutions offers expert load balancing solutions to optimize server performance, manage high traffic, and ensure maximum uptime for your applications."
        />
        <meta
          name="keywords"
          content="load balancing, server optimization, traffic management, cloud load balancer, high availability, server performance, application uptime"
        />

        <meta
          property="og:title"
          content="Load Balancing Solutions | hanuwebtechsolutions"
        />
        <meta
          property="og:description"
          content="Improve uptime and performance with hanuwebtechsolutions's load balancing solutions. Distribute traffic efficiently across servers and keep your apps running smoothly."
        />
        <meta
          property="og:image"
          content="https://hanuwebtechsolutions.com/images/load-balancing.jpg"
        />
        <meta
          property="og:url"
          content="https://hanuwebtechsolutions.com/loadmanagement"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Load Balancing Solutions | hanuwebtechsolutions"
        />
        <meta
          name="twitter:description"
          content="Ensure high availability and optimal server performance with our advanced load balancing solutions."
        />
        <meta
          name="twitter:image"
          content="https://hanuwebtechsolutions.com/images/load-balancing.jpg"
        />
      </Head>
      {children}
    </>
  );
}
