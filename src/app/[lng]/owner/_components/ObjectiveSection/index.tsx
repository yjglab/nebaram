"use client";

import { FC } from "react";
import Header from "./Header";
import Content from "./Content";

interface Props {
  lng: string;
}
const ObjectiveSection: FC<Props> = ({ lng }) => {
  return (
    <section className="mb-0 mt-36 flex flex-col items-center overflow-x-hidden  pt-12 sm:py-36  md:py-24">
      <Header lng={lng} />
      <Content />
    </section>
  );
};

export default ObjectiveSection;
