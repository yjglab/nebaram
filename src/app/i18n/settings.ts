export const fallbackLng = "en";
export const languages = [fallbackLng, "ko"];
export const supportedLanguages = [
  { locale: "🇺🇸 ENGLISH", value: "en" },
  { locale: "🇰🇷 한국어", value: "ko" },
];
export const defaultNS = "common";
export const cookieName = "i18next";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  };
}
