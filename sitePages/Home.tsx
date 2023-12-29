import { About } from "@/components/About/About";
import { Coloboration } from "@/components/Coloboration";
import { Comments } from "@/components/Comments";
import { Contacts } from "@/components/Contacts";
import { News } from "@/components/News/News";
import { DiscountPopup } from "@/components/Popup/DiscountPopup";
import { FeedbackPopup } from "@/components/Popup/FeedbackPopup";
import { Price } from "@/components/Price/Price";
import { Projects } from "@/components/Projects/Projects";
import { MainSlider } from "@/components/Slider/MainSlider";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params }: { params: { locale: string } }) {
  const locale: string = params?.locale;
  unstable_setRequestLocale(locale);
  const t = useTranslations("Main");

  return (
    <>
      <MainSlider />
      <About />
      <Price />
      <Projects
        title={t("titleProjects")}
        btnActv={t("buttonActiveProjects")}
        btnUnActv={t("buttonUnActiveProjects")}
      />
      <Coloboration />
      <Comments />
      <Contacts />
      <News />
      <DiscountPopup
        name={t("name")}
        email={t("email")}
        title={t("titleDiscount")}
        description={t("descriptionDiscount")}
        buttonName={t("buttonDiscount")}
      />
      <FeedbackPopup
        name={t("name")}
        email={t("email")}
        title={t("titleFeedback")}
        description={t("descriptionFeedback")}
        buttonName={t("buttonFeedback")}
      />
    </>
  );
}
