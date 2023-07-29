"use client";

import styled from "@emotion/styled";
import { clogo } from "@constants/images";
import { FC } from "react";
import { BannerLogoKeyframe } from "@constants/animations";

const LogoSpinner = styled.img`
  animation: ${BannerLogoKeyframe} 3s ease-in-out forwards;
`;

const LogoAnimation: FC = () => {
  return (
    <div className=" h-1/2">
      <LogoSpinner src={clogo} className="w-36" />
    </div>
  );
};

export default LogoAnimation;
