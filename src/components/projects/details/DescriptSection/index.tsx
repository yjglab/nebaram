"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const DescriptSection = () => {
  const t = useTranslations("projects");
  const { id: projectId } = useParams() as { id: string };
  const projectData = {
    outline: {
      label: t(`ProjectSection.project${projectId}.details.outlineLabel`),
      data: t.rich(`ProjectSection.project${projectId}.details.outline`, {
        span: (children) => (
          <span className="mb-2.5 py-0.5 font-semibold">{children}</span>
        ),
        div: (children) => (
          <div className="mb-3 break-all font-light leading-8">{children}</div>
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
              <span className="mb-2.5 py-0.5 font-semibold">{children}</span>
            ),
            div: (children) => (
              <div className="mb-3 break-all font-light leading-8">
                {children}
              </div>
            ),
          }
        ),
      })),
    },
    issues: {
      label: t(`ProjectSection.project${projectId}.details.issuesLabel`),
      data: t.rich(`ProjectSection.project${projectId}.details.issues`, {
        span: (children) => (
          <span className="mb-2.5 py-0.5 font-semibold">{children}</span>
        ),
        div: (children) => (
          <div className="mb-3 break-all font-light leading-8">{children}</div>
        ),
        a: (children) => (
          <a
            href={t(`ProjectSection.project${projectId}.details.issuesLink`)}
            className="text-base text-amber-500 duration-200 hover:text-amber-600"
            rel="referrer"
            target="_blank"
          >
            {children}
          </a>
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
              <span className="mb-2.5 py-0.5 font-semibold">{children}</span>
            ),
            div: (children) => (
              <div className="mb-3 break-all font-light leading-8">
                {children}
              </div>
            ),
          }
        ),
      })),
    },
  };

  return (
    <div className="mx-auto mt-20 overflow-x-hidden px-6 text-lg sm:px-8 md:mt-36 lg:max-w-7xl">
      <div className="mb-8 h-[1.5px] w-full bg-white/30 md:mb-10" />

      <div className="mb-8 text-2xl font-semibold md:mb-12 md:text-3xl">
        {t("ProjectSection.projectDescriptionLabel")}
      </div>
      <motion.div
        className="flex flex-col md:flex-row"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="mb-6 w-80 text-xl font-semibold md:mb-0 md:text-2xl">
          {projectData.outline.label}
        </div>
        <div className="w-full">
          <div className="mb-3 flex flex-col text-base md:mb-3 md:text-lg">
            {projectData.outline.data}
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
          {projectData.implements.label}
        </div>
        <div className="w-full">
          {projectData.implements.data.map(
            (data) =>
              data.content && (
                <div
                  key={data.id}
                  className="mb-3 flex flex-col text-base md:mb-6 md:text-lg"
                >
                  {data.content}
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
          {projectData.issues.label}
        </div>
        <div className="w-full">
          <div className="mb-3 flex flex-col text-base md:mb-3 md:text-lg">
            {projectData.issues.data}
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
          {projectData.skills.label}
        </div>
        <div className="w-full">
          {projectData.skills.data.map(
            (data) =>
              data.content && (
                <div
                  key={data.id}
                  className="mb-3 flex flex-col text-base md:mb-6 md:text-lg"
                >
                  {data.content}
                </div>
              )
          )}
          <div className="mb-6 mt-10 h-[1.5px] w-full bg-white/30 md:mb-10" />
        </div>
      </motion.div>
    </div>
  );
};
export default DescriptSection;
