import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import HeaderSection from "@app/[locale]/projects/[id]/_components/HeaderSection";
import SliderSection from "@app/[locale]/projects/[id]/_components/SliderSection";
import DescriptSection from "@app/[locale]/projects/[id]/_components/DescriptSection";
import OverlayContainer from "@app/_common/containers/OverlayContainer";

interface Props {
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

const ProjectDetailPage = () => {
  return (
    <OverlayContainer>
      <HeaderSection />
      <SliderSection />
      <DescriptSection />
    </OverlayContainer>
  );
};

export default ProjectDetailPage;
