import BannerSection from "@components/sections/BannerSection";
import TeamSection from "@components/sections/TeamSection";
import OutcomeSection from "@components/sections/OutcomeSection";
import { NextPage } from "next";
import ObjectiveSection from "@components/sections/ObjectiveSection";

const MainPage: NextPage = () => {
  return (
    <>
      <BannerSection />
      <OutcomeSection />
      <ObjectiveSection />
      <TeamSection />
    </>
  );
};

export default MainPage;
