"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC } from "react";
import HistoryGraph from "./HistoryGraph";

const HistorySection: FC = () => {
  const t = useTranslations("owner");

  return (
    <div className="my-36 flex flex-col items-center overflow-hidden  px-4 lg:px-[10%] xl:px-[18%] 2xl:px-[28%]">
      <div className="flex h-full w-full flex-col items-center ">
        <div className="w-full">
          <div className="mt-14 flex flex-col items-center gap-2 md:gap-4">
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
    </div>
  );
};

export default HistorySection;
