import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

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
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div className="z-20 w-full flex justify-between my-auto">
          <button
            className="ml-2 sm:-ml-16 w-12 h-12 duration-100 hover:scale-[1.2] hover:text-indigo-400"
            onClick={() => paginate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className="mr-2 sm:-mr-16 w-12 h-12 duration-100 hover:scale-[1.2] hover:text-indigo-400"
            onClick={() => paginate(1)}
          >
            <ChevronRightIcon />
          </button>
        </div>

        <motion.img
          key={page}
          className="w-full top-0 absolute h-full rounded-2xl object-cover"
          src={images[imageIndex]}
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
