import HeaderSection from "@components/projects/details/HeaderSection";
import SliderSection from "@components/projects/details/SliderSection";
import { NextPage } from "next";

const ProjectDetailPage: NextPage = () => {
  return (
    <>
      <HeaderSection />
      <SliderSection />
    </>
  );
};

export default ProjectDetailPage;
