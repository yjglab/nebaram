import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@app/i18n/client";
import Link from "next/link";

interface Props {
  lng: string;
}
const Bottom: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="mt-12 flex w-full flex-col justify-center text-center font-medium lg:mt-24"
    >
      <span className="text-lg lg:text-xl">
        {t("SkillSection.projectsLinkLabel")}
      </span>
      <Link
        className="mx-auto mt-4 w-40 rounded-lg bg-indigo-400 px-2.5 py-1.5 text-base duration-200 hover:bg-indigo-500 lg:text-lg"
        href="projects"
      >
        {t("SkillSection.projectsLink")}
      </Link>
    </motion.div>
  );
};
export default Bottom;
