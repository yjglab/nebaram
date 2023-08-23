"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface Props {
  images: Array<string>;
  setSlideNumber?: (n: number) => void;
}
const Slider: React.FC<Props> = ({ images, setSlideNumber }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageLoading, setImageLoading] = useState(false);

  const imageIndex = wrap(0, images.length, page);
  const imageLoaded = () => {
    setImageLoading(false);
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setSlideNumber && setImageLoading(true);
  };
  useEffect(
    () => setSlideNumber && setSlideNumber(imageIndex),
    [imageIndex, setSlideNumber]
  ); // slide 번호 조정 (0, 1, 2..)

  return (
    <div>
      <AnimatePresence initial={false} custom={direction}>
        {imageLoading && (
          <div className="absolute left-1/2 z-20 flex -translate-x-[50%] -translate-y-8 flex-col items-center">
            <div className="mb-4 text-sm font-semibold text-white md:text-base">
              이미지를 불러오고 있습니다
            </div>
            <div className="flex h-9 w-9 animate-spin items-center justify-center rounded-full p-1.5 md:h-12 md:w-12">
              <EllipsisHorizontalIcon className="w-10 text-amber-500" />
            </div>
          </div>
        )}
        <motion.img
          key={page}
          alt={images[imageIndex]}
          className={`${
            imageLoading
              ? "border border-amber-500 md:border-2"
              : "border border-white/20 md:border-2"
          } absolute top-0 h-full w-full rounded-lg object-cover md:rounded-2xl `}
          src={images[imageIndex]}
          onLoad={imageLoaded}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 400, damping: 50 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <button
        type="button"
        aria-label="prev slide"
        className="absolute left-0 z-20 ml-2 h-8 w-8 md:h-9 md:w-9 -translate-y-4 rounded-full bg-black/20 p-[1px] text-white duration-100 hover:scale-[1.2] hover:text-indigo-400 sm:-ml-16 sm:h-12 sm:w-12"
        onClick={() => paginate(-1)}
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        aria-label="next slide"
        className="absolute right-0 z-20 mr-2 h-8 w-8 md:h-9 md:w-9 -translate-y-4 rounded-full bg-black/20 p-[1px] text-white duration-100 hover:scale-[1.2] hover:text-indigo-400 sm:-mr-16 sm:h-12 sm:w-12"
        onClick={() => paginate(1)}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Slider;
