import { Metadata, NextPage } from "next";
import React, { FC } from "react";
import ProjectsClientPage from "./page.client";
import { fallbackLng, languages } from "@app/i18n/settings";
import { useTranslation } from "@app/i18n";

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
  return <ProjectsClientPage lng={lng} />;
};

export default ProjectsPage;
