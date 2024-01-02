import { Metadata, NextPage } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import BannerSection from "./_components/BannerSection";
import OutcomeSection from "./_components/OutcomeSection";
import ObjectiveSection from "./_components/ObjectiveSection";
import HistorySection from "./_components/HistorySection";
import SkillSection from "./_components/SkillSection";
import QuestionSection from "./_components/QuestionSection";

interface Props {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale = "en" } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("metadata");
  return {
    title: t("owner.title"),
    description: t("owner.description"),
    openGraph: {
      title: t("owner.title"),
      description: t("owner.description"),
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

const OwnerPage: NextPage = () => {
  return (
    <main>
      <BannerSection />
      <OutcomeSection />
      <ObjectiveSection />
      <HistorySection />
      <SkillSection />
      <QuestionSection />
    </main>
  );
};

export default OwnerPage;
