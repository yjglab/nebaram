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
    title: "개발자 육재경",
    description: "웹 서비스 개발자, 육재경입니다.",
    openGraph: {
      title: "개발자 육재경",
      description: "웹 서비스 개발자, 육재경입니다.",
    },
  } as Metadata;
}

export default async function OwnerLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return <>{children}</>;
}