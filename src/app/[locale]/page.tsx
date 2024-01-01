import SplashScreen from "@app/_common/SplashScreen";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

const MainPage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <SplashScreen />
      <main className="min-h-screen w-full"></main>
    </>
  );
};

export default MainPage;
