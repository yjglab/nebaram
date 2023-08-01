"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

const TeamSection: FC = () => {
  const t = useTranslations("section");
  const teamCard = [
    {
      id: 1,
      team: t("TeamSection.team1"),
      src: t("TeamSection.team1Src"),
      title: t("TeamSection.team1Title"),
    },
    {
      id: 2,
      team: t("TeamSection.team2"),
      src: t("TeamSection.team2Src"),
      title: t("TeamSection.team2Title"),
    },
    {
      id: 3,
      team: t("TeamSection.team3"),
      src: t("TeamSection.team3Src"),
      title: t("TeamSection.team3Title"),
    },
    {
      id: 4,
      team: t("TeamSection.team4"),
      src: t("TeamSection.team4Src"),
      title: t("TeamSection.team4Title"),
    },
  ];
  const [teamCardHover, setTeamCardHover] = useState("");
  const handleCardHover = (e: MouseEvent<HTMLDivElement>) => {
    setTeamCardHover(e.currentTarget.id);
  };

  const handleCardLeave = () => {
    setTeamCardHover("");
  };

  return (
    <div className="px-[4vw] lg:px-[24vw] min-h-screen py-24 sm:py-32 flex flex-col items-center">
      <div className="text-center w-full">
        <div className="gap-4 flex flex-col">
          <AnimatedTitle size="lg" align="center">
            {t("TeamSection.sectionTitle1")}
          </AnimatedTitle>
          <AnimatedTitle size="lg" align="center">
            {t("TeamSection.sectionTitle2")}
          </AnimatedTitle>
        </div>
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto mt-6 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("TeamSection.description1")}
          </p>
          <p className="mx-auto mt-0.5 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("TeamSection.description2")}
          </p>
        </motion.div>
      </div>
      <div className="mt-24 grid grid-cols-1 w-full h-full sm:grid-cols-2 gap-6 xl:gap-10 3xl:gap-12 overflow-hidden">
        {teamCard.map((card, index) => (
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
                  teamCardHover === card.team
                    ? "bottom-4 opacity-0"
                    : "bottom-0 opacity-100",
                  "z-20 text-base relative font-semibold leading-6 duration-100"
                )}
              >
                {card.team}
              </div>
              <div
                className={classNames(
                  teamCardHover === card.team
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

export default TeamSection;
