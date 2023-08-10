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
    <header className="mt-24 md:mt-32 mx-auto max-w-2xl lg:max-w-6xl px-6 ">
      <div className="flex flex-col gap-2 text-sm lg:text-lg md:gap-0 relative justify-between">
        <div className="flex gap-1.5">
          <motion.div
            className="md:text-5xl sm:text-4xl text-3xl font-semibold"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("ProjectSection.sectionTitle")}
          </motion.div>
        </div>
        <motion.div
          className="md:absolute text-gray-200 bottom-0 right-0"
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

      <div className="mt-12 sm:mt-24 md:mt-36 flex items-center gap-6">
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
