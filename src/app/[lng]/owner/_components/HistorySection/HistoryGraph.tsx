import { motion } from "framer-motion";
import classNames from "classnames";
import { useTranslation } from "@app/i18n/client";
import { FC } from "react";
import { Trans } from "react-i18next";

interface History {
  year: string;
  month: string;
  content: string;
}
interface Props {
  lng: string;
}
const HistoryGraph: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");
  const histories: History[] = t("HistorySection.contents", {
    returnObjects: true,
  });

  return (
    <figure className="mt-24 flex h-full w-full flex-col relative md:left-[5%]">
      {histories.map((history, index) => (
        <div key={history.content} className="flex h-full w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: index * 0.02,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-[28%] md:w-[20%]"
          >
            <div
              className={classNames(
                history.month === "2021.07" ? "h-[130px]" : "h-[90px]",
                "flex w-full justify-center"
              )}
            >
              <time className="text-lg font-semibold md:text-2xl">
                {history.year}
              </time>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.02 }}
            viewport={{ once: true, amount: 0.5 }}
            className={classNames(
              history.month === "2021.07" ? "h-[130px]" : "h-[90px]",
              "relative top-2.5 flex w-[3px] justify-center bg-gray-500"
            )}
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
                history.year
                  ? "ring-amber-500 w-2.5 h-2.5"
                  : "ring-gray-500 w-1.5 h-1.5",
                "ring-4 bg-black rounded-full absolute"
              )}
            ></motion.div>
          </motion.div>
          {/* content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: index * 0.02 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full"
          >
            <div
              className={classNames(
                history.month === "2021.07" ? "h-[130px]" : "h-[90px]",
                "flex w-full flex-col pl-8"
              )}
            >
              <time className="text-base font-semibold text-gray-500 xl:text-lg">
                {history.month}
              </time>
              <div className="break-all text-base leading-6 tracking-tight md:text-lg xl:text-xl">
                <Trans
                  components={[
                    <span className="text-indigo-400"></span>,
                    <div className="text-sm text-gray-400"></div>,
                  ]}
                >
                  {history.content}
                </Trans>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
      <figcaption className="sr-only">History Graph</figcaption>
    </figure>
  );
};

export default HistoryGraph;
