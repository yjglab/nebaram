"use client";

import classNames from "classnames";
import { FC } from "react";
import { motion } from "framer-motion";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "@app/i18n/client";
import { ProjectSectionCategory } from "@/@types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SET_CATEGORY } from "@/redux/slices/projects.slice";

interface Props {
  lng: string;
}
const HeaderSection: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "projects");
  const category = useAppSelector((state) => state.projects.category);
  const dispatch = useAppDispatch();

  const headerCategories: [string, ProjectSectionCategory][] = [
    [t("HeaderSection.categories.0"), "all"],
    [t("HeaderSection.categories.1"), "development"],
    [t("HeaderSection.categories.2"), "design"],
    [t("HeaderSection.categories.3"), "ongoing"],
  ];

  const handleSetCategory = (targetCategory: ProjectSectionCategory) => {
    dispatch(SET_CATEGORY(targetCategory));
  };

  return (
    <section className="mx-auto max-w-2xl px-6 mt-24 md:mt-32 lg:max-w-6xl ">
      <header className="relative flex flex-col justify-between gap-2 text-sm md:gap-0 lg:text-lg">
        <div className="flex gap-1.5">
          <motion.div
            className="text-3xl font-semibold sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("ProjectSection.sectionTitle")}
          </motion.div>
        </div>
        <motion.div
          className="bottom-0 right-0 text-gray-200 md:absolute"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {t("ProjectSection.sectionDescription")}
        </motion.div>
      </header>

      <div className="mt-12 flex items-center gap-6 sm:mt-24 md:mt-36">
        {headerCategories.map((headerCategory, index) => (
          <motion.div
            key={headerCategory[1]}
            onClick={() => handleSetCategory(headerCategory[1])}
            className={classNames(
              category === headerCategory[1] && headerCategory[1] === "ongoing"
                ? "border-b-amber-500"
                : category === headerCategory[1]
                ? "border-b-indigo-400"
                : "border-b-transparent",
              "hover:border-b-gray-400 hover:text-gray-400 border-b-2 cursor-pointer duration-200"
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {headerCategory[1] === "ongoing" && (
              <Cog6ToothIcon className="w-5 relative bottom-0.5 right-0.5 inline-block animate-spin" />
            )}
            {headerCategory[0]}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeaderSection;
