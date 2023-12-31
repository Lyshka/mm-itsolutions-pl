import Image, { StaticImageData } from "next/image";
import { delagothicone } from "@/assets/font";

interface ICardPrice {
  price: {
    id: number;
    title: string;
    description: string;
    img: StaticImageData;
    alt: string;
  };
}

export const CardPrice = ({ price }: ICardPrice) => {
  const { alt, description, img, title } = price;

  return (
    <div className="border-b border-[#BBBBBB] 2xl:py-6 py-2 flex 2xl:flex-row flex-col 2xl:justify-between justify-center 2xl:gap-10 gap-4 w-full">
      <h4
        className={`${delagothicone.className} 2xl:text-xl text-sm 2xl:leading-8 leading-4 2xl:w-[300px] w-full`}
      >
        {title}
      </h4>

      <div className="flex 2xl:flex-row 2xl:gap-6 gap-4 flex-col-reverse">
        <p className="2xl:text-lg text-xs 2xl:leading-8 leading-4 2xl:w-[418px] w-full">
          {description}
        </p>

        <div className="relative">
          <Image
            src={img}
            alt={alt}
            width={417}
            height={168}
            className="2xl:block hidden rounded-lg object-cover"
          />

          <Image
            src={img}
            alt={alt}
            height={168}
            className="2xl:hidden block rounded-lg object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};
