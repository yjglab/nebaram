import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import classNames from "classnames";

const HistoryGraph = () => {
  const t = useTranslations("owner");
  const graphGap = 80;
  const datas = [
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
          <span className="ml-2 text-gray-200 text-xs md:text-sm">
            {children}
          </span>
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
    <div className="mt-24 w-full h-full  ">
      {/* 연도 */}
      <div className="flex h-full w-full justify-center">
        <div className="h-full relative -top-2.5 w-24 md:w-32 flex flex-col items-center">
          {datas.map((content, index) => (
            <motion.div
              key={content.id}
              style={{ top: index * graphGap }}
              className="absolute font-semibold text-lg md:text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 0.7,
                delay: index * 0.065,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {content.year}
            </motion.div>
          ))}
        </div>
        {/* 바 */}
        <div className="w-6 relative flex flex-col items-center">
          <motion.div
            className="mt-2 grow bg-gray-500 w-0.5 h-[900px] lg:h-[910px] md:h-full absolute"
            aria-hidden="true"
            initial={{ opacity: 0, originY: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, originY: 0, scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          />
          {datas.map((content, index) => (
            <motion.div
              key={content.id}
              style={{ top: index * graphGap }}
              className={classNames(
                content.year
                  ? "ring-amber-500 w-2.5 h-2.5"
                  : "ring-gray-500 w-1.5 h-1.5",
                "ring-4 bg-black rounded-full absolute"
              )}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 0.7,
                delay: index * 0.065,
              }}
              viewport={{ once: true, amount: 0.5 }}
            />
          ))}
        </div>
        <div className="h-full w-[90%] sm:w-[75%] lg:w-[60%] ml-[4%] relative -top-[7px] md:-top-[9px] flex flex-col ">
          {datas.map((content, index) => (
            <motion.div
              key={content.id}
              style={{ top: index * graphGap }}
              className="absolute  text-xl flex flex-col gap-0.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "tween",
                duration: 0.7,
                delay: index * 0.065,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-gray-500 text-base xl:text-lg font-semibold">
                {content.month}
              </div>
              <div className="text-base md:text-lg xl:text-xl tracking-tight">
                {content.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryGraph;
