import type { Locale } from "@/lib/i18n";

export const formatMonthYear = (isoMonth: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale, { month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(`${isoMonth}-01T00:00:00Z`))
    .replace(".", "");
