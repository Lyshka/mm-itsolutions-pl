import { Contacts } from "@/components/Contacts";
import { NewsAbout } from "@/components/News/NewsAbout";
import { NewsPage } from "@/widgets/NewsPage";
import { unstable_setRequestLocale } from "next-intl/server";

interface INewsSingle {
  params: {
    idNews: string;
    locale: string;
  };
}

const NewsSingle = ({ params }: INewsSingle) => {
  const idNews: string = params?.idNews;
  const locale: string = params?.locale;
  unstable_setRequestLocale(locale);

  return (
    <>
      <NewsAbout />
      <NewsPage idNews={idNews} />
      <Contacts dark={false} />
    </>
  );
};
export default NewsSingle;
