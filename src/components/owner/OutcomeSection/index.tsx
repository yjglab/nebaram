"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { motion, useInView, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { FC, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import Image from "next/image";
import OutcomeValue from "./OutcomeValue";

const ShadowBoxTop = styled.div`
  box-shadow: 0 30px 130px 90px black;
`;
const ShadowBoxBottom = styled.div`
  box-shadow: 0 -30px 130px 90px black;
`;

const OutcomeSection: FC = () => {
  const t = useTranslations("owner");
  const backgroundRef = useRef(null);
  const backgroundInView = useInView(backgroundRef);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  const outcomes = [
    {
      id: 1,
      title: t("OutcomeSection.title1"),
      value: t("OutcomeSection.value1", {
        days: dayjs().diff(dayjs("2020-07-08"), "day"),
      }),
      unit: t("OutcomeSection.value1Unit"),
    },
    {
      id: 2,
      title: t("OutcomeSection.title2"),
      value: t("OutcomeSection.value2", {
        attends: "3000",
      }),
      unit: t("OutcomeSection.value2Unit"),
    },
    {
      id: 3,
      title: t.rich("OutcomeSection.title3", {
        span: (children) => (
          <span className="ml-1 text-sm font-medium text-amber-500">
            {children}
          </span>
        ),
      }),
      value: t("OutcomeSection.value3", {
        services: 18,
      }),
      unit: t("OutcomeSection.value3Unit"),
    },
    {
      id: 4,
      title: t.rich("OutcomeSection.title4", {
        span: (children) => (
          <span className="ml-1 text-sm font-medium text-amber-500">
            {children}
          </span>
        ),
      }),
      value: t("OutcomeSection.value4", {
        awards: 1,
      }),
      unit: t("OutcomeSection.value4Unit"),
    },
  ];

  useEffect(() => {
    const scrollHandler = () => {
      const opacity = window.scrollY / 1000 - 0.6;
      const downValue = (window.scrollY / 1000 - 2) * 3;
      if (opacity <= 1) {
        setBackgroundOpacity(opacity);
      } else {
        setBackgroundOpacity(1 - downValue);
      }
    };
    if (backgroundInView) {
      window.addEventListener("scroll", scrollHandler);
    }
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [backgroundInView, backgroundOpacity, setBackgroundOpacity]);

  return (
    <div className="relative mx-auto mt-0 h-[120vh] md:mt-24 ">
      <div ref={backgroundRef} className="absolute h-full w-full">
        <ShadowBoxTop className="absolute -top-36 z-10 h-36 w-full bg-black shadow-black"></ShadowBoxTop>
        <div className="absolute h-full w-full opacity-50">
          <Image
            src="/images/owner/outcome-section/outcome-background.jpeg"
            layout="fill"
            objectFit="cover"
            style={{ opacity: backgroundOpacity }}
            alt="outcome-section/image-01"
          />
        </div>
        <ShadowBoxBottom className="absolute -bottom-36 h-36 w-full bg-black shadow-black"></ShadowBoxBottom>
      </div>
      <div className="z-20 h-full w-full max-w-7xl px-8 pb-32 pt-36 lg:shrink-0 lg:px-44">
        <div className="sticky top-[25%] mt-4">
          <div className="flex flex-col gap-8 md:gap-4">
            <AnimatedTitle>{t("OutcomeSection.header1")}</AnimatedTitle>
            <AnimatedTitle>{t("OutcomeSection.header2")}</AnimatedTitle>
          </div>
          <div className="mt-20 flex grid-cols-2 flex-col gap-x-12 gap-y-8 sm:grid sm:gap-y-12 ">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.id}
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
                <p className="text-lg font-bold leading-6 text-indigo-400 lg:text-xl">
                  {outcome.title}
                </p>
                <OutcomeValue
                  value={parseInt(outcome.value)}
                  unit={outcome.unit}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSection;
