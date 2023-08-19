"use client";

import { NextPage } from "next";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Locale,
  fallbackLocale,
  processLocale,
  supportedLocales,
} from "@locales";
import SplashScreen from "@components/parts/SplashScreen";

const MainPage: NextPage = () => {
  // about 제작 후 제거
  const navigator = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const [_, ...routes] = pathname.split("/"); // /ab/cd ["", "ab", "cd"]
    const isSupportedLocale = supportedLocales.includes(routes[0] as Locale);

    // 지원할 다국어 존재하는 경우 해당 언어로 경로 변경
    setTimeout(() => {
      if (isSupportedLocale) {
        const locale = processLocale(routes[0] as Locale); // ko
        navigator.replace(`/${locale}/owner`);
      } else {
        const locale =
          processLocale(window.navigator.language) ?? fallbackLocale;
        navigator.replace(`/${locale}/owner`);
      }
    }, 2600);
  }, [navigator, pathname]);
  //

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SplashScreen />
      <div className="min-h-screen w-full"></div>
    </>
  );
};

export default MainPage;
