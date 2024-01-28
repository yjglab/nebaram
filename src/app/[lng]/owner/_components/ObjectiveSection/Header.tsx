import AnimatedTitle from "@app/_common/parts/AnimatedTitle";
import { useTranslation } from "@app/i18n/client";
import { motion } from "framer-motion";
import { FC, memo } from "react";

interface Props {
  lng: string;
}
const Header: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");

  return (
    <div className="z-20 flex w-full flex-col items-center text-center">
      <AnimatedTitle size="xs" align="center">
        {t("ObjectiveSection.title")}
      </AnimatedTitle>
      <motion.div
        className="mt-2 h-0.5 w-44 grow bg-indigo-400 md:w-52"
        aria-hidden="true"
        initial={{ opacity: 0, scaleX: 0, originX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1, originX: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      />
      <motion.hgroup
        className="relative mt-4 flex flex-col gap-4 px-10 md:mt-8 2xl:gap-0.5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h1 className="mx-auto mt-6 break-keep text-md sm:text-2xl md:text-3xl font-semibold">
          {t("ObjectiveSection.description.0")}
        </h1>
        <h1 className="mx-auto break-keep text-md sm:text-2xl md:text-3xl mt-2 font-semibold">
          {t("ObjectiveSection.description.1")}
        </h1>
      </motion.hgroup>
    </div>
  );
};
export default memo(Header);
