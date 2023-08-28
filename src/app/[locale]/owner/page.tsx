"use client";

import BannerSection from "@components/owner/BannerSection";
import HistorySection from "@components/owner/HistorySection";
import ObjectiveSection from "@components/owner/ObjectiveSection";
import OutcomeSection from "@components/owner/OutcomeSection";
import QuestionSection from "@components/owner/QuestionSection";
import SkillSection from "@components/owner/SkillSection";
import { NextPage } from "next";
import { useEffect } from "react";

const OwnerPage: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BannerSection />
      <OutcomeSection />
      <ObjectiveSection />
      <HistorySection />
      <SkillSection />
      <QuestionSection />
    </main>
  );
};

export default OwnerPage;
