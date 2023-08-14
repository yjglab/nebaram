import { clogo } from "@constants/images";
import Image from "next/image";

const PageLoading = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
      <Image
        src={clogo}
        priority
        className="animate-spin"
        width={50}
        height={50}
        alt="brand logo"
      />
    </div>
  );
};

export default PageLoading;
