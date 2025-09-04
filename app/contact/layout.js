import Head from "next/head";

export default function PageRoot({ children }) {
  return (
    <>
      <Head>
        <title>
          Contact vanapextechnologies | Web, App & Digital Marketing Services in
          India
        </title>
        <meta
          name="description"
          content="Get in touch with vanapextechnologies for affordable and high-quality web development, app development, and digital marketing services. Let's discuss your project today!"
        />
        <meta
          name="keywords"
          content="contact vanapextechnologies, contact software company India, web development contact, IT service inquiries, app development support, digital marketing contact"
        />

        <meta
          property="og:title"
          content="Contact vanapextechnologies | Web, App & Digital Marketing Services"
        />
        <meta
          property="og:description"
          content="Have a project in mind? Contact vanapextechnologies for expert web, app, and digital marketing solutions tailored to your needs."
        />
        <meta
          property="og:image"
          content="https://vanapextechnologies.com/apprnd2.webp"
        />
        <meta property="og:url" content="https://vanapextechnologies.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact vanapextechnologies | Let's Build Your Project"
        />
        <meta
          name="twitter:description"
          content="Reach out to our team for affordable and professional IT solutions including web, app, and digital marketing."
        />
        <meta
          name="twitter:image"
          content="https://vanapextechnologies.com/apprnd2.webp"
        />
      </Head>
      {children}
    </>
  );
}
