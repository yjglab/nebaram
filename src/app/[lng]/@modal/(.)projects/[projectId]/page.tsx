import { Metadata } from "next";
import OverlayContainer from "@app/_common/containers/OverlayContainer";
import { fallbackLng, languages } from "@app/i18n/settings";
import { useTranslation } from "@app/i18n";
import HeaderSection from "@app/[lng]/projects/[projectId]/_components/HeaderSection";
import SliderSection from "@app/[lng]/projects/[projectId]/_components/SliderSection";
import DescriptSection from "@app/[lng]/projects/[projectId]/_components/DescriptSection";
import { FC } from "react";
import { ProjectDevelopment } from "@/@types";

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}) {
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

interface Props {
  params: {
    lng: string;
    projectId: string;
  };
}
const ProjectDetailPage: FC<Props> = async ({ params: { lng, projectId } }) => {
  const { t } = await useTranslation(lng, "projects");
  const project: ProjectDevelopment = t(
    `ProjectSection.projectsDevelopment.${parseInt(projectId) - 1}`,
    {
      returnObjects: true,
    }
  );

  return (
    <OverlayContainer>
      <HeaderSection project={project} />
      <SliderSection project={project} />
      <DescriptSection
        project={project}
        label={t("ProjectSection.projectDescriptionLabel")}
      />
    </OverlayContainer>
  );
};
export default ProjectDetailPage;
