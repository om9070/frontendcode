import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
      <Head>
        <title>
          Contact hanuwebtechsolutions | Web, App & Digital Marketing Services in
          India
        </title>
        <meta
          name="description"
          content="Get in touch with hanuwebtechsolutions for affordable and high-quality web development, app development, and digital marketing services. Let's discuss your project today!"
        />
        <meta
          name="keywords"
          content="contact hanuwebtechsolutions, contact software company India, web development contact, IT service inquiries, app development support, digital marketing contact"
        />

        <meta
          property="og:title"
          content="Contact hanuwebtechsolutions | Web, App & Digital Marketing Services"
        />
        <meta
          property="og:description"
          content="Have a project in mind? Contact hanuwebtechsolutions for expert web, app, and digital marketing solutions tailored to your needs."
        />
        <meta
          property="og:image"
          content="https://hanuwebtechsolutions.com/apprnd2.webp"
        />
        <meta property="og:url" content="https://hanuwebtechsolutions.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact hanuwebtechsolutions | Let's Build Your Project"
        />
        <meta
          name="twitter:description"
          content="Reach out to our team for affordable and professional IT solutions including web, app, and digital marketing."
        />
        <meta
          name="twitter:image"
          content="https://hanuwebtechsolutions.com/apprnd2.webp"
        />
      </Head>
      {children}
    </>
  );
}
