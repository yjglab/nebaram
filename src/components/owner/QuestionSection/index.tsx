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
  ];

  return (
    <div className="px-6 sm:px-8 mt-20 md:mt-36 text-lg mx-auto lg:max-w-6xl">
      <div className="text-2xl md:text-3xl font-semibold mb-8">
        {t("QuestionSection.sectionTitle")}
      </div>
      <div className="w-full h-[1.5px] mb-8 md:mb-10 bg-white/30" />

      {questionData.map((data, index) => (
        <motion.div
          key={data.id}
          className="flex flex-col md:flex-row"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-full">
            <div className="flex flex-col mb-6 md:mb-10 text-base md:text-lg">
              <span className="py-0.5 font-semibold mb-2.5">{data.title}</span>
              <div className="break-all leading-8 font-light">
                {data.description}
              </div>
            </div>
            {index < questionData.length - 1 && (
              <div className="w-full h-[1.5px] mb-8 md:mb-12 mt-12 bg-white/30" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default QuestionSection;
