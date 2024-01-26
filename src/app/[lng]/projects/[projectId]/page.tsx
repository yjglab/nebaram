import HeaderSection from "./_components/HeaderSection";
import SliderSection from "./_components/SliderSection";
import DescriptSection from "./_components/DescriptSection";
import { Metadata } from "next";
import { fallbackLng, languages } from "@app/i18n/settings";
import { useTranslation } from "@app/i18n";
import { FC } from "react";

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
  };
}
const ProjectDetailPage: FC<Props> = ({ params: { lng } }) => {
  return (
    <main className="mt-16">
      <HeaderSection lng={lng} />
      <SliderSection lng={lng} />
      <DescriptSection lng={lng} />
    </main>
  );
};

export default ProjectDetailPage;