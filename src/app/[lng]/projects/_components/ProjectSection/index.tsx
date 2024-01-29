"use client";

import React, { FC, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "@app/i18n/client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SET_PROJECTS, SET_PROJECTS_DATA } from "@/redux/slices/projects.slice";

interface Props {
  lng: string;
}
const ProjectSection: FC<Props> = ({ lng }) => {
  const category = useAppSelector((state) => state.projects.category);
  const projects = useAppSelector((state) => state.projects.projects);
  const dispatch = useAppDispatch();
  const { t } = useTranslation(lng, "projects");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!projects[0]) {
      dispatch(
        SET_PROJECTS_DATA({
          development: t("ProjectSection.projectsDevelopment", {
            returnObjects: true,
          }),
          design: t("ProjectSection.projectsDesign", {
            returnObjects: true,
          }),
          ongoing: t("ProjectSection.projectsOngoing", {
            returnObjects: true,
          }),
        })
      );
    }
  }, []);

  useEffect(() => {
    if (category === "all") {
      dispatch(SET_PROJECTS("all"));
    } else if (category === "design") {
      dispatch(SET_PROJECTS("design"));
    } else if (category === "development") {
      dispatch(SET_PROJECTS("development"));
    } else if (category === "ongoing") {
      dispatch(SET_PROJECTS("ongoing"));
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
