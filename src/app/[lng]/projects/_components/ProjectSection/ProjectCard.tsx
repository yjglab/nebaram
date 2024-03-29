"use client";

import React, { FC } from "react";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@app/i18n/client";
import { ProjectDesign, ProjectDevelopment, ProjectOngoing } from "@/@types";

interface Props {
  lng: string;
  project: ProjectDevelopment | ProjectDesign | ProjectOngoing;
  index: number;
}
const ProjectCard: FC<Props> = ({ lng, project, index }) => {
  const { t } = useTranslation(lng, "projects");
  const pathname = usePathname();

  return (
    <motion.article
      id={project.title[0]}
      className="group relative flex aspect-square flex-col overflow-hidden rounded-2xl p-8 ring-2 ring-white/10 lg:p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.7,
        delay: index * 0.08,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ArrowLeftCircleIcon className="absolute bottom-10 right-10 z-20 w-8" />
      <figure className="top-0 duration-300 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-black/40 opacity-0 group-hover:opacity-100" />
      <figcaption className="sr-only">image darker</figcaption>
      <div className="text-sm lg:text-lg z-20 relative font-medium leading-6 duration-200 flex justify-between items-center group-hover:bottom-4 group-hover:opacity-0 bottom-0 opacity-100">
        <span>{project.projectCategory}</span>
        <time className="font-light text-[14px] text-white/80">
          {project.date}
        </time>
      </div>
      <hgroup className="text-xl lg:text-3xl z-20 flex flex-col relative duration-300 font-semibold leading-8 lg:mt-4 tracking-tight bottom-0 gap-0 lg:gap-2 group-hover:bottom-8 group-hover:lg:bottom-14 group-hover:text-xl group-hover:gap-0">
        <h1>{project.title[0]}</h1>
        <h2 className="duration-300 tracking-tight font-medium text-white text-sm lg:text-lg group-hover:text-gray-300 group-hover:text-sm">
          {project.title[1]}
        </h2>
      </hgroup>

      <div className="z-20 relative duration-300 text-sm flex flex-col gap-4 -bottom-4 opacity-0 group-hover:bottom-4 group-hover:lg:bottom-10 group-hover:opacity-100">
        {project.description}
        <div className="hidden xl:block">
          <p className="mb-1 font-medium text-indigo-400">
            {t("ProjectSection.projectSkillsLabel")}
          </p>
          {project.skills}
        </div>
        {project.category === "development" ? (
          <Link
            href={`${pathname}/${index + 1}`}
            scroll={false}
            className="text-amber-500"
          >
            {t("ProjectSection.projectDetailLabel")}
          </Link>
        ) : (
          <a
            href={project.link}
            rel="noreferrer"
            target="_blank"
            className="text-amber-500"
          >
            {t("ProjectSection.projectDetailLabel")}
          </a>
        )}
      </div>
      <Image
        src={project.thumbnailSrc}
        priority
        sizes="(max-width: 400px)"
        fill
        className="absolute opacity-60 object-cover aspect-square"
        alt={project.thumbnailSrc}
      />
    </motion.article>
  );
};

export default ProjectCard;
