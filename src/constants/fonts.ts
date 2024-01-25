import localFont from "next/dist/compiled/@next/font/dist/local";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
});

export const Pretendard = localFont({
  src: "../../../public/fonts/PretendardVariable.woff2",
});
