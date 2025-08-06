import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import LoadingSpinner from "../loading";

const ContactSection = dynamic(() => import("@/components/contact/contact"), {
  loading: () => <LoadingSpinner/>,
});

export default function ContactPage() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <ContactSection />
      </Suspense>
    </>
  );
}
