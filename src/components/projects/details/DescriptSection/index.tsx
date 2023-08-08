"use client";

import Slider from "@components/parts/Slider";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

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
      data: [1, 2, 3, 4, 5].map((id) => ({
        id: id,
        content: t.rich(
          `ProjectSection.project${projectId}.details.implements.content${id}`,
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
      data: [1, 2, 3, 4].map((id) => ({
        id: id,
        content: t.rich(
          `ProjectSection.project${projectId}.details.skills.skill${id}`,
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
    <div className="mt-36 text-lg mx-auto lg:max-w-7xl">
      <div className="w-full h-[1.5px] mb-10 bg-white/30" />

      <div className="text-3xl font-semibold mb-12">서비스 설명</div>

      <div className="flex">
        <div className="text-2xl w-80">{projectData.outline.label}</div>
        <div className="w-full">
          <div className="flex flex-col mb-10">{projectData.outline.data}</div>
          <div className="w-full h-[1.5px] mb-12 mt-12 bg-white/30" />
        </div>
      </div>

      <div className="flex">
        <div className="text-2xl w-80">{projectData.implements.label}</div>
        <div className="w-full">
          {projectData.implements.data.map(
            (data) =>
              data.content && (
                <div key={data.id} className="flex flex-col mb-10">
                  {data.content}
                </div>
              )
          )}
          <div className="w-full h-[1.5px] mb-12 mt-12 bg-white/30" />
        </div>
      </div>

      <div className="flex">
        <div className="text-2xl w-80">{projectData.issues.label}</div>
        <div className="w-full">
          <div className="flex flex-col mb-10">{projectData.issues.data}</div>
          <div className="w-full h-[1.5px] mb-12 mt-12 bg-white/30" />
        </div>
      </div>

      <div className="flex">
        <div className="text-2xl w-80">{projectData.skills.label}</div>
        <div className="w-full">
          {projectData.skills.data.map(
            (data) =>
              data.content && (
                <div key={data.id} className="flex flex-col mb-10">
                  {data.content}
                </div>
              )
          )}
          <div className="w-full h-[1.5px] mb-12 mt-12 bg-white/30" />
        </div>
      </div>
    </div>
  );
};
export default DescriptSection;
