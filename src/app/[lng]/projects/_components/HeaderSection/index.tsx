"use client";

import { FC } from "react";
import Header from "./Header";
import Tabs from "./Tabs";

interface Props {
  lng: string;
}
const HeaderSection: FC<Props> = ({ lng }) => {
  return (
    <section className="mx-auto max-w-2xl px-6 mt-24 md:mt-32 lg:max-w-6xl ">
      <Header lng={lng} />
      <Tabs lng={lng} />
    </section>
  );
};

export default HeaderSection;
