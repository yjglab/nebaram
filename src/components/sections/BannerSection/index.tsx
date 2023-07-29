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
      <div className="flex flex-col w-full h-full relative bottom-20 justify-center items-center">
        <LogoAnimation />
        <AnimCircleVideo introVideoShow={introVideoShow} />
      </div>
      <div className="absolute bottom-[20%]">
        {introShow && (
          <AnimatedTitle align="center" size="lg">
            {t("BannerSection.bannerTitle")}
          </AnimatedTitle>
        )}
      </div>
      <ScrollIndicator className="hover:translate-y-2 duration-300 absolute bottom-6 mx-auto">
        <ChevronDownIcon className="w-16 text-indigo-400" />
      </ScrollIndicator>
    </div>
  );
};

export default BannerSection;
