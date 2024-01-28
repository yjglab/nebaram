import AnimatedTitle from "@app/_common/parts/AnimatedTitle";
import { useTranslation } from "@app/i18n/client";
import { FC } from "react";
interface Props {
  lng: string;
}
const Header: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "owner");

  return (
    <header className="w-full mt-14 flex flex-col items-center gap-2 md:gap-4">
      <AnimatedTitle size="lg" align="center">
        {t("HistorySection.sectionTitle.0")}
      </AnimatedTitle>
      <AnimatedTitle size="lg" align="center">
        {t("HistorySection.sectionTitle.1")}
      </AnimatedTitle>
    </header>
  );
};
export default Header;
