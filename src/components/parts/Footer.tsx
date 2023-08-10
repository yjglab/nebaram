"use client";

import { poppins } from "@constants/constant";
import { clogo } from "@constants/images";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  const t = useTranslations("common");
  const footerMenu = [
    {
      id: 1,
      name: t("Footer.services.name"),
      contents: [
        {
          id: 1,
          name: t("Footer.services.content1.name"),
          link: t("Footer.services.content1.link"),
        },
        {
          id: 2,
          name: t("Footer.services.content2.name"),
          link: t("Footer.services.content2.link"),
        },
        {
          id: 3,
          name: t("Footer.services.content3.name"),
          link: t("Footer.services.content3.link"),
        },
        {
          id: 4,
          name: t("Footer.services.content4.name"),
          link: t("Footer.services.content4.link"),
        },
      ],
    },
    {
      id: 2,
      name: t("Footer.squares.name"),
      contents: [
        {
          id: 1,
          name: t("Footer.squares.content1.name"),
          link: t("Footer.squares.content1.link"),
        },
        {
          id: 2,
          name: t("Footer.squares.content2.name"),
          link: t("Footer.squares.content2.link"),
        },
        {
          id: 3,
          name: t("Footer.squares.content3.name"),
          link: t("Footer.squares.content3.link"),
        },
        {
          id: 4,
          name: t("Footer.squares.content4.name"),
          link: t("Footer.squares.content4.link"),
        },
      ],
    },
    {
      id: 3,
      name: t("Footer.company.name"),
      contents: [
        {
          id: 1,
          name: t("Footer.company.content1.name"),
          link: t("Footer.company.content1.link"),
        },
        {
          id: 2,
          name: t("Footer.company.content2.name"),
          link: t("Footer.company.content2.link"),
        },
        {
          id: 3,
          name: t("Footer.company.content3.name"),
          link: t("Footer.company.content3.link"),
        },
        {
          id: 4,
          name: t("Footer.company.content4.name"),
          link: t("Footer.company.content4.link"),
        },
      ],
    },
    {
      id: 4,
      name: t("Footer.contact.name"),
      contents: [
        {
          id: 1,
          name: t("Footer.contact.content1.name"),
          link: t("Footer.contact.content1.link"),
        },
        {
          id: 2,
          name: t("Footer.contact.content2.name"),
          link: t("Footer.contact.content2.link"),
        },
      ],
    },
  ];
  return (
    <footer>
      <div className="mx-auto mt-20 md:mt-32 max-w-screen-xl space-y-8 px-6 py-16 sm:px-6 lg:space-y-16 lg:px-8 lg:max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div>
              <Link className="flex items-center" href="/">
                <Image src={clogo} width={16} height={16} alt="clogo" />
                <span
                  className={classNames(
                    poppins.className,
                    "ml-1.5 font-[500] text-lg"
                  )}
                >
                  {t("Footer.companyName")}
                </span>
              </Link>
            </div>

            <div className="mt-4 gap-1 flex flex-col max-w-xs text-sm text-gray-500 dark:text-gray-400">
              <p>{t("Footer.description")}</p>
              <p>
                {t("Footer.presidentNameLabel")} | {t("Footer.presidentName")}
              </p>
              <p> {t("Footer.email")}</p>
            </div>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://github.com/yjglab"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            {footerMenu.map((menu) => (
              <div key={menu.id}>
                <p className="font-medium text-gray-900 dark:text-white">
                  {menu.name}
                </p>

                <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm">
                  {menu.contents.map((content) => (
                    <li key={content.id}>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={content.link}
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        {content.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t("Footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
