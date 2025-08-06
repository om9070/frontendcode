import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import LoadingSpinner from "../loading";
const NavbarWebsite = dynamic(
  () => import("@/components/website/navbarWebsite"),
  {
    loading: () => <LoadingSpinner/>,
  }
);

const CardsSection = dynamic(
  () => import("@/components/website/cardsSection"),
  {
    loading: () => <LoadingSpinner/>,
  }
);

const ThreeImage = dynamic(() => import("@/components/global/threeImage"), {
  loading: () => <LoadingSpinner/>,
});


export default function Website() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <NavbarWebsite
          header={"Build a Website That Grows Your Business"}
          description={
            "We design and develop modern, responsive websites tailored to your business goals—optimized for speed, security, and user experience."
          }
          route={"Website"}
        />
        <CardsSection />
        <ThreeImage
          img1={"/db1.webp"}
          img2={"/db2.webp"}
          img3={"/db3.webp"}
          title={"Robust Backend & Scalable Database Solutions"}
          description={
            "We architect and develop secure, high-performance backend systems with scalable databases to power your applications. From API development to real-time data processing, our backend services ensure reliability, speed, and seamless data flow—built using modern technologies like Node.js, Express, MongoDB, PostgreSQL, and more."
          }
        />
      </Suspense>
    </>
  );
}
