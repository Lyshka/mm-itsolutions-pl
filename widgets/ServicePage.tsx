import { ServiceAbout } from "@/components/About/ServiceAbout";
import { Advantage } from "@/components/Advantage/Advantage";
import { NewYearBadge } from "@/components/Badge/NewYearBadge";
import { Prices } from "@/components/Prices/Prices";
import { ServiceProject } from "@/components/Projects/ServiceProject";
import { ServiceTitle } from "@/components/Title/ServiceTitle";
import { servicesPl, servicesRu } from "@/constants/services";
import { useSelectLaguageDate } from "@/hooks/useSelectLaguageDate";
import { useTranslations } from "next-intl";

interface IServicePage {
  idSevice: string;
}

export const ServicePage = ({ idSevice }: IServicePage) => {
  const t = useTranslations("Main");
  const services = useSelectLaguageDate(servicesPl, servicesRu)
  const service = services.filter(({ url }) => url === idSevice)[0];

  const advantages = service?.advantages;
  const img = service?.img;
  const title = service?.title;
  const cards = service?.cards;
  const textBadge = service?.textBadge;
  const alt = service?.alt;

  return (
    <div className="flex flex-col 2xl:gap-[104px] gap-0 2xl:p-10 py-0">
      <ServiceTitle title={title} />
      <NewYearBadge textBadge={textBadge} />
      <ServiceAbout title={title} img={img} alt={alt} />
      <Advantage advantages={advantages} />
      <ServiceProject
        title={t("titleProjects")}
        btnActv={t("buttonActiveProjects")}
        btnUnActv={t("buttonUnActiveProjects")}
      />
      <Prices pricesCards={cards} />
    </div>
  );
};
