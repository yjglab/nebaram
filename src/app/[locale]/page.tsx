import BannerSection from "@components/sections/BannerSection";
import IntroSection from "@components/sections/IntroSection";
import OutcomeSection from "@components/sections/OutcomeSection";
import { NextPage } from "next";

const MainPage: NextPage = () => {
  return (
    <>
      <BannerSection />
      <OutcomeSection />
      <IntroSection />
    </>
  );
};

export default MainPage;
