"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { motion } from "framer-motion";

import Slider from "../../parts/Slider";

const ObjectiveSection: FC = () => {
  const t = useTranslations("owner");
  const images = ["/images/owner/outcome-section/image-01.jpg"];
  return (
    <div className="overflow-x-hidden mt-36 py-24 min-h-screen sm:py-36 flex flex-col items-center">
      <div className="z-20 text-center w-full flex flex-col items-center">
        <AnimatedTitle size="xs" align="center">
          {t("ObjectiveSection.title")}
        </AnimatedTitle>
        <motion.div
          className="mt-2 h-0.5 grow bg-indigo-400 w-44 md:w-52"
          aria-hidden="true"
          initial={{ opacity: 0, scaleX: 0, originX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1, originX: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.div
          className="px-4 relative mt-8 gap-4 flex flex-col 2xl:gap-0.5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="mx-auto mt-6 break-keep text-2xl md:text-3xl">
            <div className="font-semibold">
              {t("ObjectiveSection.description1")}
            </div>
          </div>
          <div className="mx-auto break-keep text-2xl md:text-3xl">
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
        className="w-full mt-24 mb-4 text-amber-500 font-semibold text-center"
      >
        {t("ObjectiveSection.sliderTitle")}
      </motion.div>
      <motion.div
        className="aspect-video w-[80%] lg:w-[900px] xl:w-[1000px] relative flex items-center"
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
