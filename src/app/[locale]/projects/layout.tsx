import { getMessages } from "@locales/index";
import { Metadata } from "next";
import { createTranslator } from "next-intl";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale = "en" } }: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });
  return {
    title: "프로젝트",
    description: "대표 개발자의 프로젝트를 소개합니다.",
    openGraph: {
      title: "프로젝트",
      description: "대표 개발자의 프로젝트를 소개합니다.",
    },
  } as Metadata;
}

export default async function ProjectsLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return <>{children}</>;
}
