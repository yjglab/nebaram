import { keyframes } from "@emotion/react";

export const SpinKeyframe = keyframes`
  0% {
  }
  100% {
  }
`;
export const ScrollIndicatorKeyframe = keyframes`
  0%{
    transform: translateY(0%);
    opacity: 1;
  }
  10%{
    transform: translateY(-20%);
  }
  60%{
    transform: translateY(-20%);
  }
  65%{
    transform: translateY(0%);
  }
  70%{
    transform: translateY(-10%);
  }
  80%{
    transform: translateY(0%);
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;
export const BannerLogoKeyframe = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40%) rotate(0) scale(2);
  }
  60% {
    opacity: 1;

    transform: translateY(-40%) rotate(1800deg) scale(1);
  }
  75% {
    transform: translateY(-40%) scale(1);
  }
  100%{
    transform: translateY(0%) scale(0.7);
  }
`;
