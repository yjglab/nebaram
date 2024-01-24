"use client";

import React, { FC, MouseEvent, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ProjectContent } from ".";
import { ProjectSectionCategory } from "../../page.client";

interface Props {
  data: ProjectContent;
  index: number;
  category: ProjectSectionCategory;
}
const ProjectCard: FC<Props> = ({ data, index, category }) => {
  const t = useTranslations("projects");
  const [projectCardHover, setprojectCardHover] = useState("");
  const pathname = usePathname();
  const handleCardHover = (e: MouseEvent<HTMLDivElement>) => {
    setprojectCardHover(e.currentTarget.id);
  };
  const handleCardLeave = () => {
    setprojectCardHover("");
  };

  return (
    <motion.article
      id={data.title1}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      className="relative flex aspect-square flex-col overflow-hidden rounded-2xl p-8 ring-2 ring-white/10 lg:p-10"
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
      <figure
        className={classNames(
          projectCardHover === data.title1 ? "opacity-100" : "opacity-0",
          "top-0 duration-300 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-black/40"
        )}
      />
      <figcaption className="sr-only">image darker</figcaption>
      <div
        className={classNames(
          projectCardHover === data.title1
            ? "bottom-4 opacity-0"
            : "bottom-0 opacity-100",
          "text-sm lg:text-lg z-20 relative font-medium leading-6 duration-200 flex justify-between items-center"
        )}
      >
        <span>{data.projectCategory}</span>
        <time className="font-light text-[14px] text-white/80">
          {data.date}
        </time>
      </div>
      <hgroup
        className={classNames(
          projectCardHover === data.title1
            ? "bottom-8 lg:bottom-14 text-xl gap-0"
            : "bottom-0 gap-0 lg:gap-2",
          "text-xl lg:text-3xl z-20 flex flex-col relative duration-300 font-semibold leading-8 lg:mt-4 tracking-tight"
        )}
      >
        <h1>{data.title1}</h1>
        <h2
          className={classNames(
            projectCardHover === data.title1
              ? "text-gray-300 text-sm"
              : "text-white text-sm lg:text-lg",
            "duration-300 tracking-tight font-medium"
          )}
        >
          {data.title2}
        </h2>
      </hgroup>

      <div
        className={classNames(
          projectCardHover === data.title1
            ? "bottom-4 lg:bottom-10  opacity-100"
            : "-bottom-4 opacity-0",
          "z-20 relative duration-300 text-sm flex flex-col gap-4"
        )}
      >
        {data.description1}
        <div className="hidden xl:block">
          <p className="mb-1 font-medium text-indigo-400">
            {t("ProjectSection.projectSkillsLabel")}
          </p>
          {data.description2}
        </div>
        {category === "development" ? (
          <Link
            href={`${pathname}/${index + 1}`}
            scroll={false}
            className="text-amber-500"
          >
            {t("ProjectSection.projectDetailLabel")}
          </Link>
        ) : (
          <a
            href={data.link}
            rel="noreferrer"
            target="_blank"
            className="text-amber-500"
          >
            {t("ProjectSection.projectDetailLabel")}
          </a>
        )}
      </div>
      <Image
        src={data.src}
        priority
        sizes="(max-width: 400px)"
        fill
        className="absolute opacity-60 object-cover aspect-square"
        alt={data.src}
      />
    </motion.article>
  );
};

export default ProjectCard;
