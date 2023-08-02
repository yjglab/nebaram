"use client";

import styled from "@emotion/styled";
import { clogo } from "@constants/images";
import { motion } from "framer-motion";
import { FC } from "react";
import { BannerLogoKeyframe } from "@constants/animations";

const LogoSpinner = styled.img`
  animation: ${BannerLogoKeyframe} 0s ease-out forwards;
`;

const LogoAnimation: FC = () => {
  return (
    <div className="z-10 h-1/2">
      {/* 반응형 크기조정하기 */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        <LogoSpinner src={clogo} className="w-44 lg:w-60" />
      </motion.div>
    </div>
  );
};

export default LogoAnimation;
