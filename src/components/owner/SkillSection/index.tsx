"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SkillSection: FC = () => {
  const t = useTranslations("owner");
  const pathname = usePathname();

  const skillCard = [
    {
      id: 1,
      skill: t("SkillSection.skill1"),
      src: "/images/owner/skill-section/skill_01.jpg",
      title1: t("SkillSection.skill1Title1"),
      title2: t("SkillSection.skill1Title2"),
      description1: t.rich("SkillSection.skill1Description1", {
        span: (children) => (
          <p className="mb-1 font-medium text-indigo-400">{children}</p>
        ),
      }),
      description2: t.rich("SkillSection.skill1Description2", {
        span: (children) => (
          <p className="mb-1 font-medium text-amber-500">{children}</p>
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
          <p className="mb-1 font-medium text-indigo-400">{children}</p>
        ),
      }),
      description2: t.rich("SkillSection.skill2Description2", {
        span: (children) => (
          <p className="mb-1 font-medium text-amber-500">{children}</p>
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
          <p className="mb-1 font-medium text-indigo-400">{children}</p>
        ),
      }),
      description2: t.rich("SkillSection.skill3Description2", {
        span: (children) => (
          <p className="mb-1 font-medium text-amber-500">{children}</p>
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
          <p className="mb-1 font-medium text-indigo-400">{children}</p>
        ),
      }),
      description2: t.rich("SkillSection.skill4Description2", {
        span: (children) => (
          <p className="mb-1 font-medium text-amber-500">{children}</p>
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
    <div className="mb-28 mt-56 flex h-full w-full flex-col items-center sm:mb-40">
      <div className="w-full text-center">
        <div className="flex flex-col gap-2 md:gap-4">
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
      <div className="mt-16 grid h-full grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 md:mt-24 lg:gap-10">
        {skillCard.map((card, index) => (
          <motion.div
            key={card.id}
            id={card.skill}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
            className="relative flex h-[400px] w-[300px] flex-col overflow-hidden rounded-2xl border border-white/10 p-[10%] lg:h-[500px] lg:w-[400px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ArrowLeftCircleIcon className="absolute bottom-10 right-10 z-20 w-8" />
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
              fill
              sizes="(max-width: 400px)"
              className="absolute brightness-75 opacity-60 object-cover aspect-square"
              alt="skill card"
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-12 flex w-full flex-col justify-center text-center font-medium lg:mt-24"
      >
        <span className="text-lg lg:text-xl">
          {t("SkillSection.projectsLinkLabel")}
        </span>
        <Link
          className="mx-auto mt-4 w-40 rounded-lg bg-indigo-400 px-2.5 py-1.5 text-base duration-200 hover:bg-indigo-500 lg:text-lg"
          href="projects"
        >
          {t("SkillSection.projectsLink")}
        </Link>
      </motion.div>
    </div>
  );
};

export default SkillSection;
