"use client";

import React, { FC, MouseEvent, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectData } from "@app/[locale]/projects/page";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface Props {
  projectsData: Array<ProjectData>;
}
const ProjectSection: FC<Props> = ({ projectsData }) => {
  const t = useTranslations("projects");
  const [projectCardHover, setprojectCardHover] = useState("");
  const pathname = usePathname();
  const handleCardHover = (e: MouseEvent<HTMLDivElement>) => {
    setprojectCardHover(e.currentTarget.id);
  };
  const handleCardLeave = () => {
    setprojectCardHover("");
  };
  // const handleCardClick = (index: number) => {
  //   navigator.replace(`/${locale}/projects/${index + 1}`);
  // };

  return (
    <div className="mb-20 px-6 font-medium">
      <div className="mx-auto mt-10 max-w-2xl lg:max-w-6xl ">
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
          {projectsData.map((data, index) => (
            <motion.div
              key={data.id}
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
              <div
                className={classNames(
                  projectCardHover === data.title1
                    ? "opacity-100"
                    : "opacity-0",
                  "top-0 duration-300 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-black/40"
                )}
              />
              <div
                className={classNames(
                  projectCardHover === data.title1
                    ? "bottom-4 opacity-0"
                    : "bottom-0 opacity-100",
                  "text-sm lg:text-lg z-20 relative font-medium leading-6 duration-200"
                )}
              >
                {data.category}
              </div>
              <div
                className={classNames(
                  projectCardHover === data.title1
                    ? "bottom-10 text-xl gap-0"
                    : "bottom-0 gap-0 lg:gap-2",
                  "text-xl lg:text-3xl z-20 flex flex-col relative duration-300 font-semibold leading-8 lg:mt-4 tracking-tight"
                )}
              >
                <p>{data.title1}</p>
                <p
                  className={classNames(
                    projectCardHover === data.title1
                      ? "text-gray-300 text-sm"
                      : "text-white text-sm lg:text-lg",
                    "duration-300 tracking-tight font-medium"
                  )}
                >
                  {data.title2}
                </p>
              </div>

              <div
                className={classNames(
                  projectCardHover === data.title1
                    ? "bottom-6  opacity-100"
                    : "-bottom-4 opacity-0",
                  "z-20 relative duration-300 text-sm flex flex-col gap-4"
                )}
              >
                <div>{data.description1}</div>
                <div className="hidden xl:block">
                  <p className="mb-1 font-medium text-amber-500">
                    {t("ProjectSection.projectSkillsLabel")}
                  </p>
                  {data.description2}
                </div>
                <Link
                  href={`${pathname}/${index + 1}`}
                  className="text-indigo-400"
                >
                  {t("ProjectSection.projectDetailLabel")}
                </Link>
              </div>
              <Image
                src={data.src}
                priority
                sizes="(max-width: 400px)"
                fill
                className="absolute opacity-60 object-cover aspect-square"
                alt={data.src}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
