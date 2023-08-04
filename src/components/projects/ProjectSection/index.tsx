"use client";

import React, { FC, MouseEvent, useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ProjectSection: FC = () => {
  const [category, setCategory] = useState("development");
  const [thumbLoaded, setThumbLoaded] = useState(false);

  const t = useTranslations("projects");
  const projectCard = [
    {
      id: 1,
      category: t("ProjectSection.project1Category"),
      src: "/images/about/square-section/square-s-1.jpeg",
      title1: t("ProjectSection.project1Title1"),
      title2: t("ProjectSection.project1Title2"),
      description1: t.rich("ProjectSection.project1Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("ProjectSection.project1Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 2,
      category: t("ProjectSection.project2Category"),
      src: "/images/about/square-section/square-s-2.jpeg",
      title1: t("ProjectSection.project2Title1"),
      title2: t("ProjectSection.project2Title2"),
      description1: t.rich("ProjectSection.project2Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("ProjectSection.project2Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 3,
      category: t("ProjectSection.project3Category"),
      src: "/images/about/square-section/square-s-3.jpeg",
      title1: t("ProjectSection.project3Title1"),
      title2: t("ProjectSection.project3Title2"),
      description1: t.rich("ProjectSection.project3Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("ProjectSection.project3Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 4,
      category: t("ProjectSection.project4Category"),
      src: "/images/about/square-section/square-s-4.jpeg",
      title1: t("ProjectSection.project4Title1"),
      title2: t("ProjectSection.project4Title2"),
      description1: t.rich("ProjectSection.project4Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("ProjectSection.project4Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
    {
      id: 5,
      category: t("ProjectSection.project5Category"),
      src: "/images/about/square-section/square-s-4.jpeg",
      title1: t("ProjectSection.project5Title1"),
      title2: t("ProjectSection.project5Title2"),
      description1: t.rich("ProjectSection.project5Description1", {
        span: (children) => (
          <p className="text-indigo-400 mb-1 font-medium">{children}</p>
        ),
      }),
      description2: t.rich("ProjectSection.project5Description2", {
        span: (children) => (
          <p className="text-amber-500 mb-1 font-medium">{children}</p>
        ),
      }),
    },
  ];

  const [projectCardHover, setprojectCardHover] = useState("");
  const handleCardHover = (e: MouseEvent<HTMLDivElement>) => {
    setprojectCardHover(e.currentTarget.id);
  };
  const handleCardLeave = () => {
    setprojectCardHover("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-medium">
      <header className="mx-auto max-w-2xl px-4 py-3 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between pb-5 pt-24">
          <div className="flex gap-1.5">
            <h1 className="text-[40px] font-semibold ">
              {t("ProjectSection.sectionTitle")}
            </h1>
          </div>
          <span>{t("ProjectSection.sectionDescription")}</span>
          {/* 카테고리 추가하기 */}
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
            {projectCard.map((card, index) => (
              <motion.div
                key={card.id}
                id={card.title1}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
                className="relative p-10 sm:p-8 lg:p-10 overflow-hidden  flex flex-col aspect-square rounded-2xl"
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
                    projectCardHover === card.title1
                      ? "opacity-100"
                      : "opacity-0",
                    "top-0 duration-300 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-black/40"
                  )}
                />
                <div
                  className={classNames(
                    projectCardHover === card.title1
                      ? "bottom-4 opacity-0"
                      : "bottom-0 opacity-100",
                    "text-lg sm:text-sm lg:text-lg z-20 relative text-indigo-400 font-semibold leading-6 duration-200"
                  )}
                >
                  {card.category}
                </div>
                <div
                  className={classNames(
                    projectCardHover === card.title1
                      ? "bottom-10 text-xl gap-0"
                      : "bottom-0 gap-2 sm:gap-0 lg:gap-2",
                    "text-3xl sm:text-xl lg:text-3xl z-20 flex flex-col relative duration-300 font-semibold leading-8 mt-4 tracking-tight"
                  )}
                >
                  <p>{card.title1}</p>
                  <p
                    className={classNames(
                      projectCardHover === card.title1
                        ? "text-gray-400 text-sm"
                        : "text-white text-lg sm:text-sm lg:text-lg",
                      "duration-300 tracking-tight font-medium"
                    )}
                  >
                    {card.title2}
                  </p>
                </div>

                <div
                  className={classNames(
                    projectCardHover === card.title1
                      ? "bottom-6  opacity-100"
                      : "-bottom-4 opacity-0",
                    "z-20 relative duration-300 text-sm flex flex-col gap-4"
                  )}
                >
                  <div>{card.description1}</div>
                  <div className="block sm:hidden xl:block">
                    {card.description2}
                  </div>
                  <div className="text-indigo-400">자세히 보기</div>
                </div>
                <Image
                  src={card.src}
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
