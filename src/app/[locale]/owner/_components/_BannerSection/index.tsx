"use client";

import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ScrollIndicatorKeyframe } from "@constants/animations";
import classNames from "classnames";
import BannerCard from "./BannerCard";
import BannerTitle from "./BannerTitle";
import BannerVideo from "./BannerVideo";

export const bannerOnDelay = 1300;
const ScrollIndicator = styled.div`
  animation: ${ScrollIndicatorKeyframe} 2.5s ease-out infinite;
`;

const BannerSection: FC = () => {
  const [bannerOn, setBannerOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBannerOn(true);
    }, bannerOnDelay);
  }, []);

  return (
    <section className="z-20 min-h-screen w-full flex-col relative flex h-full justify-center">
      <BannerVideo />
      <BannerTitle bannerOn={bannerOn} />
      <BannerCard />
      <ScrollIndicator className="z-20 mx-auto mt-16 md:mt-32">
        <ChevronDownIcon
          className={classNames(
            bannerOn ? "opacity-100" : "opacity-0",
            "w-14 text-white duration-300"
          )}
        />
      </ScrollIndicator>
    </section>
  );
};

export default BannerSection;
