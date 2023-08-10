import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import classNames from "classnames";

const HistoryGraph = () => {
  const t = useTranslations("owner");
  const historyData = [
    {
      id: 1,
      year: t("HistorySection.content1.year"),
      month: t("HistorySection.content1.month"),
      content: t.rich("HistorySection.content1.content", {
        span: (children) => (
          <span className="text-indigo-400 ">{children}</span>
        ),
      }),
    },
    {
      id: 2,
      year: t("HistorySection.content2.year"),
      month: t("HistorySection.content2.month"),
      content: t.rich("HistorySection.content2.content", {
        span: (children) => (
          <span className="text-indigo-400 ">{children}</span>
        ),
      }),
    },
    {
      id: 3,
      year: t("HistorySection.content3.year"),
      month: t("HistorySection.content3.month"),
      content: t.rich("HistorySection.content3.content", {
        span: (children) => (
          <span className="text-indigo-400 ">{children}</span>
        ),
      }),
    },
    {
      id: 4,
      year: t("HistorySection.content4.year"),
      month: t("HistorySection.content4.month"),
      content: t.rich("HistorySection.content4.content", {
        span: (children) => (
          <span className="text-indigo-400 ">{children}</span>
        ),
      }),
    },
    {
      id: 5,
      year: t("HistorySection.content5.year"),
      month: t("HistorySection.content5.month"),
      content: t.rich("HistorySection.content5.content", {
        span: (children) => (
          <span className="text-indigo-400 ">{children}</span>
        ),
      }),
    },
    {
      id: 6,
      year: t("HistorySection.content6.year"),
      month: t("HistorySection.content6.month"),
      content: t.rich("HistorySection.content6.content", {
        span: (children) => (
          <span className="text-indigo-400 ">{children}</span>
        ),
      }),
    },
    {
      id: 7,
      year: t("HistorySection.content7.year"),
      month: t("HistorySection.content7.month"),
      content: t.rich("HistorySection.content7.content", {
        span: (children) => (
          <span className="text-indigo-400 ">{children}</span>
        ),
      }),
    },
    {
      id: 8,
      year: t("HistorySection.content8.year"),
      month: t("HistorySection.content8.month"),
      content: t("HistorySection.content8.content"),
    },
    {
      id: 9,
      year: t("HistorySection.content9.year"),
      month: t("HistorySection.content9.month"),
      content: t.rich("HistorySection.content9.content", {
        span: (children) => (
          <span className="text-indigo-400 ">{children}</span>
        ),
        div: (children) => (
          <span className="ml-2 text-gray-200 text-sm">{children}</span>
        ),
      }),
    },
    {
      id: 10,
      year: t("HistorySection.content10.year"),
      month: t("HistorySection.content10.month"),
      content: t.rich("HistorySection.content10.content", {
        span: (children) => <span className="text-sm ">{children}</span>,
      }),
    },
    {
      id: 11,
      year: t("HistorySection.content11.year"),
      month: t("HistorySection.content11.month"),
      content: t.rich("HistorySection.content11.content", {
        span: (children) => <span className="text-sm ">{children}</span>,
      }),
    },
  ];

  return (
    <>
      <div className="w-full h-full mt-24 flex flex-col">
        {historyData.map((data, index) => (
          <div key={data.id} className="w-full h-full flex">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 0.7,
                delay: index * 0.02,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-[20%]"
            >
              <div className="w-full h-[100px] flex justify-center">
                <span className="font-semibold text-lg md:text-2xl">
                  {data.year}
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.02 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-500 h-[100px] w-[3px] relative top-2.5 flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.7,
                  delay: index * 0.02,
                }}
                viewport={{ once: true, amount: 0.5 }}
                className={classNames(
                  data.year
                    ? "ring-amber-500 w-2.5 h-2.5"
                    : "ring-gray-500 w-1.5 h-1.5",
                  "ring-4 bg-black rounded-full absolute"
                )}
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.5, delay: index * 0.02 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full"
            >
              <div className="w-full h-[100px] flex flex-col pl-8">
                <span className="text-gray-500 text-base xl:text-lg font-semibold">
                  {data.month}
                </span>
                <div className="text-base md:text-lg xl:text-xl tracking-tight leading-6 break-all">
                  {data.content}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HistoryGraph;
