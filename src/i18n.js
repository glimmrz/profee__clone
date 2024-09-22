import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = [
  "en",
  "cz",
  "de",
  "ru",
  "es",
  "fr",
  "it",
  "pl",
  "br",
  "ro",
  "ua",
  "uz",
  "vn",
];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
