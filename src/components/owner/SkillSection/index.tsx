"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const SkillSection: FC = () => {
  const t = useTranslations("owner");
  const skillCard = [
    {
      id: 1,
      skill: t("SkillSection.skill1"),
      src: "/images/owner/skill-section/skill_01.jpeg",
      title1: t("SkillSection.skill1Title1"),
      title2: t("SkillSection.skill1Title2"),
      description1: t.rich("SkillSection.skill1Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("SkillSection.skill1Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 2,
      skill: t("SkillSection.skill2"),
      src: "/images/owner/skill-section/skill_02.jpeg",
      title1: t("SkillSection.skill2Title1"),
      title2: t("SkillSection.skill2Title2"),
      description1: t.rich("SkillSection.skill2Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("SkillSection.skill2Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 3,
      skill: t("SkillSection.skill3"),
      src: "/images/owner/skill-section/skill_03.jpeg",
      title1: t("SkillSection.skill3Title1"),
      title2: t("SkillSection.skill3Title2"),
      description1: t.rich("SkillSection.skill3Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("SkillSection.skill3Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 4,
      skill: t("SkillSection.skill4"),
      src: "/images/owner/skill-section/skill_04.jpeg",
      title1: t("SkillSection.skill4Title1"),
      title2: t("SkillSection.skill4Title2"),
      description1: t.rich("SkillSection.skill4Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("SkillSection.skill4Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
  ];
  const [skillCardHover, setSkillCardHover] = useState("");
  const handleCardHover = (e: MouseEvent<HTMLDivElement>) => {
    setSkillCardHover(e.currentTarget.id);
  };

  const handleCardLeave = () => {
    setSkillCardHover("");
  };

  return (
    <div className=" my-44 sm:my-56 w-full h-full flex flex-col items-center">
      <div className="text-center w-full">
        <div className="gap-2 md:gap-4 flex flex-col">
          <AnimatedTitle size="lg" align="center">
            {t("SkillSection.sectionTitle1")}
          </AnimatedTitle>
          <AnimatedTitle size="lg" align="center">
            {t("SkillSection.sectionTitle2")}
          </AnimatedTitle>
        </div>
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto mt-6 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("SkillSection.description1")}
          </p>
          <p className="mx-auto mt-0.5 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("SkillSection.description2")}
          </p>
        </motion.div>
      </div>
      <div className="mt-16 md:mt-24 grid grid-cols-1 h-full sm:grid-cols-2 gap-6 lg:gap-10 overflow-hidden">
        {skillCard.map((card, index) => (
          <motion.div
            key={card.id}
            id={card.skill}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
            className="relative p-[10%] border border-white/10 overflow-hidden flex flex-col w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] rounded-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ArrowLeftCircleIcon className="w-8 z-20 absolute bottom-10 right-10" />
            <div
              className={classNames(
                skillCardHover === card.skill ? "opacity-100" : "opacity-0",
                "top-0 duration-200 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-black/40"
              )}
            />
            <div
              className={classNames(
                skillCardHover === card.skill
                  ? "bottom-4 opacity-0"
                  : "bottom-0 opacity-100",
                "z-20 text-base relative text-indigo-400 font-semibold leading-6 duration-100"
              )}
            >
              {card.skill}
            </div>
            <div
              className={classNames(
                skillCardHover === card.skill
                  ? "bottom-10 text-base leading-0 gap-0 xl:text-lg 2xl:text-xl text-indigo-400 "
                  : "bottom-0 text-2xl md:3xl 2xl:text-3xl gap-0 lg:gap-1 xl:gap-2 leading-8",
                "z-20 flex flex-col relative duration-300 font-semibold  mt-4 tracking-tight"
              )}
            >
              <p>{card.title1}</p>
              <p>{card.title2}</p>
            </div>

            <div
              className={classNames(
                skillCardHover === card.skill
                  ? "bottom-6  opacity-100"
                  : "-bottom-4 opacity-0",
                "text-sm xl:text-base 2xl:text-lg z-20 relative duration-300 flex flex-col gap-4"
              )}
            >
              <div>{card.description1}</div>
              <div>{card.description2}</div>
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

export default SkillSection;
