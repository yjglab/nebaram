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

  const slideData = Array.from({ length: 20 }, (_, i) => i + 1).map((id) => ({
    id: id,
    scope: t(`ProjectSection.project${projectId}.details.slide${id}.scope`),
    src: t(`ProjectSection.project${projectId}.details.slide${id}.src`),
    title: t(`ProjectSection.project${projectId}.details.slide${id}.title`),
    description: t(
      `ProjectSection.project${projectId}.details.slide${id}.description`
    ),
  }));
  const slideImages = slideData.map((data) => data.src).filter((data) => data);

  return (
    <div className=" overflow-x-hidden pt-14 md:pt-20 flex flex-col items-center">
      <div className="w-full flex justify-center">
        <div className="mb-4 text-sm lg:text-base font-medium flex text-white py-1 px-2.5 rounded-lg bg-white/20">
          <a
            href={t(`ProjectSection.project${projectId}.details.github`)}
            rel="referrer"
            target="_blank"
            className="mr-2 hover:text-indigo-400 duration-200 flex items-center"
          >
            주요 기능 소개
            <ArrowTopRightOnSquareIcon className="w-4 ml-1 stroke-2" />
          </a>
          |
          <a
            href={t(`ProjectSection.project${projectId}.details.production`)}
            rel="referrer"
            target="_blank"
            className="ml-2 hover:text-indigo-400 duration-200 flex items-center"
          >
            프로덕션 페이지
            <ArrowTopRightOnSquareIcon className="w-4 ml-1 stroke-2" />
          </a>
        </div>
        {/* <div className="px-6 w-[90%] sm:w-[80%] lg:w-[900px] xl:w-[1000px] mx-auto break-all">
          설명부분
        </div> */}
      </div>

      <motion.div
        className="aspect-video w-[90%] sm:w-[80%] lg:w-[900px] xl:w-[1000px] relative flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.7,
          delay: 0.7,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Slider images={slideImages} setSlideNumber={setSlideNumber} />
      </motion.div>

      <div className="w-[90%] text-sm lg:text-base mt-3 lg:mt-6 sm:w-[80%] lg:w-[900px] xl:w-[1000px] px-2 lg:px-4 ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="font-semibold py-1 px-2.5 bg-white/20 rounded-lg">
              {slideData[slideNumber].scope}
            </div>
            <div className="font-semibold">{slideData[slideNumber].title}</div>
          </div>
          <div>
            {slideNumber + 1} / {slideImages.length}
          </div>
        </div>
        <div className="mt-2.5 pl-1 font-light leading-7">
          {slideData[slideNumber].description}
        </div>
      </div>
    </div>
  );
};
export default SliderSection;
