"use client";

import React, { FC, MouseEvent, useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { Locale, fallbackLocale, processLocale } from "@locales";
import { ProjectData } from "@app/[locale]/projects/page";
import { useRouter } from "next/navigation";

interface Props {
  projectsData: Array<ProjectData>;
}
const ProjectSection: FC<Props> = ({ projectsData }) => {
  const [locale, setLocale] = useState<Locale | "">("");
  const [projectCardHover, setprojectCardHover] = useState("");
  const navigator = useRouter();
  const handleCardHover = (e: MouseEvent<HTMLDivElement>) => {
    setprojectCardHover(e.currentTarget.id);
  };
  const handleCardLeave = () => {
    setprojectCardHover("");
  };
  const handleCardClick = (index: number) => {
    navigator.replace(`/${locale}/projects/${index + 1}`);
  };
  useEffect(() => {
    setLocale(processLocale(window.navigator.language) ?? fallbackLocale);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-medium px-6">
      <main>
        <div className="mt-10 mx-auto max-w-2xl lg:max-w-7xl ">
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
            {projectsData.map((data, index) => (
              <motion.div
                key={data.id}
                id={data.title1}
                onClick={() => handleCardClick(index)}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
                className="relative p-8 lg:p-10 border border-white/10 overflow-hidden flex flex-col aspect-square rounded-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ArrowLeftCircleIcon className="w-8 z-20 absolute bottom-10 right-10" />
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
                    "text-sm lg:text-lg z-20 relative font-semibold leading-6 duration-200"
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
                    <p className="text-amber-500 mb-1 font-medium">
                      사용된 기술
                    </p>
                    {data.description2}
                  </div>
                  <Link
                    href={`/${locale}/projects/${index + 1}`}
                    className="text-indigo-400"
                  >
                    자세히 보기
                  </Link>
                </div>
                <Image
                  src={data.src}
                  layout="fill"
                  objectFit="cover"
                  className="absolute opacity-60"
                  alt=""
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectSection;
