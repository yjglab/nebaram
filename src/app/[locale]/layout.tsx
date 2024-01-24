import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import classNames from "classnames";
import QueryProvider from "@app/(providers)/QueryProvider";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { locales } from "@/config";
import { getMessages, getTranslations } from "next-intl/server";
import Header from "@app/_common/Header";
import Footer from "@app/_common/Footer";

const Pretendard = localFont({
  src: "../../../public/fonts/PretendardVariable.woff2",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale = "en" } }) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    metadataBase: new URL(`https://nebaram.vercel.app/${locale}`),
    title: {
      template: `%s | ${t("app.title")}`,
      default: t("app.title"),
    },
    description: t("app.description"),
    openGraph: {
      // sns platform share data
      title: t("app.title"),
      description: t("app.description"),
      url: `https://nebaram.vercel.app/${locale}`,
      siteName: t("app.title"),
      locale: locale === "ko" ? "ko_KR" : locale === "en" ? "en_US" : "en_US",
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

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: {
    locale: string;
  };
}
const LocaleLayout = async ({ children, modal, params: { locale } }: Props) => {
  const messages: IntlMessages = await getMessages({ locale });
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang={locale}>
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
      <body className={classNames(Pretendard.className, "min-h-screen w-full")}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <QueryProvider>
            <HydrationBoundary state={dehydratedState}>
              <Header />
              {children}
              {modal}
              <Footer />
            </HydrationBoundary>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
