"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

const IntroSection: FC = () => {
  const t = useTranslations("section");
  const introCard = [
    {
      id: 1,
      team: t("IntroSection.intro1Team"),
      src: t("IntroSection.intro1Src"),
      title: t("IntroSection.intro1Title"),
    },
    {
      id: 2,
      team: t("IntroSection.intro2Team"),
      src: t("IntroSection.intro2Src"),
      title: t("IntroSection.intro2Title"),
    },
    {
      id: 3,
      team: t("IntroSection.intro3Team"),
      src: t("IntroSection.intro3Src"),
      title: t("IntroSection.intro3Title"),
    },
    {
      id: 4,
      team: t("IntroSection.intro4Team"),
      src: t("IntroSection.intro4Src"),
      title: t("IntroSection.intro4Title"),
    },
  ];
  const [introCardHover, setIntroCardHover] = useState("");
  const handleCardHover = (e: MouseEvent<HTMLDivElement>) => {
    setIntroCardHover(e.currentTarget.id);
  };

  const handleCardLeave = () => {
    setIntroCardHover("");
  };

  return (
    <div className="px-[4vw] lg:px-[24vw] mt-44 min-h-screen py-24 sm:py-36 flex flex-col items-center">
      <div className="text-center w-full">
        <AnimatedTitle size="lg" align="center">
          {t("IntroSection.title")}
        </AnimatedTitle>
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto mt-6 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("IntroSection.description1")}
          </p>
          <p className="mx-auto mt-0.5 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("IntroSection.description2")}
          </p>
        </motion.div>
      </div>
      <div className="mt-24 grid grid-cols-1 w-full h-full sm:grid-cols-2 gap-6 xl:gap-10 3xl:gap-12 overflow-hidden">
        {introCard.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative px-10 overflow-hidden py-10 flex flex-col h-[40vh] sm:h-[45vw] md:h-[45vw] lg:h-[35vw] 2xl:h-[30vw] rounded-2xl bg-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              id={card.team}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
              className="hover:opacity-100 top-0 opacity-0 duration-200 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-white/10"
            >
              aa
            </div>
            <div className="">
              <div
                className={classNames(
                  introCardHover === card.team
                    ? "bottom-4 opacity-0"
                    : "bottom-0 opacity-100",
                  "z-20 text-base relative font-semibold leading-6 duration-100"
                )}
              >
                {card.team}
              </div>
              <div
                className={classNames(
                  introCardHover === card.team
                    ? "bottom-10 text-xl"
                    : "bottom-0",
                  "z-20 relative duration-300 text-3xl font-semibold leading-8 mt-4 tracking-tight"
                )}
              >
                {card.title}
              </div>
            </div>
            <Image
              src={card.src}
              layout="fill"
              objectFit="cover"
              className="absolute"
              alt=""
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntroSection;
