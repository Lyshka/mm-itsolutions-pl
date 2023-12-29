import { NewsAbout } from "@/components/News/NewsAbout";
import { Contacts } from "@/components/Contacts";
import { ListNews } from "@/components/News/ListNews";
import { unstable_setRequestLocale } from "next-intl/server";

export default function News({ params }: { params: { locale: string } }) {
  const locale: string = params?.locale;
  unstable_setRequestLocale(locale);

  return (
    <>
      <NewsAbout />

      <ListNews />

      <Contacts dark={false} />
    </>
  );
}
