"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

const TeamSection: FC = () => {
  const t = useTranslations("about");
  const teamCard = [
    {
      id: 1,
      team: t("TeamSection.team1"),
      src: "/images/square-section/square-s-1.jpeg",
      title1: t("TeamSection.team1Title1"),
      title2: t("TeamSection.team1Title2"),
      description: t.rich("TeamSection.team1Description", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 2,
      team: t("TeamSection.team2"),
      src: "/images/square-section/square-s-2.jpeg",
      title1: t("TeamSection.team2Title1"),
      title2: t("TeamSection.team2Title2"),
      description: t.rich("TeamSection.team2Description", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 3,
      team: t("TeamSection.team3"),
      src: "/images/square-section/square-s-3.jpeg",
      title1: t("TeamSection.team3Title1"),
      title2: t("TeamSection.team3Title2"),
      description: t.rich("TeamSection.team3Description", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 4,
      team: t("TeamSection.team4"),
      src: "/images/square-section/square-s-4.jpeg",
      title1: t("TeamSection.team4Title1"),
      title2: t("TeamSection.team4Title2"),
      description: t.rich("TeamSection.team4Description", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
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
            id={card.team}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
            className="relative px-10 overflow-hidden py-10 flex flex-col h-[40vh] sm:h-[45vw] md:h-[45vw] lg:h-[35vw] 2xl:h-[30vw] rounded-2xl"
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
              className={classNames(
                teamCardHover === card.team ? "opacity-100" : "opacity-0",
                "top-0 duration-200 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-black/40"
              )}
            />
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
                  ? "bottom-10 text-xl gap-0 "
                  : "bottom-0 gap-2",
                "z-20 flex flex-col relative duration-300 text-3xl font-semibold leading-8 mt-4 tracking-tight"
              )}
            >
              <p>{card.title1}</p>
              <p>{card.title2}</p>
            </div>
            <div
              className={classNames(
                teamCardHover === card.team
                  ? "bottom-6 text-gray-300 opacity-100"
                  : "-bottom-4 opacity-0",
                "z-20 relative duration-300"
              )}
            >
              {card.description}
            </div>
            <Image
              src={card.src}
              layout="fill"
              objectFit="cover"
              className="absolute opacity-60"
              alt=""
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
