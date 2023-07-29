"use client";

import styled from "@emotion/styled";
import { clogo } from "@constants/images";
import { FC } from "react";
import { BannerLogoKeyframe } from "@constants/animations";

const LogoSpinner = styled.img`
  animation: ${BannerLogoKeyframe} 3s ease-out forwards;
`;

const LogoAnimation: FC = () => {
  return (
    <div className="z-10 h-1/2">
      {/* 반응형 크기조정하기 */}
      <LogoSpinner src={clogo} className="w-56" />
    </div>
  );
};

export default LogoAnimation;
