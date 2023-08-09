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
          duration: 1.5,
          bounce: 0,
        },
        opacity: { delay: bannerOnDelay * 0.001, duration: 0.01 },
      },
    };
  },
};

const BannerCard = () => {
  return (
    <div className="scale-[0.65]  md:scale-[0.85] lg:scale-[1] w-full h-full absolute top-10 flex items-center justify-center">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="w-full absolute flex items-center justify-center"
      >
        <motion.div
          className=" w-[412px] h-[584px] flex items-center justify-center relative transform origin-[10%_60%]"
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
            src="/images/owner/banner-section/card.jpg"
            objectFit="cover"
            className="shadow shadow-white/20 rounded-3xl"
            alt="owner.jpg"
            fill
          />
        </motion.div>
      </motion.div>

      <motion.svg
        width="414"
        height="584"
        className="flex items-center justify-center"
        initial="hidden"
        animate="visible"
      >
        <motion.rect
          width="400"
          height="572"
          x="4"
          y="5"
          rx="24"
          stroke="#818cf8"
          className="stroke-[4] md:stroke-[5]"
          variants={cardSvgVariants}
          custom={5}
        />
      </motion.svg>
    </div>
  );
};

export default BannerCard;
