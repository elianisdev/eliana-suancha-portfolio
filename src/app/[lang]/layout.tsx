import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { getDictionary, getLocale } from "@/content/get-dictionary";
import { fullName } from "@/content/profile";
import { locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const openGraphLocales: Record<Locale, string> = {
  es: "es_CO",
  en: "en_US",
};

export async function generateMetadata(): Promise<Metadata> {
  const [locale, { metadata }] = await Promise.all([getLocale(), getDictionary()]);

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      type: "website",
      title: metadata.title,
      description: metadata.description,
      siteName: fullName,
      locale: openGraphLocales[locale],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: metadata.imageAlt }],
    },
    alternates: {
      languages: Object.fromEntries(locales.map((lang) => [lang, `/${lang}`])),
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetBrainsMono.variable} h-full scroll-pt-16 scroll-smooth scheme-dark antialiased motion-reduce:scroll-auto`}
    >
      <body className="min-h-full flex flex-col bg-ink font-sans text-fg">
        {children}
      </body>
    </html>
  );
}
