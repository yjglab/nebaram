import { Metadata } from "next";
import "./globals.css";
import { createTranslator } from "next-intl";
import { getMessages } from "@locales";

interface Props {
  children: React.ReactNode;
}

export async function generateMetadata({ params: { locale = "en" } }) {
  const messages = await getMessages(locale); // now언어 메시지 로드
  const t = createTranslator({ locale, messages }); // text 번역

  return {
    title: {
      template: `%s | ${t("metadata.title")}`,
      default: t("metadata.title"),
    },
    description: t("metadata.description"),
    viewport: "width=device-width, initial-scale=1.0",
    verification: {
      google: "FKAEe8KI4Q28hSvJ1Fk5eCUWPna4HSuP5T1_ndBOt7E",
    },
    manifest: "/manifest/manifest.json",
    openGraph: {
      // sns platform share data
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: "https://nebaram.vercel.app",
      siteName: t("metadata.title"),
      type: "website",
      locale: "ko_KR",
      images: [
        {
          url: "/manifest/opengraph.jpg",
          alt: "thumbnail",
          width: 800,
          height: 400,
        },
      ],
    },
    icons: "/images/common/icon.png",
  } as Metadata;
}

const RootLayout = ({ children }: Props) => {
  return children;
};

export default RootLayout;
