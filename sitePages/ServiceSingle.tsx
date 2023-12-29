import { Contacts } from "@/components/Contacts";
import { ServiceFormBlock } from "@/components/ServiceFormBlock";
import { TopMenuServices } from "@/components/TopMenuServices";
import { ServicePage } from "@/widgets/ServicePage";
import { unstable_setRequestLocale } from "next-intl/server";

interface IServiceSingle {
  params: {
    service: string;
    locale: string;
  };
}

const ServiceSingle = ({ params }: IServiceSingle) => {
  const service: string = params?.service;
  const locale: string = params?.locale;
  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container justify-start items-start relative">
        <TopMenuServices idSevice={service} />
        <div className="w-full">
          <ServicePage idSevice={service} />
        </div>
      </div>

      <ServiceFormBlock />

      <Contacts dark={false} />
    </div>
  );
};
export default ServiceSingle;
