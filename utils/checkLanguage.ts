import { Locales } from "@/messages";

interface titleLanguages {
  titlePl: string;
  titleRu: string;
  titleEn: string;
  titleUa: string;
}

export const checkLanguage = (
  locale: string,
  titleLanguage: titleLanguages
): string => {
  let title = titleLanguage.titlePl;

  if (Locales.en === locale) {
    return (title = titleLanguage.titleEn);
  }

  if (Locales.ru === locale) {
    return (title = titleLanguage.titleRu);
  }

  if (Locales.ua === locale) {
    return (title = titleLanguage.titleUa);
  }

  return title;
};
