import { clogo } from "@constants/images";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
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

export default LoadingScreen;
