"use client";

import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ScrollIndicatorKeyframe } from "@constants/animations";

const ScrollIndicator = styled.div`
  animation: ${ScrollIndicatorKeyframe} 2.5s ease-out infinite;
`;

const BannerSection: FC = () => {
  const t = useTranslations("owner");

  return (
    <div className="z-20  min-h-screen flex items-center relative justify-center">
      <div className="absolute z-10 top-[15%] flex flex-col gap-4">
        <AnimatedTitle align="center" size="lg">
          {t("BannerSection.title1")}
        </AnimatedTitle>
        <AnimatedTitle align="center" size="lg">
          {t("BannerSection.title2")}
        </AnimatedTitle>
      </div>
      <div className="flex flex-col w-full h-full relative top-8 justify-center items-center"></div>
      <ScrollIndicator className="hover:translate-y-2 duration-300 absolute bottom-14 mx-auto">
        <ChevronDownIcon className="w-14 text-white" />
      </ScrollIndicator>
    </div>
  );
};

export default BannerSection;
