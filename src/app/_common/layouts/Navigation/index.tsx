"use client";

import { useTranslation } from "@app/i18n/client";
import { FC } from "react";
import Base from "./Base";

interface Props {
  lng: string;
}
const Navigation: FC<Props> = ({ lng }) => {
  const { i18n } = useTranslation(lng, "common");
  return <Base i18n={i18n} lng={lng} />;
};

export default Navigation;
