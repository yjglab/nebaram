// import KoMessages from "./ko";
// import EnMessages from "./en";

// export { KoMessages, EnMessages };
// export const localeData = { ko: KoMessages, en: EnMessages };
// export type Locale = "ko" | "en";
// export const fallbackLocale: Locale = "en";
// export const supportedLocales: Locale[] = ["ko", "en"];
// export const supportedLocalesMap = [
//   { locale: "ko", name: "한국어" },
//   { locale: "en", name: "English" },
// ];
export type Locale = "ko" | "en";
// export const processLocale = (locale: string): Locale | null => {
//   if (locale.startsWith("ko")) {
//     return "ko";
//   } else if (locale.startsWith("en")) {
//     return "en";
//   }
//   return null;
// };

// export const getMessages = (locale: string) => {
//   switch (processLocale(locale)) {
//     case "ko":
//       return KoMessages;
//     case "en":
//     default:
//       return EnMessages;
//   }
// };
