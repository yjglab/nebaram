"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { motion, useInView, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { FC, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import Image from "next/image";

const ShadowBoxTop = styled.div`
  box-shadow: 0 30px 130px 90px black;
`;
const ShadowBoxBottom = styled.div`
  box-shadow: 0 -30px 130px 90px black;
`;
const OutcomeSection: FC = () => {
  const t = useTranslations("section");
  const backgroundRef = useRef(null);
  const backgroundInView = useInView(backgroundRef);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const opacity = window.scrollY / 1000 - 0.6;
      const downValue = (window.scrollY / 1000 - 2) * 2;
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

  const outcomeLists = [
    {
      id: 1,
      title: t("OutcomeSection.title1"),
      value: t("OutcomeSection.value1", {
        days: dayjs().diff(dayjs("2021-02-08"), "day"),
      }),
    },
    {
      id: 2,
      title: t("OutcomeSection.title2"),
      value: t("OutcomeSection.value2", {
        sales: "1억 ",
      }),
    },
    {
      id: 3,
      title: t("OutcomeSection.title3"),
      value: t("OutcomeSection.value3", {
        workers: 10,
      }),
    },
    {
      id: 4,
      title: t("OutcomeSection.title4"),
      value: t("OutcomeSection.value4", {
        services: 8,
      }),
    },
  ];

  return (
    <div className="mt-24 h-[130vh] mx-auto relative ">
      <div ref={backgroundRef} className="w-full h-full absolute">
        <ShadowBoxTop className="bg-black w-full h-36 z-10 absolute -top-36 shadow-black"></ShadowBoxTop>
        <Image
          src="https://images.unsplash.com/photo-1519155031214-e8d583928bf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          layout="fill"
          objectFit="cover"
          style={{ opacity: backgroundOpacity }}
          className="absolute"
          alt=""
        />
        <ShadowBoxBottom className="bg-black w-full h-36 z-10 absolute -bottom-36 shadow-black"></ShadowBoxBottom>
      </div>
      <div className="w-full max-w-7xl px-44 pb-32 pt-36 h-full lg:shrink-0">
        <div className="sticky top-[25%] mt-4">
          <div className="gap-4 flex flex-col">
            <AnimatedTitle>{t("OutcomeSection.header1")}</AnimatedTitle>
            <AnimatedTitle>{t("OutcomeSection.header2")}</AnimatedTitle>
          </div>
          <dl className="mt-20 grid grid-cols-2 gap-x-12 gap-y-4">
            {outcomeLists.map((outcome, index) => (
              <motion.div
                key={outcome.id}
                className="flex flex-col"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <p className="text-xl font-semibold leading-6 text-gray-400">
                  {outcome.title}
                </p>
                <p className="-mt-1 tracking-wide text-[66px] font-bold text-gray-900 dark:text-gray-50">
                  {outcome.value}
                </p>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSection;
