import { clogo } from "@constants/images";
import Image from "next/image";

const PageLoading = () => {
  return (
    <div className="z-50 w-screen h-screen fixed bg-black left-0 top-0 flex justify-center items-center">
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
