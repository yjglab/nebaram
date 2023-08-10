"use client";

import { NextPage } from "next";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import HeaderSection from "@components/projects/HeaderSection";
import ProjectSection from "@components/projects/ProjectSection";

export interface ProjectData {
  id: number;
  category: string;
  src: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
}

const ProjectsPage: NextPage = () => {
  const t = useTranslations("projects");
  const [selectedCategory, setSelectedCategory] = useState(
    t("HeaderSection.category2")
  );
  const projectsData = [
    {
      id: 1,
      category: t("ProjectSection.project1.category"),
      src: "/images/projects/project-section/nebaram_thumb.jpg",
      title1: t("ProjectSection.project1.title1"),
      title2: t("ProjectSection.project1.title2"),
      description1: t("ProjectSection.project1.description1"),
      description2: t("ProjectSection.project1.description2"),
    },
    {
      id: 2,
      category: t("ProjectSection.project2.category"),
      src: "/images/projects/project-section/bloobolt_thumb.png",
      title1: t("ProjectSection.project2.title1"),
      title2: t("ProjectSection.project2.title2"),
      description1: t("ProjectSection.project2.description1"),
      description2: t("ProjectSection.project2.description2"),
    },
    {
      id: 3,
      category: t("ProjectSection.project3.category"),
      src: "/images/projects/project-section/blooways_thumb.png",
      title1: t("ProjectSection.project3.title1"),
      title2: t("ProjectSection.project3.title2"),
      description1: t("ProjectSection.project3.description1"),
      description2: t("ProjectSection.project3.description2"),
    },
    {
      id: 4,
      category: t("ProjectSection.project4.category"),
      src: "/images/projects/project-section/mug_thumb.png",
      title1: t("ProjectSection.project4.title1"),
      title2: t("ProjectSection.project4.title2"),
      description1: t("ProjectSection.project4.description1"),
      description2: t("ProjectSection.project4.description2"),
    },
    {
      id: 5,
      category: t("ProjectSection.project5.category"),
      src: "/images/projects/project-section/tira_thumb.png",
      title1: t("ProjectSection.project5.title1"),
      title2: t("ProjectSection.project5.title2"),
      description1: t("ProjectSection.project5.description1"),
      description2: t("ProjectSection.project5.description2"),
    },
  ];

  return (
    <>
      <HeaderSection selectedCategory={selectedCategory} />
      <ProjectSection projectsData={projectsData} />
    </>
  );
};

export default ProjectsPage;
