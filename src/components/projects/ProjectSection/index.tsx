"use client";

import React, { FC } from "react";
import ProjectCard from "./ProjectCard";

export interface ProjectContent {
  category: "development" | "design";
  projectCategory: string;
  date: string;
  src: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  link?: string; // only design
}
export interface ProjectData {
  id: number;
  content: ProjectContent;
}

interface Props {
  projectsData: {
    [key: string]: Array<ProjectData>;
  };
  category: "development" | "design" | "all";
}
const ProjectSection: FC<Props> = ({ projectsData, category }) => {
  const allProjectsData = [...projectsData.development, ...projectsData.design];

  return (
    <section className="mb-20 px-6 font-medium">
      <div className="mx-auto mt-10 max-w-2xl lg:max-w-6xl ">
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
          {category === "all" &&
            allProjectsData.map((data, index) => (
              <ProjectCard
                key={data.content.title1}
                data={data.content}
                index={index}
                category={data.content.category}
              />
            ))}
          {category === "development" &&
            projectsData.development.map((data, index) => (
              <ProjectCard
                key={data.id}
                data={data.content}
                index={index}
                category={category}
              />
            ))}
          {category === "design" &&
            projectsData.design.map((data, index) => (
              <ProjectCard
                key={data.id}
                data={data.content}
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
