"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import HistoryGraph from "./HistoryGraph";

const HistorySection: FC = () => {
  const t = useTranslations("about");

  return (
    <div className="px-[4vw] lg:px-[24vw] h-screen py-20 sm:py-44 flex flex-col items-center">
      <div className="text-center w-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <AnimatedTitle size="lg" align="center">
            {t("HistorySection.sectionTitle1")}
          </AnimatedTitle>
          <AnimatedTitle size="lg" align="center">
            {t("HistorySection.sectionTitle2")}
          </AnimatedTitle>
        </div>
      </div>
      <HistoryGraph />
    </div>
  );
};

export default HistorySection;
