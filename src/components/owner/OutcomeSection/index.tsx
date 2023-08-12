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
          <span className="ml-1 text-amber-500 font-medium text-sm">
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
          <span className="ml-1 text-amber-500 font-medium text-sm">
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
    <div className="mt-0 md:mt-24 h-[120vh] mx-auto relative ">
      <div ref={backgroundRef} className="w-full h-full absolute">
        <ShadowBoxTop className="bg-black w-full h-36 z-10 absolute -top-36 shadow-black"></ShadowBoxTop>
        <div className="absolute w-full h-full opacity-50">
          <Image
            src="/images/owner/outcome-section/image-01.jpg"
            layout="fill"
            objectFit="cover"
            style={{ opacity: backgroundOpacity }}
            alt=""
          />
        </div>
        <ShadowBoxBottom className="bg-black w-full h-36 absolute -bottom-36 shadow-black"></ShadowBoxBottom>
      </div>
      <div className="w-full z-20 max-w-7xl px-8 lg:px-44 pb-32 pt-36 h-full lg:shrink-0">
        <div className="sticky top-[25%] mt-4">
          <div className="gap-8 md:gap-4 flex flex-col">
            <AnimatedTitle>{t("OutcomeSection.header1")}</AnimatedTitle>
            <AnimatedTitle>{t("OutcomeSection.header2")}</AnimatedTitle>
          </div>
          <dl className="flex flex-col sm:grid grid-cols-2 mt-20 gap-x-12 gap-y-8 sm:gap-y-12 ">
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
                <p className="text-lg lg:text-xl font-bold leading-6 text-indigo-400">
                  {outcome.title}
                </p>
                <OutcomeValue
                  value={parseInt(outcome.value)}
                  unit={outcome.unit}
                />
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSection;
