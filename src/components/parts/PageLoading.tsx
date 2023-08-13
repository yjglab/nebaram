import { clogo } from "@constants/images";
import Image from "next/image";

const PageLoading = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
      <Image
        src={clogo}
        className="animate-spin"
        width={50}
        height={50}
        alt="clogo"
      />
    </div>
  );
};

export default PageLoading;
