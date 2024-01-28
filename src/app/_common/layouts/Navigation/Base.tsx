"use client";

import { Dialog, Menu, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { FC, Fragment, useState } from "react";
import classNames from "classnames";
import { supportedLanguages } from "@app/i18n/settings";
import Link from "next/link";
import { poppins } from "@constants/fonts";
import DropMenu from "@app/_common/parts/DropMenu";
import Scroller from "./Scroller";
import Image from "next/image";
import { nebaramLogoPublicUrl } from "@constants/url";
import { i18n } from "i18next";

interface Props {
  i18n: i18n;
  lng: string;
}
const Base: FC<Props> = ({ i18n, lng }) => {
  const t = i18n.getFixedT(lng, "common");
  const [_, locale, ...rest] = usePathname().split("/");
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className="fixed top-0 z-50 sm:pr-[15px] w-screen bg-black md:bg-black/50 backdrop-blur-md">
      <Scroller />

      {/* 모바일 */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative md:hidden" onClose={onClose}>
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black/70 pb-12 shadow-2xl shadow-black backdrop-blur-xl">
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
                  <div onClick={onClose} className="flow-root">
                    <Link href="/owner" scroll={false}>
                      {t("Navigation.owner")}
                    </Link>
                  </div>
                  <div onClick={onClose} className="flow-root">
                    <Link href="/projects" scroll={false}>
                      {t("Navigation.projects")}
                    </Link>
                  </div>
                  <div className="h-[1.2px] w-full bg-white/30" />

                  {supportedLanguages
                    .filter(
                      (supportedLanguage) => lng !== supportedLanguage.value
                    )
                    .map((language) => {
                      return (
                        <Link
                          key={language.value}
                          className="flex w-28 items-center rounded-md p-2 text-sm"
                          type="button"
                          aria-label="Language switch button"
                          href={`/${language.value}/${rest.join("/")}`}
                        >
                          {language.locale}
                        </Link>
                      );
                    })}
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
      <div className="relative duration-200">
        <div aria-label="Top" className="mx-auto max-w-6xl px-4 xl:px-0">
          <div className="relative">
            <div className="relative flex h-14 w-full items-center justify-between duration-200">
              <div className="flex">
                <div className="ml-2 flex">
                  <Link
                    className="flex items-center hover:opacity-60 transition-opacity"
                    href="/"
                    scroll={false}
                  >
                    <Image
                      src={nebaramLogoPublicUrl}
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
                      {t("Navigation.companyName")}
                    </span>
                  </Link>
                </div>
                <Popover.Group className="hidden items-center md:ml-8 md:flex md:self-stretch">
                  <div className="flex space-x-8">
                    <Link
                      href={`/${lng}/owner`}
                      className={classNames(
                        rest[0] === "owner"
                          ? "border-b-indigo-400"
                          : "border-b-transparent",
                        "border-b-[3px] transition-all hover:text-gray-400"
                      )}
                      scroll={false}
                    >
                      {t("Navigation.owner")}
                    </Link>
                    <Link
                      href={`/${lng}/projects`}
                      className={classNames(
                        rest[0] === "projects"
                          ? "border-b-indigo-400"
                          : "border-b-transparent",
                        "border-b-[3px] transition-all hover:text-gray-400"
                      )}
                      scroll={false}
                    >
                      {t("Navigation.projects")}
                    </Link>
                  </div>
                </Popover.Group>
              </div>
              <div className="hidden md:block">
                <DropMenu title="Language" chevron={true} width={0}>
                  {supportedLanguages
                    .filter(
                      (supportedLanguage) => lng !== supportedLanguage.value
                    )
                    .map((language) => {
                      return (
                        <Menu.Item key={language.value}>
                          {({ active }) => (
                            <Link
                              className={`${
                                active ? "bg-indigo-400" : "text-black"
                              } group flex w-28 items-center rounded-md p-2 text-sm`}
                              type="button"
                              aria-label="Language switch button"
                              href={`/${language.value}/${rest.join("/")}`}
                            >
                              {language.locale}
                            </Link>
                          )}
                        </Menu.Item>
                      );
                    })}
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
        </div>
      </div>
    </nav>
  );
};
export default Base;
