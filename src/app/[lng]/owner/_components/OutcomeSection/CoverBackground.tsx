import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CoverBackground = () => {
  const backgroundRef = useRef(null);
  const backgroundInView = useInView(backgroundRef);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const opacity = window.scrollY / 1000 - 0.6;
      const downValue = (window.scrollY / 1000 - 2) * 3;
      if (opacity <= 1) {
        setBackgroundOpacity(opacity);
      } else {
        setBackgroundOpacity(1 - downValue);
      }
    };
    if (backgroundInView) {
      window.addEventListener("scroll", scrollHandler);
    }
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [backgroundInView, backgroundOpacity, setBackgroundOpacity]);

  return (
    <figure ref={backgroundRef} className="absolute h-full w-full">
      <div className="absolute -top-36 z-10 h-36 w-full bg-black shadow-ownerOutcomeSectionTop"></div>
      <div className="absolute h-full w-full opacity-75">
        <Image
          className="object-cover"
          fill
          priority
          src="/images/owner/outcome-section/outcome-background.webp"
          style={{ opacity: backgroundOpacity }}
          alt="outcome-section/image-01"
        />
      </div>
      <div className="absolute -bottom-36 h-36 w-full bg-black shadow-ownerOutcomeSectionBottom"></div>
      <figcaption className="sr-only">Outcome Background Image</figcaption>
    </figure>
  );
};
export default CoverBackground;
