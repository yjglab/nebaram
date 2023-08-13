import classNames from "classnames";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  selectedCategory: string;
}
const HeaderSection: FC<Props> = ({ selectedCategory }) => {
  const t = useTranslations("projects");
  const categories = [
    t("HeaderSection.category1"),
    t("HeaderSection.category2"),
    t("HeaderSection.category3"),
  ];
  return (
    <header className="mx-auto mt-24 max-w-2xl px-6 md:mt-32 lg:max-w-6xl ">
      <div className="relative flex flex-col justify-between gap-2 text-sm md:gap-0 lg:text-lg">
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
          {" "}
          {t("ProjectSection.sectionDescription")}
        </motion.div>

        {/* 카테고리 추가하기 */}
      </div>

      <div className="mt-12 flex items-center gap-6 sm:mt-24 md:mt-36">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            className={classNames(
              selectedCategory === category && "text-amber-500"
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
            {category}
          </motion.div>
        ))}
      </div>
    </header>
  );
};

export default HeaderSection;
