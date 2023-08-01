import BannerSection from "@components/sections/BannerSection";
import TeamSection from "@components/sections/TeamSection";
import OutcomeSection from "@components/sections/OutcomeSection";
import { NextPage } from "next";
import ObjectiveSection from "@components/sections/ObjectiveSection";
import HistorySection from "@components/sections/HistorySection";

const MainPage: NextPage = () => {
  return (
    <>
      <BannerSection />
      <OutcomeSection />
      <ObjectiveSection />
      <HistorySection />
      <TeamSection />
    </>
  );
};

export default MainPage;
