import { Metadata, NextPage } from "next";
import React, { FC } from "react";
import { fallbackLng, languages } from "@app/i18n/settings";
import { useTranslation } from "@app/i18n";
import HeaderSection from "./_components/HeaderSection";
import ProjectSection from "./_components/ProjectSection";

interface Props {
  params: {
    lng: string;
  };
}
export async function generateMetadata({ params: { lng } }: Props) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "metadata");

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

const ProjectsPage: FC<Props> = async ({ params: { lng } }) => {
  return (
    <main>
      <HeaderSection lng={lng} />
      <ProjectSection lng={lng} />
    </main>
  );
};

export default ProjectsPage;
