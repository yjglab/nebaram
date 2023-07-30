"use client";

import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import LogoAnimation from "./LogoAnimation";
import AnimCircleVideo from "./AnimCircleVideo";
import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ScrollIndicatorKeyframe } from "@constants/animations";

const ScrollIndicator = styled.div`
  animation: ${ScrollIndicatorKeyframe} 2.5s ease-out infinite;
`;

const BannerSection: FC = () => {
  const t = useTranslations("section");

  const [introShow, setIntroShow] = useState(false);
  const [introVideoShow, setIntroVideoShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setIntroShow(true), 1500);
    setTimeout(() => setIntroVideoShow(true), 2000);
  });

  return (
    <div className="min-h-screen flex items-center relative justify-center">
      <div className="absolute z-10 top-[15%]">
        {introShow && (
          <AnimatedTitle align="center" size="lg">
            {t("BannerSection.title")}
          </AnimatedTitle>
        )}
      </div>
      <div className="flex flex-col w-full h-full relative top-8 justify-center items-center">
        <LogoAnimation />
        <AnimCircleVideo introVideoShow={introVideoShow} />
      </div>
      <ScrollIndicator className="hover:translate-y-2 duration-300 absolute bottom-6 mx-auto">
        <ChevronDownIcon className="w-16 text-indigo-400" />
      </ScrollIndicator>
    </div>
  );
};

export default BannerSection;
