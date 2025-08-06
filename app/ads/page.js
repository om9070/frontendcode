import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingSpinner from "../loading";

const LeadSection = dynamic(
  () => import("@/components/leadgenerater/leadSection"),
  {
    loading: () => <LoadingSpinner/>,
  }
);

const SocialSection = dynamic(
  () => import("@/components/socialMedia/socialSection"),
  {
    loading: () => <LoadingSpinner/>,
  }
);


export default function advertising() {
  return (
    <>
      <Suspense fallback={<p>Loading component...</p>}>
        <LeadSection title={"Social Media Ads"} route={"ads management"} />
        <SocialSection />
      </Suspense>
    </>
  );
}
