"use client";

import { FC, MouseEvent, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslation } from "@app/i18n/client";
import AnimatedTitle from "@app/_common/parts/AnimatedTitle";
import { Trans } from "react-i18next";
import Header from "./Header";
import Bottom from "./Bottom";
import SkillCard from "./SkillCard";

export interface Skill {
  name: string;
  title: string;
  description: string;
  src: string;
}
interface Props {
  lng: string;
}
const SkillSection: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");
  const skills: Skill[] = t("SkillSection.skills", {
    returnObjects: true,
  });

  return (
    <section className="mb-28 mt-56 flex h-full w-full flex-col items-center sm:mb-40">
      <Header lng={lng} />
      <div className="mt-16 grid h-full grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 md:mt-24 lg:gap-10">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
      <Bottom lng={lng} />
    </section>
  );
};

export default SkillSection;
