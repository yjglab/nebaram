"use client";

import BannerSection from "@components/about/BannerSection";
import TeamSection from "@components/about/TeamSection";
import OutcomeSection from "@components/about/OutcomeSection";
import {
  Locale,
  fallbackLocale,
  processLocale,
  supportedLocales,
} from "@locales";
import { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import ObjectiveSection from "@components/about/ObjectiveSection";
import HistorySection from "@components/about/HistorySection";

const MainPage: NextPage = () => {
  const pathname = usePathname(); // 브라우저 경로
  const navigator = useRouter();

  useEffect(() => {
    const [_, ...routes] = pathname.split("/"); // /ab/cd ["", "ab", "cd"]
    const isSupportedLocale = supportedLocales.includes(routes[0] as Locale);

    // 지원할 다국어 존재하는 경우 해당 언어로 경로 변경
    if (isSupportedLocale) {
      const locale = processLocale(routes[0] as Locale); // ko
      const path = routes.slice(1).join("/"); // 나머지 url
      navigator.replace(`/${locale}/${path}`);
    } else {
      const locale = processLocale(window.navigator.language) ?? fallbackLocale;
      const path = routes.join("/");
      navigator.replace(`/${locale}/${path}`);
    }
  }, [navigator, pathname]);

  return (
    <div className="sr-only flex flex-col items-stretch">
      <BannerSection />
      <OutcomeSection />
      <ObjectiveSection />
      <HistorySection />
      <TeamSection />
    </div>
  );
};

export default MainPage;
