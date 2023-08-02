import BannerSection from "@components/about/BannerSection";
import TeamSection from "@components/about/TeamSection";
import OutcomeSection from "@components/about/OutcomeSection";
import { NextPage } from "next";
import ObjectiveSection from "@components/about/ObjectiveSection";
import HistorySection from "@components/about/HistorySection";

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
