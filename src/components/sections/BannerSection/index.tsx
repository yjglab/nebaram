import { FC } from "react";
import LogoAnimation from "./LogoAnimation";

const BannerSection: FC = () => {
  return (
    <div className="min-h-[70svh] flex items-center">
      <LogoAnimation />
    </div>
  );
};

export default BannerSection;
