"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const HeaderSection: FC = () => {
  const t = useTranslations("projects");
  const { id: projectId } = useParams();
  const projectData = {
    title1: t(`ProjectSection.project${projectId}.title1`),
    title2: t(`ProjectSection.project${projectId}.title2`),
    details: {
      header: t(`ProjectSection.project${projectId}.details.header`),
      headerDescription: t(
        `ProjectSection.project${projectId}.details.headerDescription`
      ),
    },
  };
  const navigator = useRouter();
  const handleNavigateBack = () => {
    navigator.back();
  };
  return (
    <header className="mt-16 mx-auto lg:max-w-6xl">
      <div className="flex px-6 xl:px-4 gap-2 text-sm lg:text-lg md:gap-0 relative justify-between items-center">
        <div
          onClick={handleNavigateBack}
          className="flex items-center relative cursor-pointer right-2 hover:bg-white/20 rounded-lg pl-1 pr-3 py-0.5 duration-200"
        >
          <ChevronLeftIcon className="w-6 mr-1" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "tween", duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {projectData.title1}
          </motion.div>
        </div>
        <motion.div
          className="text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {projectData.title2}
        </motion.div>
      </div>
      <div className="mt-20 lg:mt-24">
        <div className="px-20">
          <AnimatedTitle align="center" size="xl">
            {projectData.details.header}
          </AnimatedTitle>
        </div>
        <motion.div
          className="text-sm sm:text-base lg:text-lg text-center mt-6 px-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 1.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {projectData.details.headerDescription}
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderSection;
