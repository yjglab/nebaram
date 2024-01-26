"use client";

import classNames from "classnames";
import Image from "next/image";
import { FC, useEffect } from "react";
import { poppins } from "@constants/fonts";
import { useRouter } from "next/navigation";
import { nebaramLogoPublicUrl } from "@constants/url";

interface Props {
  targetPath: string;
}

const SplashScreenContainer: FC<Props> = ({ targetPath }) => {
  const router = useRouter();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      router.push(targetPath);
    }, 2600);

    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  return (
    <section className="z-[100] top-0 left-0 w-screen h-screen bg-black overflow-hidden fixed">
      <div className="animate-splashContainer w-full h-full relative left-5 flex justify-center items-center">
        <div
          className={classNames(
            poppins.className,
            "animate-splashLogoName absolute text-[34px] font-medium"
          )}
        >
          nebaram
        </div>
        <div className="animate-splashLogo w-[32px] h-[32px] relative top-[1.5px]">
          <Image
            src={nebaramLogoPublicUrl}
            alt="brand logo"
            width={32}
            height={32}
          />
        </div>
      </div>
    </section>
  );
};
export default SplashScreenContainer;
