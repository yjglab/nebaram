"use client";

import { FC } from "react";
import HistoryGraph from "./HistoryGraph";
import Header from "./Header";

interface Props {
  lng: string;
}
const HistorySection: FC<Props> = ({ lng }) => {
  return (
    <section className="my-36 h-full w-full flex flex-col items-center overflow-hidden  px-4 lg:px-[10%] xl:px-[18%] 2xl:px-[28%]">
      <Header lng={lng} />
      <HistoryGraph lng={lng} />
    </section>
  );
};

export default HistorySection;
