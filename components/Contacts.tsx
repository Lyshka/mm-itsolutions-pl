import Image from "next/image";
import { RiPhoneFill } from "react-icons/ri";

import { contact } from "@/assets/img";
import { Title } from "./Title/Title";
import Link from "next/link";
import { MailIcon } from "@/assets/img/MailIcon";
import { LocationIcon } from "@/assets/img/LocationIcon";
import clsx from "clsx";

interface IContacts {
  dark?: boolean;
}

export const Contacts = ({ dark = true }: IContacts) => {
  return (
    <section
      id="contacts"
      className={clsx(
        "flex justify-center items-center w-full",
        dark ? "bg-[#171717] text-white" : "bg-white text-[#333]"
      )}
    >
      <div className="container flex 2xl:flex-row flex-col-reverse gap-6 2xl:py-[104px] pt-10 2xl:items-center items-start">
        <div className="flex flex-col 2xl:justify-between justify-center 2xl:gap-10 gap-8 2xl:h-[360px] h-full">
          <Title text="Kontakty" />

          <div className="flex flex-col 2xl:gap-4 gap-2 2xl:w-[527px] w-full">
            <h6 className="2xl:text-[22px] text-base font-medium leading-6">
              Stwórzmy coś pięknego razem!
            </h6>

            <p className="2xl:text-base text-xs 2xl:leading-6 leading-4">
              Skontaktuj się z nami i uzyskaj darmową konsultację
              <br className="2xl:block hidden"/> Twojego biznesu już teraz
            </p>
          </div>

          <div className="grid 2xl:grid-cols-3 grid-rows-2 2xl:gap-0 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RiPhoneFill className="2xl:w-6 w-4 2xl:h-6 h-4" />

                <span className="flex-1 2xl:text-base text-sm font-medium 2xl:leading-6 left-4">
                  Telefon:
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                <li className="2xl:text-sm text-xs 2xl:leading-6 leading-4">
                  <Link href={"tel:+48799464873"}>+48799464873</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MailIcon className="2xl:w-6 w-4 2xl:h-6 h-4" />

                <span className="flex-1 2xl:text-base text-sm font-medium 2xl:leading-6 left-4">
                  Email:
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                <li className="2xl:text-sm text-xs 2xl:leading-6 leading-4">
                  <Link href={"mailto:mail@mm-itsolutions.pl"}>
                    mail@mm-itsolutions.pl
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 2xl:col-auto col-span-3">
              <div className="flex items-center gap-2">
                <LocationIcon className="2xl:w-6 w-4 2xl:h-6 h-4" />

                <span className="flex-1 2xl:text-base text-sm font-medium 2xl:leading-6 left-4">
                  Adres:
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                <li className="2xl:text-sm text-xs 2xl:leading-6 leading-4">
                  <Link
                    href={
                      "https://yandex.by/maps/104114/lublin-voivodeship/house/ZksYcwJoS0MHQFtrfX51dn1mZw==/?ll=22.558260%2C51.247153&z=16.82"
                    }
                  >
                    Hugo Kołłątaja 6/3, 20-006 Lublin, PL
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Image
          src={contact}
          alt="Kontakty ITSolutions"
          width={638}
          height={360}
          className="rounded-2xl 2xl:block hidden"
        />

        <Image
          src={contact}
          alt="Kontakty ITSolutions"
          height={161}
          className="rounded-[14.445px] 2xl:hidden block w-full"
        />
      </div>
    </section>
  );
};
