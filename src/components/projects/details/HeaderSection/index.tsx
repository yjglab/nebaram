"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useParams } from "next/navigation";

const HeaderSection: FC = () => {
  const t = useTranslations("projects");
  const { id: projectId } = useParams();
  const projectTitle = t(`ProjectSection.project${projectId}Title1`);

  return (
    <header className="mt-16 px-2 mx-auto max-w-2xl lg:max-w-7xl ">
      <div className="flex gap-2 text-sm lg:text-lg md:gap-0 relative justify-between items-center">
        <motion.div
          className=""
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {projectTitle}
        </motion.div>
        <motion.div
          className="text-sm"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {projectTitle}
        </motion.div>

        {/* 카테고리 추가하기 */}
      </div>

      <div className="mt-12 sm:mt-24 md:mt-36 flex items-center gap-6"></div>
    </header>
  );
};

export default HeaderSection;
