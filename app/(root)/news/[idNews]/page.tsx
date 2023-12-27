import { news } from "@/constants/news";
import NewsSingle from "@/pages/NewsSingle";
import { translatorToEn } from "@/utils/translator";

type Props = {
  params: { idNews: string };
};

export async function generateMetadata({ params }: Props) {
  const { idNews } = params;
  const filteredNews = news.filter(({ url }) => {
    const newTitle = translatorToEn(url);
    const decoded = decodeURIComponent(idNews);

    return newTitle === decoded;
  })[0];
  const { shortDescription, title } = filteredNews;

  return {
    title,
    description: shortDescription,
  };
}

export function generateStaticParams() {
  return news.map(({ url }) => {
    const newUrl = translatorToEn(url);

    return {
      idNews: newUrl,
    };
  });
}

export default NewsSingle;
