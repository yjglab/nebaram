"use client";

import AnimatedTitle from "@components/parts/AnimatedTitle";
import { useTranslations } from "next-intl";
import { FC, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import Slider from "../../parts/Slider";

const ObjectiveSection: FC = () => {
  const t = useTranslations("section");
  const images = [
    t("ObjectiveSection.src1"),
    t("ObjectiveSection.src2"),
    t("ObjectiveSection.src3"),
  ];
  return (
    <div className=" mt-44 py-24 min-h-screen sm:py-36 flex flex-col items-center">
      <div className="text-center w-full flex flex-col items-center">
        <AnimatedTitle size="xs" align="center">
          {t("ObjectiveSection.title")}
        </AnimatedTitle>
        <motion.div
          className="mt-2 h-0.5 grow bg-indigo-400 w-[15%]"
          aria-hidden="true"
          initial={{ opacity: 0, scaleX: 0, originX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1, originX: 0 }}
          transition={{ duration: 1.3, delay: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.div
          className="px-[25%] relative mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="mx-auto mt-6 break-keep md:max-w-[80%] md:text-3xl">
            <span className="font-semibold leading-[2.7rem]">
              {t("ObjectiveSection.description1")}
            </span>
          </p>
          <p className="mx-auto break-keep md:max-w-[80%] md:text-3xl">
            <span className="font-semibold leading-[2.7rem]">
              {t("ObjectiveSection.description2")}
            </span>
          </p>
        </motion.div>
      </div>
      <motion.div
        className="w-[80vw] h-[50vw] overflow-hidden mt-24 relative flex justify-center items-center"
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
