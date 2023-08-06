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
    <>
      <div
        className={classNames(
          bannerOn
            ? "top-32 scale-[0.55] md:scale-[0.6] gap-0 md:gap-2 sm:gap-4"
            : "top-[46%] scale-[1] md:scale-[2] gap-4",
          "absolute flex-col z-10 duration-1000 flex "
        )}
      >
        <AnimatedTitle align="center" size="sm">
          {t("BannerSection.title1")}
        </AnimatedTitle>
      </div>

      <motion.div
        className="text-4xl sm:text-6xl lg:text-7xl font-semibold absolute top-[164px] sm:top-[185px]"
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
    </>
  );
};

export default BannerTitle;
