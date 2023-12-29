import { useTranslations } from "next-intl";
import { MobileNewsSlider } from "../Slider/MobileNewsSlider";
import { NewsSlider } from "../Slider/NewsSlider";
import { Title } from "../Title/Title";

export const News = () => {
  const t = useTranslations("Main");

  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-[88px] py-6 flex flex-col 2xl:gap-10 gap-6 items-start">
        <Title text={t("titleNews")} />

        <NewsSlider buttonTitle={t("buttonNews")}/>
        <MobileNewsSlider buttonTitle={t("buttonNews")}/>
      </div>
    </section>
  );
};
