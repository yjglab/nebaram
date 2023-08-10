"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const DescriptSection = () => {
  const t = useTranslations("projects");
  const { id: projectId } = useParams();
  const projectData = {
    outline: {
      label: t(`ProjectSection.project${projectId}.details.outlineLabel`),
      data: t.rich(`ProjectSection.project${projectId}.details.outline`, {
        span: (children) => (
          <span className="py-0.5 font-semibold mb-2.5">{children}</span>
        ),
        div: (children) => (
          <div className="break-all leading-8 font-light">{children}</div>
        ),
      }),
    },
    implements: {
      label: t(`ProjectSection.project${projectId}.details.implementsLabel`),
      data: Array.from(
        {
          length: parseInt(
            t(`ProjectSection.project${projectId}.details.implementsCount`)
          ),
        },
        (_, i) => i
      ).map((id) => ({
        id: id,
        content: t.rich(
          `ProjectSection.project${projectId}.details.implements.${id}`,
          {
            span: (children) => (
              <span className="py-0.5 font-semibold mb-2.5">{children}</span>
            ),
            div: (children) => (
              <div className="break-all leading-8 font-light">{children}</div>
            ),
          }
        ),
      })),
    },
    issues: {
      label: t(`ProjectSection.project${projectId}.details.issuesLabel`),
      data: t.rich(`ProjectSection.project${projectId}.details.issues`, {
        span: (children) => (
          <span className="py-0.5 font-semibold mb-2.5">{children}</span>
        ),
        div: (children) => (
          <div className="break-all leading-8 font-light">{children}</div>
        ),
      }),
    },
    skills: {
      label: t(`ProjectSection.project${projectId}.details.skillsLabel`),
      data: Array.from(
        {
          length: parseInt(
            t(`ProjectSection.project${projectId}.details.skillsCount`)
          ),
        },
        (_, i) => i
      ).map((id) => ({
        id: id,
        content: t.rich(
          `ProjectSection.project${projectId}.details.skills.${id}`,
          {
            span: (children) => (
              <span className="py-0.5 font-semibold mb-2.5">{children}</span>
            ),
            div: (children) => (
              <div className="break-all leading-8 font-light">{children}</div>
            ),
          }
        ),
      })),
    },
  };

  return (
    <div className="px-6 sm:px-8 mt-20 md:mt-36 text-lg mx-auto lg:max-w-7xl">
      <div className="w-full h-[1.5px] mb-8 md:mb-10 bg-white/30" />

      <div className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12">
        {t("ProjectSection.projectDescriptionLabel")}
      </div>
      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-xl md:text-2xl font-semibold w-80 mb-6 md:mb-0">
          {projectData.outline.label}
        </div>
        <div className="w-full">
          <div className="flex flex-col mb-6 md:mb-10 text-base md:text-lg">
            {projectData.outline.data}
          </div>
          <div className="w-full h-[1.5px] mb-8 md:mb-12 mt-12 bg-white/30" />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-xl md:text-2xl font-semibold w-80 mb-6 md:mb-0">
          {projectData.implements.label}
        </div>
        <div className="w-full">
          {projectData.implements.data.map(
            (data) =>
              data.content && (
                <div
                  key={data.id}
                  className="flex flex-col  mb-6 md:mb-10 text-base md:text-lg"
                >
                  {data.content}
                </div>
              )
          )}
          <div className="w-full h-[1.5px] mb-8 md:mb-12 mt-12 bg-white/30" />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-xl md:text-2xl font-semibold w-80 mb-6 md:mb-0">
          {projectData.issues.label}
        </div>
        <div className="w-full">
          <div className="flex flex-col  mb-6 md:mb-10 text-base md:text-lg">
            {projectData.issues.data}
          </div>
          <div className="w-full h-[1.5px] mb-8 md:mb-12 mt-12 bg-white/30" />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-xl md:text-2xl font-semibold w-80 mb-6 md:mb-0">
          {projectData.skills.label}
        </div>
        <div className="w-full">
          {projectData.skills.data.map(
            (data) =>
              data.content && (
                <div
                  key={data.id}
                  className="flex flex-col  mb-6 md:mb-10 text-base md:text-lg"
                >
                  {data.content}
                </div>
              )
          )}
          <div className="w-full h-[1.5px] mb-8 md:mb-12 mt-12 bg-white/30" />
        </div>
      </motion.div>
    </div>
  );
};
export default DescriptSection;
