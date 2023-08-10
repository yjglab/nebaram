"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC } from "react";
import HistoryGraph from "./HistoryGraph";

const HistorySection: FC = () => {
  const t = useTranslations("owner");

  return (
    <div className="px-4 lg:px-[10%] xl:px-[18%] 2xl:px-[28%]  my-36 flex flex-col items-center">
      <div className="w-full h-full flex flex-col items-center ">
        <div className="text-center w-full ">
          <div className="flex flex-col items-center gap-2 md:gap-4">
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
