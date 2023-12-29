import { Locales } from "@/messages";
import { useLocale } from "next-intl";

export const SelectLaguageDate = <T, K>(datePl: T, dateRu: K) => {
  const locale = useLocale();
  const dateNew = datePl;

  if (locale === Locales.ru) {
    return dateRu;
  }

  return dateNew;
};
