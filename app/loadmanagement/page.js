import LoadSection from "@/components/loadManagement/loadSection";
import NavbarWebsite from "@/components/website/navbarWebsite";
import React from "react";

export default function LoadManagement() {
  return (
    <>
      <NavbarWebsite
        header={"Efficient Load Balancing for Website & App Performance"}
        description={
          "We implement intelligent load balancing solutions to evenly distribute traffic across servers, ensuring your website and app remain fast, stable, and highly available—even during peak usage."
        }
        route={"loadMangement"}
      />
      <LoadSection />
    </>
  );
}
