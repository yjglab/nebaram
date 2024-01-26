"use client";

import { FC, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslation } from "@app/i18n/client";
import AnimatedTitle from "@app/_common/parts/AnimatedTitle";
import { Trans } from "react-i18next";

interface Skill {
  name: string;
  title: string;
  description: string;
  src: string;
}
interface Props {
  lng: string;
}
const SkillSection: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");

  const skills: Skill[] = t("SkillSection.skills", {
    returnObjects: true,
  });

  const [hoveredSkill, setHoveredSkill] = useState("");
  const handleCardHover = (e: MouseEvent<HTMLDivElement>) => {
    setHoveredSkill(e.currentTarget.id);
  };

  const handleCardLeave = () => {
    setHoveredSkill("");
  };

  return (
    <section className="mb-28 mt-56 flex h-full w-full flex-col items-center sm:mb-40">
      <div className="w-full text-center">
        <header className="flex flex-col gap-2 md:gap-4">
          <AnimatedTitle size="lg" align="center">
            {t("SkillSection.sectionTitle.0")}
          </AnimatedTitle>
          <AnimatedTitle size="lg" align="center">
            {t("SkillSection.sectionTitle.1")}
          </AnimatedTitle>
        </header>
        <motion.hgroup
          className="relative mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mx-auto mt-6 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("SkillSection.description.0")}
          </h2>
          <h2 className="mx-auto mt-0.5 break-keep text-sm md:max-w-[80%] md:text-lg">
            {t("SkillSection.description.1")}
          </h2>
        </motion.hgroup>
      </div>
      <div className="mt-16 grid h-full grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 md:mt-24 lg:gap-10">
        {skills.map((skill, index) => (
          <motion.article
            key={skill.name}
            id={skill.name}
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
                hoveredSkill === skill.name ? "opacity-100" : "opacity-0",
                "top-0 duration-200 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-black/40"
              )}
            />
            <div
              className={classNames(
                hoveredSkill === skill.name
                  ? "bottom-4 opacity-0"
                  : "bottom-0 opacity-100",
                "z-20 text-base relative text-indigo-400 font-semibold leading-6 duration-100"
              )}
            >
              {skill.name}
            </div>
            <hgroup
              className={classNames(
                hoveredSkill === skill.name
                  ? "bottom-10 text-base leading-0 gap-0 xl:text-lg 2xl:text-xl text-indigo-400 "
                  : "bottom-0 text-2xl md:3xl 2xl:text-3xl gap-0 lg:gap-1 xl:gap-2 leading-8",
                "z-20 flex flex-col relative duration-300 font-semibold  mt-4 tracking-tight"
              )}
            >
              <h1>{skill.title[0]}</h1>
              <h1>{skill.title[1]}</h1>
            </hgroup>

            <div
              className={classNames(
                hoveredSkill === skill.name
                  ? "bottom-6  opacity-100"
                  : "-bottom-4 opacity-0",
                "text-sm xl:text-base 2xl:text-lg z-20 relative duration-300 flex flex-col gap-3"
              )}
            >
              <Trans
                components={[<p className="font-medium text-indigo-400"></p>]}
              >
                {skill.description[0]}
              </Trans>
              <Trans
                components={[<p className="font-medium text-amber-500"></p>]}
              >
                {skill.description[1]}
              </Trans>
            </div>
            <Image
              src={skill.src}
              fill
              sizes="(max-width: 400px)"
              className="absolute brightness-75 opacity-60 object-cover aspect-square"
              alt="skill card"
            />
          </motion.article>
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
    </section>
  );
};

export default SkillSection;
