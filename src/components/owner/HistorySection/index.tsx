"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC } from "react";
import HistoryGraph from "./HistoryGraph";

const HistorySection: FC = () => {
  const t = useTranslations("owner");

  return (
    <section className="my-36 h-full w-full flex flex-col items-center overflow-hidden  px-4 lg:px-[10%] xl:px-[18%] 2xl:px-[28%]">
      <header className="w-full mt-14 flex flex-col items-center gap-2 md:gap-4">
        <AnimatedTitle size="lg" align="center">
          {t("HistorySection.sectionTitle1")}
        </AnimatedTitle>
        <AnimatedTitle size="lg" align="center">
          {t("HistorySection.sectionTitle2")}
        </AnimatedTitle>
      </header>
      <HistoryGraph />
    </section>
  );
};

export default HistorySection;
