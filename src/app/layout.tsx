import { fallbackLocale, getMessages } from "@locales/index";
import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import Providers from "./providers";
import { Pretendard } from "@constants/constant";

export async function generateMetadata() {
  const locale = fallbackLocale; // now언어
  const messages = await getMessages(locale); // now언어 메시지 로드
  const t = createTranslator({ locale, messages }); // text 번역

  return {
    title: {
      template: `%s | ${t("metadata.title")}`,
      default: t("metadata.title"),
    },
    description: t("metadata.description"),
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: [
      { color: "#ffffff", media: "(prefers-color-scheme: light)" },
      { color: "#000000", media: "(prefers-color-scheme: dark)" },
    ],
    alternates: {
      // 대체 버전 정보
      canonical: "https://nebaram.web.app",
      languages: {
        ko: "/ko",
        en: "/en",
      },
    },
    openGraph: {
      // sns platform share data
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: "https://nebaram.web.app",
      siteName: t("metadata.title"),
      type: "website",
      locale: "ko_KR",
      images: [
        {
          url: "",
          alt: "logo",
          width: 1000,
          height: 1000,
        },
      ],
    },
    scripts: [{}],
  } as Metadata;
}

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = fallbackLocale;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <Providers>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <body className={Pretendard.className}>{children}</body>
        </NextIntlClientProvider>
      </Providers>
    </html>
  );
};

export default LocaleLayout;
