"use client";

import { motion } from "framer-motion";
import Slider from "@app/_common/parts/Slider";
import { useState } from "react";

const images = [
  "/images/owner/objective-section/objective-01.jpg",
  "/images/owner/objective-section/objective-02.jpg",
  "/images/owner/objective-section/objective-03.jpg",
  "/images/owner/objective-section/objective-04.jpg",
];

const Content = () => {
  const [, setSlideNumber] = useState(0);
  return (
    <motion.figure
      className="mt-14 mb-10 relative flex aspect-video w-[80%] items-center lg:w-[900px] xl:w-[1000px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.7,
        delay: 0.7,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Slider images={images} setSlideNumber={setSlideNumber} />
    </motion.figure>
  );
};
export default Content;
