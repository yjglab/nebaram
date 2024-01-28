"use client";

import { FC, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import BannerCard from "./BannerCard";
import BannerTitle from "./BannerTitle";
import BannerVideo from "./BannerVideo";

export const bannerOnDelay = 1300;

interface Props {
  lng: string;
}
const BannerSection: FC<Props> = ({ lng }) => {
  const [bannerOn, setBannerOn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const bannerTimer = setTimeout(() => {
      setBannerOn(true);
    }, bannerOnDelay);
    return () => {
      clearTimeout(bannerTimer);
    };
  }, []);

  return (
    <section className="z-20 min-h-screen w-full flex-col relative flex h-full justify-center">
      <BannerVideo />
      <BannerTitle lng={lng} bannerOn={bannerOn} />
      <BannerCard />
      <div className="animate-scrollIndicate z-20 mx-auto mt-16 md:mt-32">
        <ChevronDownIcon
          className={classNames(
            bannerOn ? "opacity-100" : "opacity-0",
            "w-14 text-white duration-300"
          )}
        />
      </div>
    </section>
  );
};

export default BannerSection;
