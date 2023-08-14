import { Locale, getMessages } from "@locales/index";
import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  createTranslator,
} from "next-intl";
import classNames from "classnames";
import Header from "@components/parts/Header";
import Footer from "@components/parts/Footer";

const Pretendard = localFont({
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
      url: "https://nebaram.vercel.app",
      siteName: t("metadata.title"),
      type: "website",
      locale: locale === "ko" ? "ko_KR" : locale === "en" ? "en_US" : "en_US",
      images: [
        {
          url: "/images/common/icon.png",
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

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
const LocaleLayout = async ({ children, params: { locale } }: Props) => {
  const messages: IntlMessages = await getMessages(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <link
          rel="canonical"
          hrefLang="en-US"
          href="https://nebaram.vercel.app/en/"
          key="canonical"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://nebaram.vercel.app/ko/"
        />
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
