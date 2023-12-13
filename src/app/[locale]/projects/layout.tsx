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
    title: t("metadata.projects.title"),
    description: t("metadata.projects.description"),
    openGraph: {
      title: t("metadata.projects.title"),
      description: t("metadata.projects.description"),
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

export default async function ProjectsLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return <>{children}</>;
}
