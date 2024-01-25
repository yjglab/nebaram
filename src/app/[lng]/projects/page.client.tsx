"use client";

import { useTranslations } from "next-intl";
import ProjectSection, { ProjectData } from "./_components/ProjectSection";
import { useState } from "react";
import HeaderSection from "./_components/HeaderSection";

interface ProjectsData {
  [key: string]: Array<ProjectData>;
}
export type ProjectSectionCategory =
  | "all"
  | "development"
  | "design"
  | "ongoing";

const ProjectsClientPage = () => {
  const t = useTranslations("projects");

  const [category, setCategory] =
    useState<ProjectSectionCategory>("development");
  const projectsData: ProjectsData = {
    development: Array.from(
      {
        length: parseInt(t(`ProjectSection.projectsDevelopmentCount`)),
      },
      (_, i) => i
    ).map((id) => ({
      id: id,
      content: {
        category: "development",
        projectCategory: t(
          `ProjectSection.projectsDevelopment.${id}.projectCategory`
        ),
        date: t(`ProjectSection.projectsDevelopment.${id}.date`),
        src: t(`ProjectSection.projectsDevelopment.${id}.thumbnailSrc`),
        title1: t(`ProjectSection.projectsDevelopment.${id}.title1`),
        title2: t(`ProjectSection.projectsDevelopment.${id}.title2`),
        description1: t(
          `ProjectSection.projectsDevelopment.${id}.description1`
        ),
        description2: t(
          `ProjectSection.projectsDevelopment.${id}.description2`
        ),
      },
    })),
    design: Array.from(
      {
        length: parseInt(t(`ProjectSection.projectsDesignCount`)),
      },
      (_, i) => i
    ).map((id) => ({
      id: id,
      content: {
        category: "design",
        projectCategory: t(
          `ProjectSection.projectsDesign.${id}.projectCategory`
        ),
        date: t(`ProjectSection.projectsDesign.${id}.date`),
        src: t(`ProjectSection.projectsDesign.${id}.thumbnailSrc`),
        title1: t(`ProjectSection.projectsDesign.${id}.title1`),
        title2: t(`ProjectSection.projectsDesign.${id}.title2`),
        description1: t(`ProjectSection.projectsDesign.${id}.description1`),
        description2: t(`ProjectSection.projectsDesign.${id}.description2`),
        link: t(`ProjectSection.projectsDesign.${id}.link`),
      },
    })),
    ongoing: Array.from(
      {
        length: parseInt(t(`ProjectSection.projectsOngoingCount`)),
      },
      (_, i) => i
    ).map((id) => ({
      id: id,
      content: {
        category: "design",
        projectCategory: t(
          `ProjectSection.projectsOngoing.${id}.projectCategory`
        ),
        date: t(`ProjectSection.projectsOngoing.${id}.date`),
        src: t(`ProjectSection.projectsOngoing.${id}.thumbnailSrc`),
        title1: t(`ProjectSection.projectsOngoing.${id}.title1`),
        title2: t(`ProjectSection.projectsOngoing.${id}.title2`),
        description1: t(`ProjectSection.projectsOngoing.${id}.description1`),
        description2: t(`ProjectSection.projectsOngoing.${id}.description2`),
        link: t(`ProjectSection.projectsOngoing.${id}.link`),
      },
    })),
  };

  return (
    <main>
      <HeaderSection category={category} setCategory={setCategory} />
      <ProjectSection projectsData={projectsData} category={category} />
    </main>
  );
};

export default ProjectsClientPage;
