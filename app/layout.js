import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Oswald } from "next/font/google";
import Head from "next/head";
import dynamic from "next/dynamic";
import LoadingSpinner from "./loading";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  loading: () => <p><LoadingSpinner /></p>,
});


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], // or just the ones you use
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "hanuwebtechsolutions",
  description:
    "hanuwebtechsolutions is one of the best Bihari software companies in India, offering high-quality custom software development tailored to your budget. We build web, mobile, and digital solutions to help your business grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          hanuwebtechsolutions - Affordable Web, App & Digital Marketing Services
        </title>
        <meta
          name="description"
          content="hanuwebtechsolutions is one of the best Bihari software companies in India, offering custom web, app, and digital marketing solutions within your budget."
        />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="hanuwebtechsolutions - Affordable IT Solutions"
        />
        <meta
          property="og:description"
          content="Custom web, mobile, and digital marketing services tailored to your budget."
        />
        <meta
          property="og:image"
          content="https://hanuwebtechsolutions.com/coding.webp"
        />
        <meta property="og:url" content="https://hanuwebtechsolutions.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="hanuwebtechsolutions - Affordable IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Budget-friendly custom web, mobile, and digital marketing services in India."
        />
        <meta
          name="twitter:image"
          content="https://hanuwebtechsolutions.com/coding.webp"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://hanuwebtechsolutions.com" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiasedcss ${oswald.className}`}
      >
        <Navbar />
        {children}
        <Footer />
        <ChatWidget/>
      </body>
    </html>
  );
}
