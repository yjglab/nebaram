import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Trans } from "react-i18next";
import { Skill } from ".";

interface Props {
  skill: Skill;
  index: number;
}
const SkillCard: FC<Props> = ({ skill, index }) => {
  return (
    <motion.article
      key={skill.name}
      id={skill.name}
      className="group relative flex h-[400px] w-[300px] flex-col overflow-hidden rounded-2xl border border-white/10 p-[10%] lg:h-[500px] lg:w-[400px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.7,
        delay: index * 0.2,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ArrowLeftCircleIcon className="absolute bottom-10 right-10 z-20 w-8" />
      <div className="group-hover:opacity-100 opacity-0 top-0 duration-200 z-20 backdrop-blur-md w-full h-full absolute left-0 bg-black/40" />
      <div className="group-hover:bottom-4 group-hover:opacity-0 bottom-0 opacity-100 z-20 text-base relative text-indigo-400 font-semibold leading-6 duration-100">
        {skill.name}
      </div>
      <hgroup className="z-20 flex flex-col relative duration-300 font-semibold  mt-4 tracking-tight bottom-0 text-2xl md:3xl 2xl:text-3xl gap-0 lg:gap-1 xl:gap-2 leading-8 group-hover:bottom-10 group-hover:text-base group-hover:leading-0 group-hover:gap-0 group-hover:xl:text-lg group-hover:2xl:text-xl group-hover:text-indigo-400">
        <h1>{skill.title[0]}</h1>
        <h1>{skill.title[1]}</h1>
      </hgroup>

      <div className="text-sm xl:text-base 2xl:text-lg z-20 relative duration-300 flex flex-col gap-3 group-hover:bottom-6 group-hover:opacity-100 -bottom-4 opacity-0">
        <Trans components={[<p className="font-medium text-indigo-400"></p>]}>
          {skill.description[0]}
        </Trans>
        <Trans components={[<p className="font-medium text-amber-500"></p>]}>
          {skill.description[1]}
        </Trans>
      </div>
      <Image
        src={skill.src}
        fill
        sizes="(max-width: 400px)"
        className="absolute brightness-75 opacity-60 object-cover aspect-square"
        alt="skill card"
      />
    </motion.article>
  );
};
export default SkillCard;
