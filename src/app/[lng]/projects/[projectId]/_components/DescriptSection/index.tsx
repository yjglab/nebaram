"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FC } from "react";
import { useTranslation } from "@app/i18n/client";
import { Trans } from "react-i18next";
import { ProjectDevelopment } from "@/@types";

interface Props {
  project: ProjectDevelopment;
  label: string;
}
const DescriptSection: FC<Props> = ({ project, label }) => {
  return (
    <section className="mx-auto mt-20 overflow-x-hidden px-6 text-lg sm:px-8 md:mt-24 lg:max-w-7xl pb-6">
      <div className="mb-8 h-[1.5px] w-full bg-white/30 md:mb-10" />

      <div className="mb-8 text-2xl font-semibold md:mb-12 md:text-3xl">
        {label}
      </div>
      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="mb-6 w-80 text-xl font-semibold md:mb-0 md:text-2xl">
          {project.details.outline.label}
        </div>
        <div className="w-full">
          <div className="mb-3 flex flex-col text-base md:mb-3 md:text-lg">
            <Trans
              components={[
                <span className="mb-2.5 py-0.5 font-semibold"></span>,
                <div className="mb-3 break-all leading-8"></div>,
                <div className="mb-3 break-all leading-8"></div>,
              ]}
            >
              {project.details.outline.description}
            </Trans>
          </div>
          <div className="mb-6 mt-10 h-[1.5px] w-full bg-white/30 md:mb-10" />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="mb-6 w-80 text-xl font-semibold md:mb-0 md:text-2xl">
          {project.details.implements.label}
        </div>
        <div className="w-full">
          {project.details.implements.description.map(
            (data) =>
              data && (
                <div
                  key={data}
                  className="mb-3 flex flex-col text-base md:mb-6 md:text-lg"
                >
                  <Trans
                    components={[
                      <span className="mb-2.5 py-0.5 font-semibold"></span>,
                      <div className="mb-3 break-all leading-8"></div>,
                    ]}
                  >
                    {data}
                  </Trans>
                </div>
              )
          )}
          <div className="mb-6 mt-10 h-[1.5px] w-full bg-white/30 md:mb-10" />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="mb-6 w-80 text-xl font-semibold md:mb-0 md:text-2xl">
          {project.details.issues.label}
        </div>
        <div className="w-full">
          <div className="mb-3 flex flex-col text-base md:mb-3 md:text-lg">
            <Trans
              components={[
                <span className="mb-2.5 py-0.5 font-semibold"></span>,
                <div className="mb-3 break-all leading-8"></div>,
                <a
                  href={project.details.issues.link}
                  className="text-base text-amber-500 duration-200 hover:text-amber-600"
                  rel="referrer"
                  target="_blank"
                ></a>,
              ]}
            >
              {project.details.issues.description}
            </Trans>
          </div>
          <div className="mb-6 mt-10 h-[1.5px] w-full bg-white/30 md:mb-10" />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="mb-6 w-80 text-xl font-semibold md:mb-0 md:text-2xl">
          {project.details.skills.label}
        </div>
        <div className="w-full">
          {project.details.skills.description.map(
            (data) =>
              data && (
                <div
                  key={data}
                  className="mb-3 flex flex-col text-base md:mb-6 md:text-lg"
                >
                  <Trans
                    components={[
                      <span className="mb-2.5 py-0.5 font-semibold"></span>,
                      <div className="mb-3 break-all leading-8"></div>,
                    ]}
                  >
                    {data}
                  </Trans>
                </div>
              )
          )}
        </div>
      </motion.div>
    </section>
  );
};
export default DescriptSection;
