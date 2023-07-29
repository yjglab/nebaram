"use client";

import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  introVideoShow: boolean;
}

const AnimCircleVideo: FC<Props> = ({ introVideoShow }) => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, [hasWindow]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (introVideoShow && circleRef.current) {
      const moveX = (mouseX - window.innerWidth / 2) / 30;
      const moveY = (mouseY - window.innerHeight / 2) / 30;
      circleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  }, [introVideoShow, mouseX, mouseY]);

  return (
    <>
      {hasWindow && (
        <div
          ref={circleRef}
          className="flex absolute w-[75%] items-center justify-center"
        >
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            src="/videos/banner_video.mp4"
            className={classNames(
              introVideoShow ? "opacity-100" : "opacity-0",
              "duration-1000  -z-10"
            )}
          />
        </div>
      )}
    </>
  );
};

export default AnimCircleVideo;
