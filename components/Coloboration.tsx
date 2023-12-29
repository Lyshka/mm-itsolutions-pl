import { useTranslations } from "next-intl";
import { ColaborationSlider } from "./Slider/ColaborationSlider";
import { Title } from "./Title/Title";

export const Coloboration = () => {
  const t = useTranslations("Main");

  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-[104px] py-16 flex flex-col gap-12 overflow-hidden justify-start items-start">
        <Title text={t("titleColoboration")} />

        <ColaborationSlider />
      </div>
    </section>
  );
};
