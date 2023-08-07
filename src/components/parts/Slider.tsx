"use client";
import { useState } from "react";
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
}
const Slider: React.FC<Props> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageLoading, setImageLoading] = useState(false);

  const imageIndex = wrap(0, images.length, page);
  const imageLoaded = () => {
    setImageLoading(false);
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setImageLoading(true);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <button
          className="absolute left-0 z-20 ml-2 sm:-ml-16 w-12 h-12 duration-100 text-indigo-400 hover:scale-[1.2] hover:text-indigo-400"
          onClick={() => paginate(-1)}
        >
          <ChevronLeftIcon />
        </button>
        <button
          className="absolute right-0 z-20 mr-2 sm:-mr-16 w-12 h-12 duration-100 text-indigo-400 hover:scale-[1.2] hover:text-indigo-400"
          onClick={() => paginate(1)}
        >
          <ChevronRightIcon />
        </button>
        {imageLoading && (
          <div className="flex -translate-x-[50%] left-1/2 flex-col items-center absolute z-20">
            <div className="text-white font-semibold mb-4">
              이미지가 로드되고 있습니다
            </div>
            <div className="flex justify-center items-center w-12 h-12 p-1.5 animate-spin rounded-full">
              <EllipsisHorizontalIcon className="w-10 text-amber-500" />
            </div>
          </div>
        )}
        <motion.img
          key={page}
          className={`${
            imageLoading ? "border border-white/80" : "border-none border-0"
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
    </>
  );
};

export default Slider;
