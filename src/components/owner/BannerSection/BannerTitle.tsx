import AnimatedTitle from "@components/parts/AnimatedTitle";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import { bannerOnDelay } from ".";
import { useTranslations } from "next-intl";

interface Props {
  bannerOn: boolean;
}

const BannerTitle: FC<Props> = ({ bannerOn }) => {
  const t = useTranslations("owner");

  return (
    <div className="z-20 flex mt-32 md:mt-40 flex-col w-full items-center">
      <div
        className={classNames(
          bannerOn
            ? "top-0 scale-[0.55] md:scale-[0.6] gap-0 md:gap-2 sm:gap-4"
            : "top-[35vh] scale-[1] md:scale-[2] gap-4",
          "flex-col relative z-10 duration-1000 flex "
        )}
      >
        <AnimatedTitle align="center" size="sm">
          {t("BannerSection.title1")}
        </AnimatedTitle>
      </div>

      <motion.div
        className="text-3xl sm:text-5xl lg:text-7xl font-semibold mt-0 md:mt-5 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1.5,
          delay: bannerOnDelay * 0.001 + 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t("BannerSection.title2")}
      </motion.div>
    </div>
  );
};

export default BannerTitle;
