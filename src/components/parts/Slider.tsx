"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";

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
  useEffect(() => setSlideNumber && setSlideNumber(imageIndex), [imageIndex]); // slide 번호 조정 (0, 1, 2..)

  return (
    <div>
      <AnimatePresence initial={false} custom={direction}>
        {imageLoading && (
          <div className="flex -translate-x-[50%] left-1/2 flex-col items-center absolute z-20">
            <div className="text-white text-sm md:text-base font-semibold mb-4">
              이미지를 불러오고 있습니다
            </div>
            <div className="flex justify-center items-center w-9 h-9 md:w-12 md:h-12 p-1.5 animate-spin rounded-full">
              <EllipsisHorizontalIcon className="w-10 text-amber-500" />
            </div>
          </div>
        )}
        <motion.img
          key={page}
          className={`${
            imageLoading
              ? "border md:border-2 border-amber-500"
              : "border md:border-2 border-white/20"
          } w-full top-0 absolute h-full rounded-lg md:rounded-2xl object-cover border-white`}
          src={images[imageIndex]}
          onLoad={imageLoaded}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
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
        className="p-[1px] rounded-full bg-black/20 absolute left-0 z-20 ml-2 sm:-ml-16 w-9 sm:w-12 h-9 sm:h-12 duration-100 text-white hover:scale-[1.2] hover:text-indigo-400"
        onClick={() => paginate(-1)}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className="p-[1px] rounded-full bg-black/20 absolute right-0 z-20 mr-2 sm:-mr-16 w-9 sm:w-12 h-9 sm:h-12 duration-100 text-white hover:scale-[1.2] hover:text-indigo-400"
        onClick={() => paginate(1)}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Slider;
