"use client";

import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ScrollIndicatorKeyframe } from "@constants/animations";
import classNames from "classnames";

export const bannerOnDelay = 2000;
const ScrollIndicator = styled.div`
  animation: ${ScrollIndicatorKeyframe} 2.5s ease-out infinite;
`;

const BannerSection: FC = () => {
  const t = useTranslations("owner");
  const [bannerOn, setBannerOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBannerOn(true);
    }, bannerOnDelay);
  });
  return (
    <div className="z-20 w-full min-h-screen flex items-center relative justify-center">
      <div
        className={classNames(
          bannerOn ? "top-[15%] scale-75 gap-2 sm:gap-4" : "top-[45%] gap-4",
          "absolute flex-col z-10 w-full duration-1000 flex "
        )}
      >
        <AnimatedTitle align="center" size="lg">
          {t("BannerSection.title1")}
        </AnimatedTitle>
        <AnimatedTitle align="center" size="lg">
          {t("BannerSection.title2")}
        </AnimatedTitle>
      </div>
      {/* <div className="flex flex-col w-full h-full relative top-8 justify-center items-center"></div> */}
      <ScrollIndicator className="absolute bottom-14 mx-auto">
        <ChevronDownIcon
          className={classNames(
            bannerOn ? "opacity-100" : "opacity-0",
            "w-14 text-white duration-300"
          )}
        />
      </ScrollIndicator>
    </div>
  );
};

export default BannerSection;
