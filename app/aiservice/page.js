
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import LoadingSpinner from "../loading";

const Aicomponent = dynamic(
  () => import("@/components/aicomponent/aicomponent"),
  {
    loading: () => <LoadingSpinner/>,
  }
);

const LeadSection = dynamic(
  () => import("@/components/leadgenerater/leadSection"),
  {
    loading: () => <LoadingSpinner/>,
  }
);

export default function AiService() {
  return (
    <>
      <Suspense fallback={<p>Loading component...</p>}>
        <LeadSection
          title={"Artificial Intelligence"}
          route={"AI Section"}
        />
        <Aicomponent/>
      </Suspense>
    </>
  );
}
