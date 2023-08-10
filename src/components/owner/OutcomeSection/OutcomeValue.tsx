import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
import { FC, useEffect, useRef } from "react";

interface Props {
  value: number;
}
const OutcomeValue: FC<Props> = ({ value }) => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);
  const valueRef = useRef(null);
  const valueInView = useInView(valueRef);

  useEffect(() => {
    const valueCounter = animate(count, value, {
      duration: 3,
      ease: "easeOut",
    });
    valueCounter.pause();
    if (valueInView) {
      valueCounter.play();
    }
    return valueCounter.stop;
  }, [valueInView]);

  return (
    <motion.h1
      ref={valueRef}
      className="text-5xl lg:text-7xl mt-3 tracking-wide font-bold "
    >
      {roundedValue}
    </motion.h1>
  );
};

export default OutcomeValue;
