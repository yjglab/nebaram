"use client";

import { FC, useEffect, useState } from "react";

const AnimCircleGraphic: FC = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, [hasWindow]);

  return (
    <>
      {hasWindow && (
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          src="/videos/banner_video.mp4"
          className="absolute w-[75%] -z-10"
        />
      )}
    </>
  );
};

export default AnimCircleGraphic;
