import { Metadata } from "next";
import BannerSection from "./_components/BannerSection";
import OutcomeSection from "./_components/OutcomeSection";
import ObjectiveSection from "./_components/ObjectiveSection";
import HistorySection from "./_components/HistorySection";
import SkillSection from "./_components/SkillSection";
import QuestionSection from "./_components/QuestionSection";
import { fallbackLanguage, languages } from "@app/i18n/settings";
import { useTranslation } from "@app/i18n";
import { FC } from "react";

interface Props {
  params: {
    lng: string;
  };
}

export async function generateMetadata({ params: { lng } }: Props) {
  if (languages.indexOf(lng) < 0) lng = fallbackLanguage;
  const { t } = await useTranslation(lng, "metadata");

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

const OwnerPage: FC<Props> = ({ params: { lng } }) => {
  return (
    <main>
      <BannerSection lng={lng} />
      <OutcomeSection lng={lng} />
      <ObjectiveSection lng={lng} />
      <HistorySection lng={lng} />
      <SkillSection lng={lng} />
      <QuestionSection lng={lng} />
    </main>
  );
};

export default OwnerPage;
