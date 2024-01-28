import { FC } from "react";
import { useTranslation } from "@app/i18n/client";
import { ProjectSectionCategory } from "@/@types";
import TabButton from "./TabButton";

interface Props {
  lng: string;
}
const Tabs: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "projects");
  const tabs: [string, ProjectSectionCategory][] = [
    [t("HeaderSection.categories.0"), "all"],
    [t("HeaderSection.categories.1"), "development"],
    [t("HeaderSection.categories.2"), "design"],
    [t("HeaderSection.categories.3"), "ongoing"],
  ];
  return (
    <div className="mt-12 flex items-center gap-6 sm:mt-24 md:mt-36">
      {tabs.map((tab, index) => (
        <TabButton
          key={tab[1]}
          categoryName={tab[0]}
          categoryValue={tab[1]}
          index={index}
        />
      ))}
    </div>
  );
};
export default Tabs;
