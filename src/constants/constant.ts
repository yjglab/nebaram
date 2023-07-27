import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
});
export const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
});
