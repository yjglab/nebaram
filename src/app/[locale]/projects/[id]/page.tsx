import HeaderSection from "./_components/HeaderSection";
import SliderSection from "./_components/SliderSection";
import DescriptSection from "./_components/DescriptSection";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

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
    <main>
      <HeaderSection />
      <SliderSection />
      <DescriptSection />
    </main>
  );
};

export default ProjectDetailPage;
