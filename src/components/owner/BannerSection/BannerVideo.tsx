import styled from "@emotion/styled";
import { memo } from "react";
import { motion } from "framer-motion";

const ShadowBoxTop = styled.div`
  box-shadow: 0 30px 130px 90px black;
`;
const ShadowBoxBottom = styled.div`
  box-shadow: 0 -30px 130px 90px black;
`;

const BannerVideo = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        offscreen: {
          opacity: 0,
        },
        onscreen: {
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 2,
          },
        },
      }}
      className="w-full h-full absolute"
    >
      <ShadowBoxTop className="absolute -top-36 z-10 h-48 w-full bg-black shadow-black"></ShadowBoxTop>
      <ShadowBoxBottom className="absolute bottom-0 z-10 h-28 w-full bg-black shadow-black"></ShadowBoxBottom>
      <div className="bg-black/70 w-full h-full absolute z-10" />
      <video
        className="w-full h-full object-cover absolute"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/owner/banner.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default memo(BannerVideo);
