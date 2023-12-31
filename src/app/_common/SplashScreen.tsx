"use client";

import { poppins } from "@constants/constant";
import { clogo } from "@constants/images";
import classNames from "classnames";
import Image from "next/image";
import {
  SplashContainerKeyframe,
  SplashLogoKeyframe,
  SplashLogoNameKeyframe,
} from "@constants/animations";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const SplashLogo = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  top: 1.5px;
  animation: ${SplashLogoKeyframe} 1.6s ease-in-out forwards;
`;
const SplashContainer = styled.div`
  animation: ${SplashContainerKeyframe} 0.3s ease-out 2.3s forwards;
`;
const SplashLogoName = styled.div`
  animation: ${SplashLogoNameKeyframe} 1.6s ease-out forwards;
`;

const SplashScreen = () => {
  const router = useRouter();
  const locale = useLocale();
  useEffect(() => {
    setTimeout(() => {
      router.replace(`/${locale}/owner`, { scroll: false });
    }, 2600);
  }, []);

  return (
    <section className="z-[100] top-0 left-0 w-screen h-screen bg-black overflow-hidden fixed">
      <SplashContainer className="w-full h-full relative left-5 flex justify-center items-center">
        <SplashLogoName
          className={classNames(
            poppins.className,
            "absolute text-[34px] font-medium"
          )}
        >
          nebaram
        </SplashLogoName>
        <SplashLogo>
          <Image src={clogo} alt="brand logo" width={32} height={32} />
        </SplashLogo>
      </SplashContainer>
    </section>
  );
};
export default SplashScreen;
