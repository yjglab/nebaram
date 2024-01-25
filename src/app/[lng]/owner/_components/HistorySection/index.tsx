"use client";

import { FC } from "react";
import HistoryGraph from "./HistoryGraph";
import { useTranslation } from "@app/i18n/client";
import AnimatedTitle from "@app/_common/parts/AnimatedTitle";

interface Props {
  lng: string;
}
const HistorySection: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");

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
      <HistoryGraph lng={lng} />
    </section>
  );
};

export default HistorySection;
