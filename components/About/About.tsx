import { delagothicone } from "@/assets/font";
import { aboutList } from "@/constants/about";
import { CardAbout } from "./CardAbout";

import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("Index");

  return (
    <section id="about" className="flex justify-center items-center">
      <div className="container 2xl:py-[104px] py-10 flex flex-col items-start 2xl:gap-[72px] gap-8">
        <div className="flex flex-col gap-8 w-full">
          <p
            className={`2xl:text-[26px] text-lg 2xl:leading-8 leading-6 ${delagothicone.className}`}
          >
            Razem będziemy rosnąć {t("title")}
          </p>

          <div className="lg:w-[993px] w-full flex flex-col lg:gap-6 gap-4 items-center self-center">
            <h1
              className={`2xl:text-5xl text-lg 2xl:leading-[56px] leading-6 2xl:text-left text-center ${delagothicone.className}`}
            >
              Witamy w świecie marketingu!
            </h1>

            <p className="text-lg 2xl:leading-6 leading-4">
              Gotów podnieść swój biznes na nowy poziom? Nasz zespół ekspertów
              oferuje skuteczne rozwiązania w zakresie promocji zarówno w
              Internecie i mediach społecznościowych, jak i w świecie
              rzeczywistym. Pomozemy Ci rozwijać swój biznes i przyciągać więcej
              klientów dzięki naszym pierwszorzędowym strategiom marketingowym.
              Nie przegap okazji, aby podnieść swój biznes na nowe wyżyny.
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
