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
import HeaderNotice from "./HeaderNotice";

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
      { name: t("Header.about"), href: "/" },
      { name: t("Header.owner"), href: "/owner" },
      { name: t("Header.projects"), href: "/projects" },
    ],
  };

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

  return (
    <div id="navbar" className="z-50 backdrop-blur-md bg-black/30 fixed w-full">
      {/* 모바일 */}
      {/* <Transition.Root show={open} as={Fragment}>
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
              <Dialog.Panel className="bg-white/10 backdrop-blur-sm relative flex w-full max-w-xs flex-col overflow-y-auto pb-12 shadow-xl">
                <div className="flex px-6 py-3  item-center justify-end">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 "
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
      {/* <div className="space-y-6  px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div
                      onClick={onClose}
                      key={page.name}
                      className="flow-root"
                    >
                      <Link href={page.href} className="-m-2 block p-2">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-5 mt-2 px-4 py-6 w-full">
                  <div className="flex w-full justify-center gap-1 items-center left-0 right-0 mx-auto">
                    <img alt="" src="" className="w-8" />
                  </div>
                  <p className="mt-4 text-center text-xs leading-6 ">
                    © 2023 Jaekyeong Yuk. All rights reserved.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root> */}

      {/* 모바일 + PC */}
      <header className="relative duration-200">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 xl:px-0">
          <div className="relative">
            <div className="h-16 duration-200 flex w-full items-center justify-between relative">
              <div className="flex">
                <div className="flex ml-2">
                  <Link className="flex items-center" href="/">
                    <Image src={clogo} width={16} height={16} alt="clogo" />
                    <span
                      className={classNames(
                        poppins.className,
                        "ml-1.5 font-[500] text-lg"
                      )}
                    >
                      nebaram
                    </span>
                  </Link>
                </div>
                <Popover.Group className="hidden md:ml-8 md:block md:self-stretch">
                  <div className="flex space-x-8">
                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="relative duration-200 text-sm flex items-center "
                      >
                        <span className="duration-200 hover:-translate-y-0.5">
                          {page.name}
                        </span>
                        {localizedPathname === page.href && (
                          <div className="w-full mx-auto absolute bg-indigo-400 h-0.5 rounded-md -bottom-1"></div>
                        )}
                      </Link>
                    ))}
                  </div>
                </Popover.Group>
              </div>
              <div>
                <DropMenu title="Language" chevron={true} width={24}>
                  {supportedLocalesMap.map((localeMap) => (
                    <Menu.Item key={localeMap.locale}>
                      {({ active }) => (
                        <button
                          onClick={() =>
                            handleLanguageChange(localeMap.locale as Locale)
                          }
                          className={`${
                            active ? "bg-indigo-400" : "text-black"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {localeMap.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </DropMenu>
              </div>

              {/* 모바일 메뉴 트리거 */}
              {/* <button
                type="button"
                className="rounded-md p-2  md:hidden absolute right-0"
                onClick={() => setOpen(true)}
              >
                <Bars3Icon
                  className="h-6 w-6 text-white  stroke-2"
                  aria-hidden="true"
                />
              </button> */}
            </div>
          </div>
        </nav>
      </header>

      {/* <HeaderNotice /> */}
    </div>
  );
};

export default Header;
