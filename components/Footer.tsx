import Link from "next/link";

import { footerMenuJobs } from "@/constants/menu";
import { social } from "@/constants/social";
import { LogoWhite } from "@/assets/img/LogoWhite";

export const Footer = () => {
  return (
    <footer className="bg-[#171717] 2xl:py-12 py-6 flex flex-col justify-center items-center text-white">
      <div className="container-footer">
        <div className="flex flex-col gap-6 2xl:w-[307px] w-full items-start">
          <Link
            href={"/"}
            className="2xl:h-20 2xl:w-16 h-16 w-12 2xl:p-2 p-0 flex justify-center items-center"
          >
            <LogoWhite />
          </Link>

          <p className="font-medium 2xl:text-base text-sm">
            ITSolutions - pełnokrotna agencja marketingu cyfrowego.
          </p>

          <ul className="flex flex-col">
            {footerMenuJobs.map(({ id, title }) => (
              <li key={id} className="footer-ul-jobs">
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="2xl:w-[307px] w-full 2xl:mt-0 mt-10">
          <div className="flex flex-col gap-6 2xl:items-end items-start">
            <div className="flex flex-col gap-4">
              <p className="font-medium 2xl:text-right">
                Media społecznościowe:
              </p>

              <div className="text-white flex gap-6 items-center">
                {social.map(({ icon, id, url }) => (
                  <Link
                    key={id}
                    href={url}
                    target="_blank"
                    rel="nofollow"
                    className={
                      "border border-white rounded-full w-8 h-8 flex justify-center items-center group hover:border-main"
                    }
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            <p className="text-left text-[#BBBBBB] text-sm">
            © Wszelkie prawa zastrzeżone ITSolutions {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
