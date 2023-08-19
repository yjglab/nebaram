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

export const SplashLogoKeyframe = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translateX(-14px) scale(0);
  transform: translateX(-14px) scale(0);
}
20% {
  opacity: 0;
  -webkit-transform: translateX(-14px) scale(0);
  transform: translateX(-14px) scale(0);
}
28% {
  opacity: 1;
  -webkit-transform: translateX(-14px) scale(1.2);
  transform: translateX(-14px) scale(1.2);
}
38% {
  opacity: 1;
  -webkit-transform: translateX(-14px) scale(1);
  transform: translateX(-14px) scale(1);
}
60%{
  -webkit-transform: translateX(-14px) rotate(0);
  transform: translateX(-14px) rotate(0);
}
100% {
  -webkit-transform: translateX(-103px) rotate(-360deg);
  transform: translateX(-103px) rotate(-360deg);
}
`;

export const SplashLogoNameKeyframe = keyframes`
0% {
  opacity: 0;
}
79% {
  opacity: 0;
  -webkit-transform: translateX(40px);
  transform: translateX(40px);
}
100% {
  opacity: 1;
  -webkit-transform: translateX(0px);
  transform: translateX(0px)
}
`;

export const SplashContainerKeyframe = keyframes`
from {
  opacity: 1;
} to {
  opacity: 0;
}
`;
