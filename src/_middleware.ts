import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ko"],
  defaultLocale: "ko",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // api, _next, 확장자 파일 제외 후 미들웨어 동작하도록 설정
};
