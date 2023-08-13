"use client";

import Slider from "@components/parts/Slider";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const SliderSection = () => {
  const t = useTranslations("projects");
  const { id: projectId } = useParams();
  const [slideNumber, setSlideNumber] = useState(0);
  const slideData = Array.from(
    {
      length: parseInt(
        t(`ProjectSection.project${projectId}.details.slidesCount`)
      ),
    },
    (_, i) => i
  ).map((id) => ({
    scope: t(`ProjectSection.project${projectId}.details.slides.${id}.scope`),
    src: t(`ProjectSection.project${projectId}.details.slides.${id}.src`),
    title: t(`ProjectSection.project${projectId}.details.slides.${id}.title`),
    description: t(
      `ProjectSection.project${projectId}.details.slides.${id}.description`
    ),
  }));
  const slideImages = slideData.map((data) => data.src);

  return (
    <div className="flex flex-col items-center overflow-x-hidden pt-14 md:pt-20">
      <div className="flex w-full justify-center">
        <motion.div
          className="mb-4 flex rounded-lg bg-white/20 px-2.5 py-1 text-sm text-white lg:text-base"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 1.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <a
            href={t(`ProjectSection.project${projectId}.details.github`)}
            rel="referrer"
            target="_blank"
            className="mr-2 flex items-center duration-200 hover:text-indigo-400"
          >
            {t(`ProjectSection.project${projectId}.details.githubLinkLabel`)}
            <ArrowTopRightOnSquareIcon className="ml-1 w-4 stroke-2" />
          </a>
          |
          <a
            href={t(`ProjectSection.project${projectId}.details.production`)}
            rel="referrer"
            target="_blank"
            className="ml-2 flex items-center duration-200 hover:text-indigo-400"
          >
            {t(
              `ProjectSection.project${projectId}.details.productionLinkLabel`
            )}
            <ArrowTopRightOnSquareIcon className="ml-1 w-4 stroke-2" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="relative flex aspect-video w-[90%] items-center sm:w-[80%] lg:w-[900px] xl:w-[1000px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.7,
          delay: 0.8,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Slider images={slideImages} setSlideNumber={setSlideNumber} />
      </motion.div>

      <motion.div
        className="mt-14 min-h-[50px] w-[90%] px-2 text-sm sm:w-[80%] md:mt-3 lg:mt-6 lg:w-[900px] lg:px-4 lg:text-base xl:w-[1000px] "
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-400 px-2.5 py-1 font-semibold">
              {slideData[slideNumber].scope}
            </div>
            <div className="font-semibold">{slideData[slideNumber].title}</div>
          </div>
          <div>
            {slideNumber + 1} / {slideImages.length}
          </div>
        </div>
        <div className="mt-2.5 pl-1 font-light leading-6 md:leading-7">
          {slideData[slideNumber].description}
        </div>
      </motion.div>
    </div>
  );
};
export default SliderSection;
