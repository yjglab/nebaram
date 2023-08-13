"use client";

import { Dialog, Menu, Popover, Transition } from "@headlessui/react";
import {
  Locale,
  fallbackLocale,
  processLocale,
  supportedLocales,
  supportedLocalesMap,
} from "@locales";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next-intl/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, Fragment, useCallback, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { poppins } from "@constants/constant";
import { clogo } from "@constants/images";
import Image from "next/image";
import DropMenu from "@components/parts/DropMenu";
import { useTranslations } from "next-intl";
import { ArrowUpIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const Header: FC = () => {
  const t = useTranslations("common");

  const router = useRouter();
  const pathname = usePathname();
  const localizedPathname = useMemo(() => {
    const [_, ...routes] = pathname.split("/");
    const isSupportedLocale = supportedLocales.includes(routes[0] as Locale);
    if (isSupportedLocale) {
      return "/" + routes.slice(1).join("/");
    } else {
      return pathname;
    }
  }, [pathname]);

  const navigation = {
    categories: [],
    pages: [
      // { name: t("Header.about"), href: "/" },
      { name: t("Header.owner"), href: "/owner" },
      { name: t("Header.projects"), href: "/projects" },
    ],
  };
  const [topIndicatorOn, setTopIndicatorOn] = useState(false);
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleLanguageChange = (targetLocale: Locale) => {
    const processedLocale = processLocale(targetLocale);
    const [_, locale, ...rest] = pathname.split("/");
    if (locale !== processedLocale) {
      router.replace(`/${processedLocale}/${rest.join("/")}`);
    }
  };
  const handleTopIndicator = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const [_, ...routes] = pathname.split("/");
    const isSupportedLocale = supportedLocales.includes(routes[0] as Locale);
    if (isSupportedLocale) {
      const locale = processLocale(routes[0] as Locale);
      const path = routes.slice(1).join("/");
      const target = `/${locale}/${path}`;
      if (!target.startsWith(pathname)) router.replace(target);
    } else {
      const locale = processLocale(window.navigator.language) ?? fallbackLocale;
      const path = routes.length > 0 ? "/" + routes.join("/") : "";
      const target = `/${locale}/${path}`;
      if (!target.startsWith(pathname)) router.replace(target);
    }
  }, [pathname, router]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setTopIndicatorOn(true);
      } else {
        setTopIndicatorOn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="fixed top-0 z-50 w-full bg-black md:bg-black/50 backdrop-blur-md"
    >
      {/* 모바일 */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-200 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black/10 pb-12 shadow-2xl shadow-black backdrop-blur-xl">
                <div className="item-center flex justify-end  px-6 py-3">
                  <button
                    type="button"
                    aria-label="close button"
                    className="relative top-1.5 -m-2 inline-flex items-center justify-center rounded-md p-2 "
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* Links */}
                <div className="space-y-5 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div
                      onClick={onClose}
                      key={page.name}
                      className="flow-root"
                    >
                      <Link href={page.href} className="block p-2">
                        {page.name}
                      </Link>
                    </div>
                  ))}

                  <div className="h-[1.2px] w-full bg-white/30" />

                  {supportedLocalesMap.map((localeMap) => (
                    <div key={localeMap.name} className="flow-root">
                      <button
                        aria-label="locale link button"
                        key={localeMap.locale}
                        onClick={() =>
                          handleLanguageChange(localeMap.locale as Locale)
                        }
                        className="block p-2"
                      >
                        {localeMap.name}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-5 mt-2 w-full px-4 py-6">
                  <p className="mt-4 text-center text-xs leading-6 ">
                    {t("Footer.copyright")}
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* 모바일 + PC */}
      {topIndicatorOn && (
        <button
          type="button"
          aria-label="go to top button"
          onClick={handleTopIndicator}
          className="absolute right-[5vw] h-11 w-11 translate-y-[90vh] rounded-full bg-indigo-400 p-1 duration-200 hover:bg-indigo-500 md:right-10 md:h-12 md:w-12 md:translate-y-[92vh] md:p-1.5"
        >
          <ChevronUpIcon className="relative bottom-0.5" />
        </button>
      )}

      <header className="relative duration-200">
        <nav aria-label="Top" className="mx-auto max-w-6xl px-4 xl:px-0">
          <div className="relative">
            <div className="relative flex h-14 w-full items-center justify-between duration-200">
              <div className="flex">
                <div className="ml-2 flex">
                  <Link className="flex items-center" href="/">
                    <Image
                      src={clogo}
                      width={16}
                      height={16}
                      alt="brand logo"
                    />
                    <span
                      className={classNames(
                        poppins.className,
                        "ml-1.5 font-[500] text-lg"
                      )}
                    >
                      {t("Header.companyName")}
                    </span>
                  </Link>
                </div>
                <Popover.Group className="hidden items-center md:ml-8 md:flex md:self-stretch">
                  <div className="flex space-x-8">
                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className={classNames(
                          page.href === "/" ? "cursor-not-allowed" : "",
                          "relative duration-200 text-sm flex items-center"
                        )}
                      >
                        <span className="duration-200 hover:-translate-y-0.5">
                          {page.name}
                        </span>
                        {localizedPathname === page.href && (
                          <div className="absolute -bottom-1 mx-auto h-0.5 w-full rounded-md bg-indigo-400"></div>
                        )}
                      </Link>
                    ))}
                  </div>
                </Popover.Group>
              </div>
              <div className="hidden md:block">
                <DropMenu title="Language" chevron={true} width={24}>
                  {supportedLocalesMap.map((localeMap) => (
                    <Menu.Item key={localeMap.name}>
                      {({ active }) => (
                        <button
                          aria-label="change language"
                          onClick={() =>
                            handleLanguageChange(localeMap.locale as Locale)
                          }
                          className={`${
                            active ? "bg-indigo-400" : "text-black"
                          } group flex w-full items-center rounded-md p-2 text-sm`}
                        >
                          {localeMap.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </DropMenu>
              </div>

              {/* 모바일 메뉴 트리거 */}
              <button
                type="button"
                aria-label="open mobile menu"
                className="absolute right-0  rounded-md p-2 md:hidden"
                onClick={() => setOpen(true)}
              >
                <Bars3Icon
                  className="h-6 w-6 stroke-2  text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* <HeaderNotice /> */}
    </div>
  );
};

export default Header;
