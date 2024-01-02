"use client";

import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "@app/_common/AnimatedTitle";
import Slider from "@app/_common/Slider";

const ObjectiveSection: FC = () => {
  const t = useTranslations("owner");
  const [, setSlideNumber] = useState(0);

  const images = [
    "/images/owner/objective-section/objective-01.jpg",
    "/images/owner/objective-section/objective-02.jpg",
    "/images/owner/objective-section/objective-03.jpg",
    "/images/owner/objective-section/objective-04.jpg",
  ];
  return (
    <section className="mb-0 mt-36 flex flex-col items-center overflow-x-hidden  pt-12 sm:py-36  md:py-24">
      <article className="z-20 flex w-full flex-col items-center text-center">
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
        <motion.hgroup
          className="relative mt-4 flex flex-col gap-4 px-10 md:mt-8 2xl:gap-0.5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h1 className="mx-auto mt-6 break-keep text-md sm:text-2xl md:text-3xl font-semibold">
            {t("ObjectiveSection.description1")}
          </h1>
          <h1 className="mx-auto break-keep text-md sm:text-2xl md:text-3xl mt-2 font-semibold">
            {t("ObjectiveSection.description2")}
          </h1>
        </motion.hgroup>
      </article>

      <motion.figure
        className="mt-14 mb-10 relative flex aspect-video w-[80%] items-center lg:w-[900px] xl:w-[1000px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.7,
          delay: 0.7,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Slider images={images} setSlideNumber={setSlideNumber} />
      </motion.figure>
    </section>
  );
};

export default ObjectiveSection;
