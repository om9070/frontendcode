import CardApplication from "@/components/application/cardApplication";
import ActcionTItle from "@/components/home/actionTitle";
import Carousel from "@/components/home/carousel";
import Contact from "@/components/home/contact";
import Faq from "@/components/home/faq";
import Map from "@/components/home/map";
import Project from "@/components/home/project";
import Review from "@/components/home/review";
import Services from "@/components/home/services";
import Technology from "@/components/home/technologies";
import WorkIdea from "@/components/home/workIdea";
import LoadSection from "@/components/loadManagement/loadSection";
import Seoweb from "@/components/seoSection/seoweb";
export default function Home() {
  return (
    <>
    {/* home */}
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
      
      {/* website */}

    </>
  );
}
