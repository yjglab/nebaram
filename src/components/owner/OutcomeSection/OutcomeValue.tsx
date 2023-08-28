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
  unit: string;
}
const OutcomeValue: FC<Props> = ({ value, unit }) => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);
  const valueRef = useRef(null);
  const valueInView = useInView(valueRef);

  useEffect(() => {
    const valueCounter = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    valueCounter.pause();
    if (valueInView) {
      valueCounter.play();
    }
    return valueCounter.stop;
  }, [valueInView, count, value]);

  return (
    <div className="mt-3 flex gap-2 text-5xl font-bold tracking-wide lg:text-7xl ">
      <motion.div ref={valueRef}>{roundedValue}</motion.div>
      <span>{unit}</span>
    </div>
  );
};

export default OutcomeValue;
