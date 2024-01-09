import { Locales } from "@/messages";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = Object.keys(Locales);

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
