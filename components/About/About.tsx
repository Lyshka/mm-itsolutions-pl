import { delagothicone } from "@/assets/font";
import { aboutListPl, aboutListRu } from "@/constants/about";
import { CardAbout } from "./CardAbout";
import { useTranslations } from "next-intl";
import { useSelectLaguageDate } from "@/hooks/useSelectLaguageDate";

export const About = () => {
  const t = useTranslations("Main");
  const aboutList = useSelectLaguageDate(aboutListPl, aboutListRu);

  return (
    <section id="about" className="flex justify-center items-center">
      <div className="container 2xl:py-[104px] py-10 flex flex-col items-start 2xl:gap-[72px] gap-8">
        <div className="flex flex-col gap-8 w-full">
          <p
            className={`2xl:text-[26px] text-lg 2xl:leading-8 leading-6 ${delagothicone.className}`}
          >
            {t("titleAbout")}
          </p>

          <div className="lg:w-[993px] w-full flex flex-col lg:gap-6 gap-4 items-center self-center">
            <h1
              className={`2xl:text-5xl text-lg 2xl:leading-[56px] leading-6 2xl:text-left text-center ${delagothicone.className}`}
            >
              {t("secondTitleAbout")}
            </h1>

            <p className="text-lg 2xl:leading-6 leading-4">
              {t("descriptionAbout")}
            </p>
          </div>
        </div>

        <div className="flex 2xl:flex-row flex-col items-center justify-between w-full 2xl:gap-10 gap-6">
          {aboutList.map(({ description, id, img, title }) => (
            <CardAbout
              key={id}
              description={description}
              img={img}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
