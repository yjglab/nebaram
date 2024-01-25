import type { Metadata } from "next";
import classNames from "classnames";
import QueryProvider from "@app/(providers)/QueryProvider";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Header from "@app/_common/Header";
import Footer from "@app/_common/Footer";
import { fallbackLanguage, languages } from "@app/i18n/settings";
import { dir } from "i18next";
import { useTranslation } from "@app/i18n";
import { Pretendard } from "@constants/fonts";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLanguage;
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
  // modal: React.ReactNode;
  params: {
    lng: string;
  };
}
const LngRootLayout = async ({ children, params: { lng } }: Props) => {
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
      <body className={classNames(Pretendard.className, "min-h-screen w-full")}>
        <QueryProvider>
          <HydrationBoundary state={dehydratedState}>
            <Header />
            {children}
            {/* {modal} */}
            <Footer />
          </HydrationBoundary>
        </QueryProvider>
      </body>
    </html>
  );
};

export default LngRootLayout;
