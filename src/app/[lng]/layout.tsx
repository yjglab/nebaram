import "../globals.css";
import type { Metadata } from "next";
import classNames from "classnames";
import QueryProvider from "@app/(providers)/QueryProvider";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fallbackLng, languages } from "@app/i18n/settings";
import { dir } from "i18next";
import { useTranslation } from "@app/i18n";
import Navigation from "@app/_common/layouts/Navigation";
import Footer from "@app/_common/layouts/Footer";
import { notoSans } from "@constants/fonts";
import ReduxProvider from "@app/(providers)/ReduxProvider";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "metadata");
  return {
    metadataBase: new URL(`https://nebaram.vercel.app/${lng}`),
    title: {
      template: `%s | ${t("app.title")}`,
      default: t("app.title"),
    },
    description: t("app.description"),
    openGraph: {
      // sns platform share data
      title: t("app.title"),
      description: t("app.description"),
      url: `https://nebaram.vercel.app/${lng}`,
      siteName: t("app.title"),
      locale: lng === "ko" ? "ko_KR" : lng === "en" ? "en_US" : "en_US",
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
    lng: string;
  };
}
const LngRootLayout = async ({
  children,
  modal,
  params: { lng } = { lng: fallbackLng },
}: Props) => {
  const { t, i18n } = await useTranslation(lng, "common");
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang={lng} dir={dir(lng)}>
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
      <body className={classNames(notoSans.className, "min-h-screen w-full")}>
        <QueryProvider>
          <HydrationBoundary state={dehydratedState}>
            <ReduxProvider>
              <Navigation lng={lng} />
              {children}
              {modal}
              <Footer i18n={i18n} lng={lng} />
            </ReduxProvider>
          </HydrationBoundary>
        </QueryProvider>
      </body>
    </html>
  );
};

export default LngRootLayout;
