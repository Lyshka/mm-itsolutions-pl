"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { useRouter, usePathname } from "@/utils/navigation";

import { languages } from "@/constants/language";
import { SelectLaguageDate } from "@/utils/SelectLaguageDate";
import { Locales } from "@/messages";
import clsx from "clsx";

type Language = {
  id: number;
  img: StaticImageData;
  language: Locales;
};



export const SelectLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const languagePl = languages[0];
  const languageRu = languages[1];
  const languageDefault = SelectLaguageDate(languagePl, languageRu);

  const [isLanguage, setIsLanguage] = useState<Language>(languageDefault);
  const [open, setOpen] = useState(false);

  const toggleSelectMenuLanguage = () => {
    setOpen((prv) => !prv);
  };

  const changeLanguage = (language: string) => {
    router.replace(pathname, { locale: language });
  };

  const selectMenuLanguage = (language: Language) => {
    setIsLanguage(language);
    toggleSelectMenuLanguage();
    changeLanguage(language.language);
  };

  return (
    <div className="relative w-[151px] h-[58px] 2xl:order-last order-none">
      <div className="bg-white absolute top-0 z-[1]">
        <div
          className={clsx("flex items-center gap-8 cursor-pointer p-4", open && "border-b-[0.5px] border-[#333333] border-opacity-20")}
          onClick={toggleSelectMenuLanguage}
        >
          <Image
            className="w-[42px] h-[26px] object-cover border-[-0.5px] border-[#333]"
            src={isLanguage.img}
            alt="language"
          />

          <div className="flex items-center gap-3 text-[#333333]">
            <span className="text-sm leading-6 tracking-[1px] uppercase ">
              {isLanguage.language}
            </span>

            <FaAngleDown className="w-5 h-5" />
          </div>
        </div>

        {open &&
          languages
            .filter(({ language }) => {
              return language !== isLanguage.language;
            })
            .map((language) => (
              <div
                onClick={() => selectMenuLanguage(language)}
                key={language.id}
                className="flex items-center gap-8 cursor-pointer p-4 hover:bg-black/10"
              >
                <Image
                  className="w-[42px] h-[26px] object-cover border-[-0.5px] border-[#333]"
                  src={language.img}
                  alt="language"
                />

                <div className="flex items-center gap-3 text-[#333333]">
                  <span className="text-sm leading-6 tracking-[1px] uppercase ">
                    {language.language}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
