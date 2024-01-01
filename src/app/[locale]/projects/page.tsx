import { Metadata, NextPage } from "next";
import React from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import ProjectsClientPage from "./page.client";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale = "en" } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("metadata");

  return {
    title: t("projects.title"),
    description: t("projects.description"),
    openGraph: {
      title: t("projects.title"),
      description: t("projects.description"),
      images: [
        {
          url: "/manifest/opengraph.jpg",
          alt: "thumbnail",
          width: 800,
          height: 400,
        },
      ],
    },
  } as Metadata;
}

const ProjectsPage: NextPage = () => {
  return <ProjectsClientPage />;
};

export default ProjectsPage;
