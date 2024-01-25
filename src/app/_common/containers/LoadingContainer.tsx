import { clogo } from "@constants/images";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

interface Props {
  isOverlay?: boolean; // 오버레이 컨테이너에 대한 로더인지 여부
}
const LoadingContainer: FC<Props> = ({ isOverlay = false }) => {
  return (
    <div
      className={classNames(
        isOverlay ? "bg-transparent" : "bg-black",
        "fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center"
      )}
    >
      <Image
        src={clogo}
        className="animate-spin"
        width={32}
        height={32}
        alt="brand logo"
      />
    </div>
  );
};

export default LoadingContainer;
