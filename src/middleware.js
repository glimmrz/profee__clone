import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|cz|de|ru|es|fr|it|pl|br|ro|ua|uz|vn)/:path*"],
};
