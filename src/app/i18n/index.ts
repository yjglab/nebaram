import { createInstance, Namespace, FlatNamespace, KeyPrefix } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { FallbackNs } from "react-i18next";
import { getOptions } from "./settings";

// 새 Locale 설정 함수
const initI18next = async (lng: string, ns: string | string[]) => {
  // server side에선 컴파일하는 동안 모두 병렬 실행되는 것처럼 보이기 때문에 렌더링마다 새 인스턴스를 만듭
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      // 번역 리소스파일 로드
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

// Server-side only hooks
export async function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined // 번역 키 앞에 추가될 문자열
>(lng: string, ns?: Ns, options: { keyPrefix?: KPrefix } = {}) {
  const i18nextInstance = await initI18next(
    lng,
    Array.isArray(ns) ? (ns as string[]) : (ns as string)
  );
  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix), // 현재 언어 및 NS에 고정된(translated) 번역 함수 T 로드.
    i18n: i18nextInstance,
  };
}
