"use client";

import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainPage: NextPage = () => {
  const navigator = useRouter();

  useEffect(() => {
    navigator.back();
  }, [navigator]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen w-full"></div>;
};

export default MainPage;
