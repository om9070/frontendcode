import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingSpinner from "../loading";

const LeadSection = dynamic(
  () => import("@/components/leadgenerater/leadSection"),
  {
    loading: () => <LoadingSpinner/>,
  }
);

const SectionA = dynamic(
  () => import("@/components/leadgenerater/SectionA/sectionA"),
  {
    loading: () => <LoadingSpinner/>,
  }
);

const ImageCard = dynamic(
  () => import("@/components/leadgenerater/imageCard/imageCard"),
  {
    loading: () => <LoadingSpinner/>,
  }
);

const ThreeImage = dynamic(() => import("@/components/global/threeImage"), {
  loading: () => <LoadingSpinner/>,
});


export default function LeadGenerater() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <LeadSection title={"Lead Generation"} route={"Load management"} />
        <SectionA />
        <ImageCard />
        <ThreeImage
          img1={"/digital/digital4.webp"}
          img2={"/digital/digital5.webp"}
          img3={"/digital/digital6.webp"}
          title={"End-to-End Lead Generation Built for High Performance"}
          description={
            "We help businesses capture and convert the right audience through a holistic lead generation approach that blends data, design, and strategy. From precision-targeted advertising to automated email funnels and deep performance tracking, every part of our process is built to drive growth and measurable results. Whether you're scaling a startup or optimizing an established funnel, we provide the tools and expertise to fuel your pipeline with qualified leads — consistently and effectively."
          }
        />
      </Suspense>
    </>
  );
}
