import SplashScreenContainer from "@app/_common/containers/SplashScreenContainer";

interface Props {
  params: { lng: string };
}

export default async function MainPage({ params: { lng } }: Props) {
  return (
    <>
      <SplashScreenContainer targetPath={`/${lng}/owner`} />
      <main className="min-h-screen w-full">Main</main>
    </>
  );
}
