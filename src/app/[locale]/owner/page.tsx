import BannerSection from "@components/owner/BannerSection";
import HistorySection from "@components/owner/HistorySection";
import ObjectiveSection from "@components/owner/ObjectiveSection";
import OutcomeSection from "@components/owner/OutcomeSection";
import SkillSection from "@components/owner/SkillSection";
import { NextPage } from "next";

const OwnerPage: NextPage = () => {
  return (
    <>
      <BannerSection />
      <OutcomeSection />
      <ObjectiveSection />
      <HistorySection />
      <SkillSection />
    </>
  );
};

export default OwnerPage;
