import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@app/i18n/client";

interface Props {
  lng: string;
}
const Header: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "projects");

  return (
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
  );
};
export default Header;
