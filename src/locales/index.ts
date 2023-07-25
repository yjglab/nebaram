import KoMessages from "./ko";

export { KoMessages };
export const localeData = { ko: KoMessages };
export type Locale = "ko";
export const fallbackLocale: Locale = "ko";
export const supportedLocales: Locale[] = ["ko"];

export const processLocale = (locale: string): Locale | null => {
  if (locale.startsWith("ko")) {
    return "ko";
  }
  return null;
};

export const getMessages = (locale: string) => {
  switch (processLocale(locale)) {
    case "ko":
      return KoMessages;
    default:
      return;
  }
};
