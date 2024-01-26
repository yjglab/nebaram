"use client";

import { useEffect, useState } from "react";
import i18next, { FlatNamespace, KeyPrefix } from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
  UseTranslationResponse,
  FallbackNs,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector) // 브라우저 언어 감지
  .use(
    // 번역 리소스 동적 로드
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // 초기언어 설정X, 클라이언트에서 감지하도록.
    detection: {
      // 언어 감지범위 우선순위 (경로-태그-쿠키-네비게이터)
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

// Client-side only custom useTranslation hooks
export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
  lng: string,
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const [cookies, setCookie] = useCookies([cookieName]); // 언어 설정 쿠키에 저장
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  console.log(lng, runsOnServerSide, i18n.resolvedLanguage);
  // 서버 사이드이고, 언어 코드가 제공되며, i18n의 현재 언어가 지정된 언어와 다를 경우에만 서버 측에서 언어를 변경
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    const [activeLanguage, setActiveLanguage] = useState(i18n.resolvedLanguage);
    console.log(i18n.resolvedLanguage);
    useEffect(() => {
      if (activeLanguage === i18n.resolvedLanguage) return;
      setActiveLanguage(i18n.resolvedLanguage);
    }, [activeLanguage, i18n.resolvedLanguage]);

    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);

    useEffect(() => {
      if (cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: "/" });
    }, [lng, cookies.i18next]);
  }
  return ret;
}
