import { keyframes } from "@emotion/react";

export const SpinKeyframe = keyframes`
  0% {
  }
  100% {
  }
`;

export const BannerLogoKeyframe = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0) scale(2);
  }
  60% {
    opacity: 1;

    transform: rotate(1800deg) scale(1);
  }
  75% {
    transform: translateY(0%) scale(1);
  }
  100%{
    transform: translateY(-15%) scale(0.7);
  }
`;
