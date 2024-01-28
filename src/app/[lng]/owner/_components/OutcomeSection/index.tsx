"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import dayjs from "dayjs";
import OutcomeValue from "./OutcomeValue";
import { useTranslation } from "@app/i18n/client";
import AnimatedTitle from "@app/_common/parts/AnimatedTitle";
import { Trans } from "react-i18next";
import CoverBackground from "./CoverBackground";

interface Outcome {
  title: string;
  value: string;
  valueUnit: string;
}
interface Props {
  lng: string;
}
const OutcomeSection: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");

  const outcomes: Outcome[] = t("OutcomeSection.contents", {
    returnObjects: true,
    days: dayjs().diff(dayjs("2020-07-08"), "day"),
    attends: 3200,
    services: 18,
    awards: 3,
  });

  return (
    <section className="relative mx-auto mt-0 h-[120vh] md:mt-24 ">
      <CoverBackground />
      <article className="z-20 h-full w-full max-w-7xl px-8 pb-32 pt-36 lg:shrink-0 lg:px-44">
        <div className="sticky top-[25%] mt-4">
          <hgroup className="flex flex-col gap-8 md:gap-4">
            <AnimatedTitle>{t("OutcomeSection.header.0")}</AnimatedTitle>
            <AnimatedTitle>{t("OutcomeSection.header.1")}</AnimatedTitle>
          </hgroup>
          <div className="mt-20 flex grid-cols-2 flex-col gap-x-12 gap-y-8 sm:grid sm:gap-y-12 ">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.title}
                className="flex flex-col"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <p className="text-lg font-bold leading-6 text-indigo-300 lg:text-xl">
                  <Trans
                    components={[
                      <span className="ml-1 text-sm font-medium text-amber-500"></span>,
                    ]}
                  >
                    {outcome.title}
                  </Trans>
                </p>
                <OutcomeValue
                  value={parseInt(outcome.value)}
                  valueUnit={outcome.valueUnit}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default OutcomeSection;
