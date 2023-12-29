import { priceListRu, priceListPl } from "@/constants/price";
import { Title } from "../Title/Title";
import { CardPrice } from "./CardPrice";
import { useTranslations } from "next-intl";
import { useSelectLaguageDate } from "@/hooks/useSelectLaguageDate";

export const Price = () => {
  const t = useTranslations("Main");
  const priceList = useSelectLaguageDate(priceListPl, priceListRu);

  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-[100px] py-6 flex flex-col 2xl:gap-10 gap-6 items-start">
        <Title text={t("titlePrice")} />

        <div className="border-t border-[#BBBBBB] w-full">
          {priceList.map((price) => (
            <CardPrice key={price.id} price={price} />
          ))}
        </div>
      </div>
    </section>
  );
};
