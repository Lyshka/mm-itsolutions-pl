"use client";

import { MouseEvent, useContext, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

import { MainContext } from "@/context/MainContext";
import { mainMenu } from "@/constants/menu";
import clsx from "clsx";
import { useLocale } from "next-intl";

export const MenuMobileHeader = () => {
  const { isOpenMenuHeader, toggleMenuHeader } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();

  const toggleSubMenu = () => {
    setIsOpen((prv) => !prv);
  };

  const autoClose = () => {
    if (toggleMenuHeader) {
      toggleMenuHeader();
    }
  };

  return (
    <>
      {isOpenMenuHeader && (
        <div className="flex flex-col">
          <ul className="flex flex-col gap-6 border-b-2 border-[#F4F4F4] pb-4">
            {mainMenu.map(({ id, title, url, addition }) => (
              <li key={id} className="list-header-li group hover:text-main">
                <>
                  {Boolean(addition) && (
                    <div
                      className="flex items-center gap-2"
                      onClick={toggleSubMenu}
                    >
                      <Link
                        onClick={autoClose}
                        href={`/${locale}/${url}`}
                        className="uppercase"
                      >
                        {title}
                      </Link>
                      {
                        <IoIosArrowDown
                          className={clsx(
                            "w-4 h-4",
                            !isOpen && "rotate-0",
                            isOpen && "rotate-180"
                          )}
                        />
                      }
                    </div>
                  )}
                  {!Boolean(addition) && (
                    <>
                      <Link href={`/${locale}/${url}`} className="uppercase">
                        {title}
                      </Link>
                    </>
                  )}
                </>

                {Boolean(addition) && isOpen && (
                  <SubMenu autoClose={autoClose} addition={addition} />
                )}
              </li>
            ))}
          </ul>

          <div className="py-6 flex flex-col gap-2 font-medium">
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
      )}
    </>
  );
};

interface ISubMenu {
  autoClose: () => void;
  addition:
    | {
        id: number;
        title: string;
        url: string;
      }[]
    | undefined;
}

const SubMenu = ({ addition, autoClose }: ISubMenu) => {
  const locale = useLocale();

  return (
    <ul className="p-6 pb-0 flex flex-col gap-6">
      {addition?.map(({ id, title, url }) => (
        <Link onClick={autoClose} key={id} href={`/${locale}/services/${url}`}>
          <li className="list-header-li-sub">{title}</li>
        </Link>
      ))}
    </ul>
  );
};
