"use client";

import { fallbackLocale, processLocale } from "@locales";
import { redirect } from "next/navigation";

const RootPage = () => {
  const locale = processLocale(window.navigator.language) ?? fallbackLocale;
  redirect(`/${locale}`);
};

export default RootPage;
