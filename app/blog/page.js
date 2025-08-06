import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import LoadingSpinner from "../loading";

const BlogSection = dynamic(() => import("@/components/blog/blogSection"), {
  loading: () => <LoadingSpinner/>,
});


export default function Blog() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <BlogSection />
      </Suspense>
    </>
  );
}
