"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "@app/i18n/client";
import AnimatedTitle from "@app/_common/parts/AnimatedTitle";
import { ProjectDevelopment } from "@/@types";

interface Props {
  lng: string;
}
const HeaderSection: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "projects");
  const { projectId } = useParams() as { projectId: string };
  const navigator = useRouter();

  const projectData: ProjectDevelopment = t(
    `ProjectSection.projectsDevelopment.${parseInt(projectId) - 1}`,
    {
      returnObjects: true,
    }
  );

  const handleNavigateBack = () => {
    navigator.back();
  };
  return (
    <section className="mx-auto mt-1 lg:max-w-6xl">
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
            {projectData.title[0]}
          </motion.h1>
        </div>
        <motion.h2
          className="text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {projectData.title[1]}
        </motion.h2>
      </hgroup>
      <header className="mt-20 lg:mt-24">
        <h1 className="px-20">
          <AnimatedTitle align="center" size="xl">
            {projectData.details.header.title}
          </AnimatedTitle>
        </h1>
        <motion.h2
          className="mt-6 px-8 text-center text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 1.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {projectData.details.header.description}
        </motion.h2>
      </header>
    </section>
  );
};

export default HeaderSection;
