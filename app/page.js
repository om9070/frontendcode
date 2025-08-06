import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "./loading";

const ActcionTItle = dynamic(() => import("@/components/home/actionTitle"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const Carousel = dynamic(() => import("@/components/home/carousel"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const Contact = dynamic(() => import("@/components/home/contact"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const Faq = dynamic(() => import("@/components/home/faq"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const Map = dynamic(() => import("@/components/home/map"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const Project = dynamic(() => import("@/components/home/project"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const Review = dynamic(() => import("@/components/home/review"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const Services = dynamic(() => import("@/components/home/services"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const Technology = dynamic(() => import("@/components/home/technologies"), {
  loading: () => <p><LoadingSpinner/></p>,
});

const WorkIdea = dynamic(() => import("@/components/home/workIdea"), {
  loading: () => <p><LoadingSpinner/></p>,
});

export default function Home() {
  return (
    <>
      {/* home */}
      <Suspense fallback={<LoadingSpinner/>}>
        <Carousel />
        <ActcionTItle />
        <Technology />
        <Services />
        <Faq />
        <WorkIdea />
        <Project />
        <Review />
        <Map />
        <Contact />
      </Suspense>
    </>
  );
}
