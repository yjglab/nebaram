import Image from "next/image";
import { motion } from "framer-motion";
import { bannerOnDelay } from ".";

const cardSvgVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: bannerOnDelay * 0.001,
          type: "spring",
          duration: 1.2,
          bounce: 0,
        },
        opacity: { delay: bannerOnDelay * 0.001, duration: 0.01 },
      },
    };
  },
};

const BannerCard = () => {
  return (
    <div className="w-full h-full mt-20 flex items-center justify-center">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="w-full z-10 flex items-center justify-center relative"
      >
        <motion.div
          className="z-20 w-[78%] h-[78%] sm:w-[450px] sm:[450px] md:w-[590px] md:h-[590px] flex aspect-square items-center justify-center relative "
          variants={{
            offscreen: {
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: 2.7,
              },
            },
          }}
        >
          <Image
            src="/images/owner/banner-section/owner.jpg"
            objectFit="cover"
            className=" shadow shadow-white/20 rounded-3xl "
            alt="owner.jpg"
            fill
          />
        </motion.div>
        <motion.svg
          className="scale-50 sm:scale-[0.75] md:scale-100 w-[590px] h-[590px]  absolute"
          initial="hidden"
          animate="visible"
        >
          <motion.rect
            x="3"
            y="3"
            rx="24"
            stroke="#818cf8"
            className="stroke-[5]  w-[580px] h-[580px] "
            variants={cardSvgVariants}
            custom={5}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default BannerCard;
