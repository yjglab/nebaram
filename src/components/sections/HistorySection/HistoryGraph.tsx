import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const HistoryGraph = () => {
  const t = useTranslations("section");
  const graphGap = 90;
  const datas = [
    {
      id: 1,
      year: t("HistorySection.content1.year"),
      month: t("HistorySection.content1.month"),
      content: t("HistorySection.content1.content"),
    },
    {
      id: 2,
      year: t("HistorySection.content2.year"),
      month: t("HistorySection.content2.month"),
      content: t("HistorySection.content2.content"),
    },
    {
      id: 3,
      year: t("HistorySection.content3.year"),
      month: t("HistorySection.content3.month"),
      content: t("HistorySection.content3.content"),
    },
    {
      id: 4,
      year: t("HistorySection.content4.year"),
      month: t("HistorySection.content4.month"),
      content: t("HistorySection.content4.content"),
    },
    {
      id: 5,
      year: t("HistorySection.content5.year"),
      month: t("HistorySection.content5.month"),
      content: t("HistorySection.content5.content"),
    },
    {
      id: 6,
      year: t("HistorySection.content6.year"),
      month: t("HistorySection.content6.month"),
      content: t("HistorySection.content6.content"),
    },
    {
      id: 7,
      year: t("HistorySection.content7.year"),
      month: t("HistorySection.content7.month"),
      content: t("HistorySection.content7.content"),
    },
  ];

  return (
    <div className="mt-32 ml-36 w-full h-full flex ">
      {/* 연도, 달 */}
      <div className="h-full relative -top-2.5 w-32 flex flex-col items-center">
        {datas.map((content, index) => (
          <motion.div
            key={content.id}
            style={{ top: index * graphGap }}
            className="absolute font-semibold text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {content.year}
          </motion.div>
        ))}
      </div>
      {/* 바 */}
      <div className="h-full w-6 relative flex flex-col items-center">
        <motion.div
          className="mt-2 grow bg-gray-500 w-0.5 h-full absolute"
          aria-hidden="true"
          initial={{ opacity: 0, originY: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, originY: 0, scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        {datas.map((content, index) => (
          <motion.div
            key={content.id}
            style={{ top: index * graphGap }}
            className={`ring-4 ring-gray-500 w-2.5 h-2.5 bg-black rounded-full absolute`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.5 }}
          ></motion.div>
        ))}
      </div>
      <div className="h-full w-full ml-16 relative -top-2 flex flex-col ">
        {datas.map((content, index) => (
          <motion.div
            key={content.id}
            style={{ top: index * graphGap }}
            className="absolute  text-xl flex flex-col gap-0.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-gray-500 font-semibold">{content.month}</p>
            <p className="">{content.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HistoryGraph;
