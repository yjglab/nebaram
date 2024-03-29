import { poppins } from "@constants/fonts";
import { nebaramLogoPublicUrl } from "@constants/url";
import classNames from "classnames";
import { i18n } from "i18next";
import Image from "next/image";
import Link from "next/link";
import React, { FC, memo } from "react";

interface FooterMenu {
  name: string;
  contents: { [key: string]: string }[];
}
interface Props {
  i18n: i18n;
  lng: string;
}
const Footer: FC<Props> = ({ i18n, lng }) => {
  const t = i18n.getFixedT(lng, "common");
  const footerMenu: FooterMenu[] = [
    t("Footer.services", {
      returnObjects: true,
    }),
    t("Footer.company", {
      returnObjects: true,
    }),
    t("Footer.contact", {
      returnObjects: true,
    }),
  ];

  return (
    <footer className="mx-auto mt-20 max-w-screen-xl space-y-8 px-6 py-16 sm:px-6 md:mt-32 lg:max-w-6xl lg:space-y-16 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <Link className="flex items-center" href="/">
            <Image
              src={nebaramLogoPublicUrl}
              alt="brand logo"
              width={16}
              height={16}
            />
            <span
              className={classNames(
                poppins.className,
                "ml-1.5 font-[500] text-lg"
              )}
            >
              {t("Footer.companyName")}
            </span>
          </Link>

          <hgroup className="mt-4 flex max-w-xs flex-col gap-1 text-sm ">
            <h1>{t("Footer.description")}</h1>
            <h2>
              {t("Footer.presidentNameLabel")} | {t("Footer.presidentName")}
            </h2>
            <h2> {t("Footer.email")}</h2>
          </hgroup>

          <ul className="mt-8 flex gap-6">
            <li>
              <a
                href="https://github.com/yjglab"
                rel="noreferrer"
                target="_blank"
                className="transition hover:opacity-75 "
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
            <div key={menu.name}>
              <h1 className="font-medium">{menu.name}</h1>
              <ul className="mt-4 space-y-3 text-sm md:mt-6 md:space-y-4">
                {menu.contents?.map((content) => (
                  <li key={content.name}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={content.link}
                      className="text-gray-400 transition hover:opacity-75"
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

      <p className="text-xs text-gray-400">{t("Footer.copyright")}</p>
    </footer>
  );
};

export default memo(Footer);
