"use client";

import { FC, useEffect, useState } from "react";
import LogoAnimation from "./LogoAnimation";
import AnimCircleVideo from "./AnimCircleVideo";
import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";

const BannerSection: FC = () => {
  const t = useTranslations("section");
  const [titleShow, setTitleShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setTitleShow(true), 1500);
  });

  return (
    <div className="min-h-[70svh] flex items-center justify-center">
      <div className="flex flex-col w-full h-full relative justify-center items-center">
        <LogoAnimation />
        {/* <div className="h-1">
          {titleShow && (
            <AnimatedTitle align="center" size="lg">
              {t("BannerSection.bannerTitle")}
            </AnimatedTitle>
          )}
        </div> */}
        <AnimCircleVideo />
      </div>
    </div>
  );
};

export default BannerSection;
