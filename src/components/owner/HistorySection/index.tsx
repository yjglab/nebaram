"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC } from "react";
import HistoryGraph from "./HistoryGraph";

const HistorySection: FC = () => {
  const t = useTranslations("owner");

  return (
    <div className="px-4 lg:px-[10%] h-screen py-0 md:py-24 sm:py-44 flex flex-col items-center">
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
