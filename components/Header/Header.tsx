"use client";

import { useContext } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

import { mainMenu } from "@/constants/menu";
import { MenuMobileHeader } from "./MenuMobileHeader";
import { MainContext } from "@/context/MainContext";
import { Logo } from "@/assets/img/Logo";
import { useLocale } from "next-intl";
import { Locales } from "@/messages";
import { checkLanguage } from "@/utils/checkLanguage";

export const Header = () => {
  const { isOpenMenuHeader, toggleMenuHeader } = useContext(MainContext);
  const locale = useLocale();

  return (
    <header className="flex 2xl:flex-row flex-col justify-center items-center 2xl:py-4 py-0 border-b-2 border-[#F4F4F4]">
      <div className="container">
        <Link
          href={"/"}
          className="2xl:h-20 2xl:w-16 h-16 w-12 2xl:p-2 p-0 flex justify-center items-center"
        >
          <Logo />
        </Link>

        <nav className="2xl:hidden">
          <button
            onClick={toggleMenuHeader}
            className="flex justify-center items-center"
          >
            {isOpenMenuHeader && <CgClose className="h-8 w-8" />}
            {!isOpenMenuHeader && <RxHamburgerMenu className="h-8 w-8" />}
          </button>
        </nav>

        <ul className="hidden 2xl:flex items-center gap-10">
          {mainMenu.map(({ url, id, titleEn, titlePl, titleRu, titleUa }) => {
            const title = checkLanguage(locale, {
              titleEn,
              titlePl,
              titleRu,
              titleUa,
            });

            return (
              <li key={id} className="list-header-li hover:text-main uppercase">
                <Link href={`${locale}/${url}`}>{title}</Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden 2xl:flex flex-col gap-2">
          <Link className="flex items-center gap-4" href={"tel:+48799464873"}>
            <LuPhone className="w-6 h-6" />
            <span className="whitespace-nowrap">+48799464873</span>
          </Link>
          <Link
            className="flex items-center gap-4"
            href={"mailto:mail@mm-itsolutions.pl"}
          >
            <MdOutlineMailOutline className="w-6 h-6" />
            mail@mm-itsolutions.pl
          </Link>
        </div>
      </div>

      <div className="container 2xl:hidden py-0">
        <MenuMobileHeader />
      </div>
    </header>
  );
};
