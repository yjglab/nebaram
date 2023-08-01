import BannerSection from "@components/sections/BannerSection";
import TeamSection from "@components/sections/TeamSection";
import OutcomeSection from "@components/sections/OutcomeSection";
import { NextPage } from "next";

const MainPage: NextPage = () => {
  return (
    <>
      <BannerSection />
      <OutcomeSection />
      <TeamSection />
    </>
  );
};

export default MainPage;
