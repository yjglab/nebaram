"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { FC, useState } from "react";
import Slider from "@app/_common/parts/Slider";
import { ProjectDevelopment } from "@/@types";

interface Props {
  project: ProjectDevelopment;
}
const SliderSection: FC<Props> = ({ project }) => {
  const [slideNumber, setSlideNumber] = useState(0);

  return (
    <section className="flex flex-col items-center overflow-x-hidden pt-14 md:pt-20">
      <div className="flex w-full justify-center">
        <motion.div
          className="mb-4 flex rounded-lg bg-white/20 px-2.5 py-1 text-sm text-white lg:text-base"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 1.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <a
            href={project.details.github.link}
            rel="referrer"
            target="_blank"
            className="mr-2 flex items-center duration-200 hover:text-indigo-400"
          >
            {project.details.github.label}
            <ArrowTopRightOnSquareIcon className="ml-1 w-4 stroke-2" />
          </a>
          |
          <a
            href={project.details.production.link}
            rel="referrer"
            target="_blank"
            className="ml-2 flex items-center duration-200 hover:text-indigo-400"
          >
            {project.details.production.label}
            <ArrowTopRightOnSquareIcon className="ml-1 w-4 stroke-2" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 1.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="relative flex aspect-video w-[90%] items-center sm:w-[80%] lg:w-full">
          <Slider
            images={project.details.slides.map((slide) => slide.src)}
            setSlideNumber={setSlideNumber}
          />
        </div>

        <div className="mt-14 min-h-[100px] w-[90%] px-2 text-sm sm:w-[80%] md:mt-3 lg:mt-6 lg:w-[900px] lg:px-4 lg:text-base xl:w-[1000px] ">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-400 px-2.5 py-1 font-semibold">
                {project.details.slides[slideNumber].scope}
              </div>
              <div className="font-semibold">
                {project.details.slides[slideNumber].title}
              </div>
            </div>
            <div>
              {slideNumber + 1} / {project.details.slides.length}
            </div>
          </div>
          <div className="mt-2.5 pl-1 leading-6 md:leading-7">
            {project.details.slides[slideNumber].description}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default SliderSection;
