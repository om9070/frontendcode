import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import LoadingSpinner from "../loading";

const SeoSection = dynamic(() => import("@/components/seoSection/seoweb"), {
  loading: () => <LoadingSpinner/>,
});
const NavbarWebsite = dynamic(
  () => import("@/components/website/navbarWebsite"),
  {
    loading: () => <LoadingSpinner/>,
  }
);


export default function Seo() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <NavbarWebsite
          header={"Boost Your Online Visibility with Expert SEO"}
          description={
            "Our SEO services are designed to improve your search engine rankings, increase organic traffic, and drive qualified leads."
          }
          route={"seo "}
        />
        <SeoSection />
      </Suspense>
    </>
  );
}
