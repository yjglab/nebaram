import DescriptSection from "@components/projects/details/DescriptSection";
import HeaderSection from "@components/projects/details/HeaderSection";
import SliderSection from "@components/projects/details/SliderSection";
import { NextPage } from "next";

const ProjectDetailPage: NextPage = () => {
  return (
    <main>
      <HeaderSection />
      <SliderSection />
      <DescriptSection />
    </main>
  );
};

export default ProjectDetailPage;
