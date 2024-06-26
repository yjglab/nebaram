"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import { bannerOnDelay } from ".";
import { useTranslation } from "@app/i18n/client";
import AnimatedTitle from "@app/_common/parts/AnimatedTitle";

interface Props {
  lng: string;
  bannerOn: boolean;
}

const BannerTitle: FC<Props> = ({ lng, bannerOn }) => {
  const { t } = useTranslation(lng, "owner");

  return (
    <header className="z-20 mt-32 flex w-full flex-col items-center md:mt-40">
      <h1
        className={classNames(
          bannerOn
            ? "top-0 scale-[0.55] md:scale-[0.6] gap-0 md:gap-2 sm:gap-4"
            : "top-[35vh] scale-[1] md:scale-[2] gap-4",
          "flex-col relative z-10 duration-1000 flex "
        )}
      >
        <AnimatedTitle align="center" size="xs">
          {t("BannerSection.title.0")}
        </AnimatedTitle>
      </h1>

      <motion.h2
        className="mt-0 text-3xl font-semibold sm:text-4xl md:mt-5 lg:text-6xl "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1.5,
          delay: bannerOnDelay * 0.001 + 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t("BannerSection.title.1")}
      </motion.h2>
    </header>
  );
};

export default BannerTitle;
