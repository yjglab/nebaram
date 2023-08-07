"use client";

import Slider from "@components/parts/Slider";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

const SliderSection = () => {
  const t = useTranslations("projects");
  const { id: projectId } = useParams();
  const images = [
    t(`ProjectSection.project${projectId}.details.slide1.src`),
    t(`ProjectSection.project${projectId}.details.slide2.src`),
    t(`ProjectSection.project${projectId}.details.slide3.src`),
    t(`ProjectSection.project${projectId}.details.slide4.src`),
  ];

  return (
    <div className=" overflow-x-hidden py-14 md:py-20 min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-center">
        <div className="mb-4 text-sm lg:text-base font-medium flex text-black py-1.5 px-3 rounded-lg bg-white">
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
        <Slider images={images} />
      </motion.div>

      <div className="w-[90%] text-sm lg:text-base mt-2 lg:mt-4 sm:w-[80%] lg:w-[900px] xl:w-[1000px] px-2 lg:px-4 flex justify-between">
        <div className="font-medium">타이틀</div>
        <div>1/2</div>
      </div>
    </div>
  );
};
export default SliderSection;
