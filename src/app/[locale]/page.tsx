"use client";

import BannerSection from "@components/about/BannerSection";
import TeamSection from "@components/about/TeamSection";
import OutcomeSection from "@components/about/OutcomeSection";
import { NextPage } from "next";
import ObjectiveSection from "@components/about/ObjectiveSection";
import HistorySection from "@components/about/HistorySection";
import { fallbackLocale, processLocale } from "@locales";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainPage: NextPage = () => {
  const navigator = useRouter();

  useEffect(() => {
    const locale = processLocale(window.navigator.language) ?? fallbackLocale;
    navigator.replace(`/${locale}/owner`);
  }, [navigator, window.navigator.language]);

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
