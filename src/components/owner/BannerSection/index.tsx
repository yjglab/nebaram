"use client";

import { FC, useState } from "react";
import styled from "@emotion/styled";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ScrollIndicatorKeyframe } from "@constants/animations";
import classNames from "classnames";
import BannerCard from "./BannerCard";
import BannerTitle from "./BannerTitle";

export const bannerOnDelay = 1600;
const ScrollIndicator = styled.div`
  animation: ${ScrollIndicatorKeyframe} 2.5s ease-out infinite;
`;

const BannerSection: FC = () => {
  const [bannerOn, setBannerOn] = useState(false);

  setTimeout(() => {
    setBannerOn(true);
  }, bannerOnDelay);

  return (
    <div className="z-20 w-full h-screen flex items-center relative justify-center">
      <BannerTitle bannerOn={bannerOn} />
      <BannerCard />
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
