import LeadSection from "@/components/leadgenerater/leadSection";
import React, { Suspense } from "react";

export default function Influencers() {
  return (
    <>
      <Suspense fallback={<p>Loading component...</p>}>
        <LeadSection
          title={"Influencers Support"}
          route={"Influencers Section"}
        />
      </Suspense>
    </>
  );
}
