"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const QuestionSection = () => {
  const t = useTranslations("owner");
  const questionData = [
    {
      id: 0,
      title: t(`QuestionSection.questions.0.title`),
      description: t(`QuestionSection.questions.0.description`),
    },
    {
      id: 1,
      title: t(`QuestionSection.questions.1.title`),
      description: t(`QuestionSection.questions.1.description`),
    },
    {
      id: 2,
      title: t(`QuestionSection.questions.2.title`),
      description: t(`QuestionSection.questions.2.description`),
    },
    {
      id: 3,
      title: t(`QuestionSection.questions.3.title`),
      description: t(`QuestionSection.questions.3.description`),
    },
  ];

  return (
    <section className="mx-auto mt-20 overflow-x-hidden px-6 text-lg sm:px-8 md:mt-36 lg:max-w-6xl">
      <header className="mb-8 text-2xl font-semibold md:mb-12 md:text-3xl">
        {t("QuestionSection.sectionTitle")}
      </header>

      {questionData.map((data, index) => (
        <motion.article
          key={data.id}
          className="flex flex-col md:flex-row"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-full">
            <div className="mb-6 flex flex-col text-base md:mb-10 md:text-lg">
              <h1 className="mb-2.5 py-0.5 font-semibold">{data.title}</h1>
              <p className="break-all font-light leading-8">
                {data.description}
              </p>
            </div>
            {index < questionData.length - 1 && (
              <div className="mb-8 mt-12 h-[1.5px] w-full bg-white/30 md:mb-12" />
            )}
          </div>
        </motion.article>
      ))}
    </section>
  );
};
export default QuestionSection;
