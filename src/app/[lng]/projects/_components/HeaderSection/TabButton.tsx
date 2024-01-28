import { FC, memo } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ProjectSectionCategory } from "@/@types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SET_CATEGORY } from "@/redux/slices/projects.slice";

interface Props {
  categoryName: string;
  categoryValue: ProjectSectionCategory;
  index: number;
}
const TabButton: FC<Props> = ({ categoryName, categoryValue, index }) => {
  const category = useAppSelector((state) => state.projects.category);
  const dispatch = useAppDispatch();

  const handleSetCategory = (targetCategory: ProjectSectionCategory) => {
    dispatch(SET_CATEGORY(targetCategory));
  };
  return (
    <motion.button
      key={categoryValue}
      onClick={() => handleSetCategory(categoryValue)}
      className={classNames(
        category === categoryValue && categoryValue === "ongoing"
          ? "border-b-amber-500"
          : category === categoryValue
          ? "border-b-indigo-400"
          : "border-b-transparent",
        "hover:text-gray-400 border-b-[3px] cursor-pointer duration-200"
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.8,
        delay: index * 0.15,
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {categoryValue === "ongoing" && (
        <Cog6ToothIcon className="w-5 relative bottom-0.5 right-0.5 inline-block animate-spin" />
      )}
      {categoryName}
    </motion.button>
  );
};
export default memo(TabButton);
