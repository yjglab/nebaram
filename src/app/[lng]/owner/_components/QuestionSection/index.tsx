"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@app/i18n/client";
import { FC } from "react";

interface Question {
  title: string;
  description: string;
}
interface Props {
  lng: string;
}
const QuestionSection: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");

  const questions: Question[] = t("QuestionSection.questions", {
    returnObjects: true,
  });

  return (
    <section className="mx-auto mt-20 overflow-x-hidden px-6 text-lg sm:px-8 md:mt-36 lg:max-w-6xl">
      <header className="mb-8 text-2xl font-semibold md:mb-12 md:text-3xl">
        {t("QuestionSection.sectionTitle")}
      </header>

      {questions.map((question, index) => (
        <motion.article
          key={question.title}
          className="flex flex-col md:flex-row"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-full">
            <div className="mb-6 flex flex-col text-base md:mb-10 md:text-lg">
              <h1 className="mb-2.5 py-0.5 font-semibold">{question.title}</h1>
              <p className="break-all font-normal text-white/80 leading-8">
                {question.description}
              </p>
            </div>
            {index < questions.length - 1 && (
              <div className="mb-8 mt-12 h-[1.5px] w-full bg-white/30 md:mb-12" />
            )}
          </div>
        </motion.article>
      ))}
    </section>
  );
};
export default QuestionSection;
