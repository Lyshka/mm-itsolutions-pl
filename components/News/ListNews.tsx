import { newsPl, newsRu } from "@/constants/news";
import { CardNews } from "./CardNews";
import Link from "next/link";
import { translatorToEn } from "@/utils/translator";
import { useLocale } from "next-intl";
import { useSelectLaguageDate } from "@/hooks/useSelectLaguageDate";

export const ListNews = () => {
  const locale = useLocale();
  const news = useSelectLaguageDate(newsPl, newsRu);

  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-20 py-12 grid 2xl:grid-cols-3 grid-cols-1 2xl:gap-6 gap-12">
        {news.map((newsItem) => {
          const newUrlTranslate = translatorToEn(newsItem.url);

          return (
            <Link href={`/${locale}/news/${newUrlTranslate}`} key={newsItem.id}>
              <CardNews news={newsItem} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
