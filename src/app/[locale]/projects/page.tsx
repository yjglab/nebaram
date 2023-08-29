"use client";

import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import HeaderSection from "@components/projects/HeaderSection";
import ProjectSection, {
  ProjectData,
} from "@components/projects/ProjectSection";

interface ProjectsData {
  [key: string]: Array<ProjectData>;
}
const ProjectsPage: NextPage = () => {
  const t = useTranslations("projects");
  const [category, setCategory] = useState<"all" | "development" | "design">(
    "development"
  );
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
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeaderSection category={category} setCategory={setCategory} />
      <ProjectSection projectsData={projectsData} category={category} />
    </main>
  );
};

export default ProjectsPage;
