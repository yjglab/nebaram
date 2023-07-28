"use client";

import styled from "@emotion/styled";
import { clogo } from "@constants/images";
import { FC, useEffect, useState } from "react";
import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { BannerLogoKeyframe } from "@constants/animations";
import BannerParticles from "./BannerParticles";

const LogoSpinner = styled.img`
  animation: ${BannerLogoKeyframe} 4s ease-in-out forwards;
`;

const LogoAnimation: FC = () => {
  const t = useTranslations("section");
  const [titleShow, setTitleShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setTitleShow(true), 2000);
  });

  return (
    <div className="mx-auto relative text-center flex flex-col justify-center items-center">
      {/* <BannerParticles /> */}
      <LogoSpinner src={clogo} className="w-36" />
      <div className="h-6">
        {titleShow && (
          <AnimatedTitle align="center">
            {t("BannerSection.bannerTitle")}
          </AnimatedTitle>
        )}
      </div>
    </div>
  );
};

export default LogoAnimation;
