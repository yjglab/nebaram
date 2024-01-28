import { FC } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "@app/_common/parts/AnimatedTitle";
import { useTranslation } from "@app/i18n/client";

interface Props {
  lng: string;
}
const Header: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");

  return (
    <div className="w-full text-center">
      <header className="flex flex-col gap-2 md:gap-4">
        <AnimatedTitle size="lg" align="center">
          {t("SkillSection.sectionTitle.0")}
        </AnimatedTitle>
        <AnimatedTitle size="lg" align="center">
          {t("SkillSection.sectionTitle.1")}
        </AnimatedTitle>
      </header>
      <motion.hgroup
        className="relative mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mx-auto mt-6 break-keep text-sm md:max-w-[80%] md:text-lg">
          {t("SkillSection.description.0")}
        </h2>
        <h2 className="mx-auto mt-0.5 break-keep text-sm md:max-w-[80%] md:text-lg">
          {t("SkillSection.description.1")}
        </h2>
      </motion.hgroup>
    </div>
  );
};
export default Header;
