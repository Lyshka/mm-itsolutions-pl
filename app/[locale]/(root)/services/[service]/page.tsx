import { servicesPl, servicesRu } from "@/constants/services";
import ServiceSingle from "@/pages/ServiceSingle";
import { SelectLaguageDate } from "@/utils/SelectLaguageDate";

type Props = {
  params: { service: string };
};

export async function generateMetadata({ params }: Props) {
  const { service } = params;
  const services = SelectLaguageDate(servicesPl, servicesRu);
  const filteredService = services.filter(({ url }) => {
    return url === service;
  })[0];
  const { title, description } = filteredService;

  return {
    title,
    description,
  };
}

export function generateStaticParams() {
  return servicesPl.map(({ url }) => ({
    service: url,
  }));
}

export default ServiceSingle;
