"use client";

import React, { FC, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "@app/i18n/client";
import {
  ProjectDesign,
  ProjectDevelopment,
  ProjectOngoing,
  ProjectSectionCategory,
  WholeProjects,
} from "@/@types";

interface Props {
  lng: string;
  category: ProjectSectionCategory;
}
const ProjectSection: FC<Props> = ({ lng, category }) => {
  const [projects, setProjects] = useState<WholeProjects>();
  const { t } = useTranslation(lng, "projects");

  useEffect(() => {
    const projectsDevelopment: ProjectDevelopment[] = t(
      "ProjectSection.projectsDevelopment",
      {
        returnObjects: true,
      }
    );
    const projectDesign: ProjectDesign[] = t("ProjectSection.projectsDesign", {
      returnObjects: true,
    });
    const projectOngoing: ProjectOngoing[] = t(
      "ProjectSection.projectsOngoing",
      {
        returnObjects: true,
      }
    );
    if (category === "all") {
      setProjects([
        ...projectOngoing,
        ...projectsDevelopment,
        ...projectDesign,
      ]);
    } else if (category === "design") {
      setProjects([...projectDesign]);
    } else if (category === "development") {
      setProjects([...projectsDevelopment]);
    } else if (category === "ongoing") {
      setProjects([...projectOngoing]);
    }
  }, [category]);

  return (
    <section className="mb-20 min-h-screen px-6 font-medium">
      <div className="mx-auto mt-10 max-w-2xl lg:max-w-6xl ">
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
          {projects?.map((project, index) => (
            <ProjectCard
              key={project.title?.[0]}
              lng={lng}
              project={project}
              index={index}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
