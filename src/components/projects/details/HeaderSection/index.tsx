"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const HeaderSection: FC = () => {
  const t = useTranslations("projects");
  const { id: projectId } = useParams() as { id: string };
  const projectData = {
    title1: t(
      `ProjectSection.projectsDevelopment.${parseInt(projectId) - 1}.title1`
    ),
    title2: t(
      `ProjectSection.projectsDevelopment.${parseInt(projectId) - 1}.title2`
    ),
    details: {
      header: t(
        `ProjectSection.projectsDevelopment.${
          parseInt(projectId) - 1
        }.details.header`
      ),
      headerDescription: t(
        `ProjectSection.projectsDevelopment.${
          parseInt(projectId) - 1
        }.details.headerDescription`
      ),
    },
  };
  const navigator = useRouter();
  const handleNavigateBack = () => {
    navigator.back();
  };
  return (
    <section className="mx-auto mt-16 lg:max-w-6xl">
      <hgroup className="relative flex items-center justify-between gap-2 px-6 text-sm md:gap-0 lg:text-lg xl:px-4">
        <div
          onClick={handleNavigateBack}
          className="relative right-2 flex cursor-pointer items-center rounded-lg py-0.5 pl-1 pr-3 duration-200 hover:bg-white/20"
        >
          <ChevronLeftIcon className="mr-1 w-6" />
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "tween", duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {projectData.title1}
          </motion.h1>
        </div>
        <motion.h2
          className="text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {projectData.title2}
        </motion.h2>
      </hgroup>
      <header className="mt-20 lg:mt-24">
        <h1 className="px-20">
          <AnimatedTitle align="center" size="xl">
            {projectData.details.header}
          </AnimatedTitle>
        </h1>
        <motion.h2
          className="mt-6 px-8 text-center text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 1.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {projectData.details.headerDescription}
        </motion.h2>
      </header>
    </section>
  );
};

export default HeaderSection;
