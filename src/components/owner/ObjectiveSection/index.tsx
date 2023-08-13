"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { motion } from "framer-motion";

import Slider from "../../parts/Slider";

const ObjectiveSection: FC = () => {
  const t = useTranslations("owner");
  const images = [
    "/images/owner/objective-section/objective-01.jpg",
    "/images/owner/objective-section/objective-02.jpg",
    "/images/owner/objective-section/objective-03.jpg",
    "/images/owner/objective-section/objective-04.jpg",
  ];
  return (
    <div className="mb-56 mt-36 flex flex-col items-center overflow-x-hidden  pt-12 sm:py-36 md:mb-0 md:py-24">
      <div className="z-20 flex w-full flex-col items-center text-center">
        <AnimatedTitle size="xs" align="center">
          {t("ObjectiveSection.title")}
        </AnimatedTitle>
        <motion.div
          className="mt-2 h-0.5 w-44 grow bg-indigo-400 md:w-52"
          aria-hidden="true"
          initial={{ opacity: 0, scaleX: 0, originX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1, originX: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.div
          className="relative mt-4 flex flex-col gap-4 px-4 md:mt-8 2xl:gap-0.5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="mx-auto mt-6 break-keep text-xl sm:text-2xl md:text-3xl">
            <div className="font-semibold">
              {t("ObjectiveSection.description1")}
            </div>
          </div>
          <div className="mx-auto break-keep text-xl sm:text-2xl md:text-3xl">
            <div className="mt-2 font-semibold">
              {t("ObjectiveSection.description2")}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="mb-4 mt-6 w-full text-center font-semibold text-amber-500 md:mt-24"
      >
        {/* {t("ObjectiveSection.sliderTitle")} */}
      </motion.div>
      <motion.div
        className="relative flex aspect-video w-[80%] items-center lg:w-[900px] xl:w-[1000px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.7,
          delay: 0.7,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Slider images={images} />
      </motion.div>
    </div>
  );
};

export default ObjectiveSection;
