import BannerSection from "@components/sections/BannerSection";
import IntroSection from "@components/sections/IntroSection";
import { NextPage } from "next";
import Head from "next/head";

const MainPage: NextPage = () => {
  return (
    <>
      <BannerSection />
      <IntroSection />
    </>
  );
};

export default MainPage;
