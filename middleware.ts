import createMiddleware from "next-intl/middleware";

import { Locales } from "@/messages/index";

export default createMiddleware({
  // A list of all locales that are supported
  locales: Object.values(Locales),

  // Used when no locale matches
  defaultLocale: Locales.pl,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pl|ru)/:path*"],
};
