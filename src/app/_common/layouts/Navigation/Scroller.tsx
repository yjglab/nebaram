"use client";

import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Scroller = () => {
  const [scollerOn, setScollerOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScollerOn(true);
      } else {
        setScollerOn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scollerOn && (
        <button
          type="button"
          aria-label="go to top button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="absolute right-[6vw] h-11 w-11 translate-y-[86vh] rounded-full bg-indigo-400 p-1 duration-200 hover:bg-indigo-500 md:right-10 md:h-12 md:w-12 md:translate-y-[92vh] md:p-1.5"
        >
          <ChevronUpIcon className="relative bottom-0.5" />
        </button>
      )}
    </>
  );
};
export default Scroller;
