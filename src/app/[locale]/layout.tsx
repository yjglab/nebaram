import { getMessages } from "@locales/index";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import classNames from "classnames";
import Header from "@components/parts/Header";
import Footer from "@components/parts/Footer";

export const Pretendard = localFont({
  src: "../../../public/fonts/PretendardVariable.woff2",
});
export async function generateMetadata({ params: { locale = "en" } }) {
  const messages = await getMessages(locale); // now언어 메시지 로드
  const t = createTranslator({ locale, messages }); // text 번역

  return {
    title: {
      template: `%s | ${t("metadata.title")}`,
      default: t("metadata.title"),
    },
    description: t("metadata.description"),
    openGraph: {
      // sns platform share data
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: "https://nebaram.web.app",
      siteName: t("metadata.title"),
      type: "website",
      locale: locale === "ko" ? "ko_KR" : locale === "en" ? "en_US" : "en_US",
      images: [
        {
          url: "",
          alt: "logo",
          width: 1000,
          height: 1000,
        },
      ],
    },
    icons: "/images/common/icon.png",
    scripts: [{}],
  } as Metadata;
}

const LocaleLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) => {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={classNames(Pretendard.className)}>
          <Header />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
};

export default LocaleLayout;
