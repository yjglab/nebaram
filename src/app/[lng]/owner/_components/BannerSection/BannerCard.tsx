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
          duration: 1.4,
          bounce: 0,
        },
        opacity: { delay: bannerOnDelay * 0.001, duration: 0.01 },
      },
    };
  },
};

const BannerCard = () => {
  return (
    <figure className="mt-20 flex h-full w-full items-center justify-center">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="relative z-10 flex w-full items-center justify-center"
      >
        <motion.div
          className="relative z-20 flex aspect-square h-[60%] w-[60%] items-center justify-center sm:w-[350px] md:h-[420px] md:w-[420px] "
          variants={{
            offscreen: {
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: 2.2,
              },
            },
          }}
        >
          <Image
            fill
            priority
            src="/images/owner/banner-section/owner.jpg"
            className="rounded-3xl object-cover shadow-2xl shadow-indigo-900/90 duration-500 hover:shadow-indigo-500 aspect-square"
            alt="banner-section/owner"
          />
        </motion.div>
        <motion.svg
          className="absolute h-[420px] w-[420px] scale-50 sm:scale-[0.75] md:scale-100"
          initial="hidden"
          animate="visible"
        >
          <motion.rect
            x="3"
            y="3"
            rx="24"
            stroke="#818cf8"
            className="h-[410px] w-[410px] stroke-[5] "
            variants={cardSvgVariants}
            custom={5}
          />
        </motion.svg>
      </motion.div>
    </figure>
  );
};

export default BannerCard;
