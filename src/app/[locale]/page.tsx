"use client";

import BannerSection from "@components/about/BannerSection";
import TeamSection from "@components/about/TeamSection";
import OutcomeSection from "@components/about/OutcomeSection";
import { NextPage } from "next";
import ObjectiveSection from "@components/about/ObjectiveSection";
import HistorySection from "@components/about/HistorySection";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainPage: NextPage = () => {
  const navigator = useRouter();

  useEffect(() => {
    navigator.back();
  }, [navigator]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
