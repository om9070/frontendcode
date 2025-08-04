import React from "react";
import LeadSection from "@/components/leadgenerater/leadSection";
import SectionA from "@/components/leadgenerater/SectionA/sectionA";
import ImageCard from "@/components/leadgenerater/imageCard/imageCard";
import Background from "@/components/global/background";
import ThreeImage from "@/components/global/threeImage";

export default function LeadGenerater() {
  return (
    <>
      <LeadSection title={"Lead Generation"} route={"Load management"}/>
      <SectionA />
      <ImageCard />
      <ThreeImage
        img1={"/digital/digital4.jpg"}
        img2={"/digital/digital5.jpg"}
        img3={"/digital/digital6.jpg"}
        title={"End-to-End Lead Generation Built for High Performance"}
        description={
          "We help businesses capture and convert the right audience through a holistic lead generation approach that blends data, design, and strategy. From precision-targeted advertising to automated email funnels and deep performance tracking, every part of our process is built to drive growth and measurable results. Whether you're scaling a startup or optimizing an established funnel, we provide the tools and expertise to fuel your pipeline with qualified leads — consistently and effectively."
        }
      />
    </>
  );
}
