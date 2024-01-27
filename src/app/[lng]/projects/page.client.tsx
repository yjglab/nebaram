"use client";

import ProjectSection from "./_components/ProjectSection";
import { FC, useCallback, useState } from "react";
import HeaderSection from "./_components/HeaderSection";
import { ProjectSectionCategory } from "@/@types";

interface Props {
  lng: string;
}
const ProjectsClientPage: FC<Props> = ({ lng }) => {
  const [category, setCategory] =
    useState<ProjectSectionCategory>("development");

  const changeCategory = useCallback((category: ProjectSectionCategory) => {
    setCategory(category);
  }, []);

  return (
    <main>
      <HeaderSection
        lng={lng}
        category={category}
        changeCategory={changeCategory}
      />
      <ProjectSection lng={lng} category={category} />
    </main>
  );
};

export default ProjectsClientPage;
