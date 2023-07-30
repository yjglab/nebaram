"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { motion } from "framer-motion";

const IntroSection: FC = () => {
  const t = useTranslations("section");

  return (
    <div className="py-24 sm:py-36">
      <div className="text-center">
        <AnimatedTitle align="center">{t("IntroSection.title")}</AnimatedTitle>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto mt-6 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("IntroSection.description1")}
          </p>
          <p className="mx-auto mt-0.5 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("IntroSection.description2")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;
