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
    verification: {
      google: "GGll82-lmBw6qvsAu-yNTYUWaFOTfMLdy3NzyF89ils",
    },
    openGraph: {
      // sns platform share data
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: "https://nebaram.vercel.app",
      siteName: t("metadata.title"),
      type: "website",
      locale: locale === "ko" ? "ko_KR" : locale === "en" ? "en_US" : "en_US",
      images: [
        {
          url: "/manifest/icon-192x192.png",
          alt: "logo",
          width: 192,
          height: 192,
        },
      ],
    },
    icons: "/images/common/icon.png",
    scripts: [{}],
  } as Metadata;
}

const RootLayout = ({ children }: Props) => {
  return children;
};

export default RootLayout;
