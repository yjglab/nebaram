import { clogo } from "@constants/images";
import classNames from "classnames";
import Image from "next/image";
import {
  SplashContainerKeyframe,
  SplashLogoKeyframe,
  SplashLogoNameKeyframe,
} from "@constants/animations";
import styled from "@emotion/styled";
import { FC } from "react";
import { fallbackLanguage, languages } from "@app/i18n/settings";
import { poppins } from "@constants/fonts";
import { useRouter } from "next/navigation";

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

interface Props {
  lng: string;
}

const SplashScreenContainer: FC<Props> = async ({ lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLanguage;
  const router = useRouter();
  setTimeout(() => {
    router.replace(`/${lng}/owner`);
  }, 2600);

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
export default SplashScreenContainer;
