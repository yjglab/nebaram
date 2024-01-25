import SplashScreen from "@app/_common/SplashScreen";

interface Props {
  params: { lng: string };
}

export default async function MainPage({ params: { lng } }: Props) {
  return (
    <>
      <SplashScreen />
      <main className="min-h-screen w-full"></main>
    </>
  );
}
