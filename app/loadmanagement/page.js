import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingSpinner from "../loading";

const LoadSection = dynamic(
  () => import("@/components/loadManagement/loadSection"),
  {
    loading: () => <LoadingSpinner/>,
  }
);
const NavbarWebsite = dynamic(
  () => import("@/components/website/navbarWebsite"),
  {
    loading: () => <LoadingSpinner/>,
  }
);


export default function LoadManagement() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <NavbarWebsite
          header={"Efficient Load Balancing for Website & App Performance"}
          description={
            "We implement intelligent load balancing solutions to evenly distribute traffic across servers, ensuring your website and app remain fast, stable, and highly available—even during peak usage."
          }
          route={"loadMangement"}
        />
        <LoadSection />
      </Suspense>
    </>
  );
}
