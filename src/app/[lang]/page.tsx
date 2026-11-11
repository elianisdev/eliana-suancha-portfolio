import { About } from "@/components/organisms/About";
import { Certifications } from "@/components/organisms/Certifications";
import { Contact } from "@/components/organisms/Contact";
import { Experience } from "@/components/organisms/Experience";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { HowIBuild } from "@/components/organisms/HowIBuild";
import { Navbar } from "@/components/organisms/Navbar";
import { Projects } from "@/components/organisms/Projects";
import { StatsStrip } from "@/components/organisms/StatsStrip";
import { getDictionary, getLocale } from "@/content/get-dictionary";

export default async function Home() {
  const [locale, dictionary] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <>
      <Navbar
        locale={locale}
        navigation={dictionary.navigation}
        languageSwitcherLabel={dictionary.languageSwitcher.label}
      />
      <main className="flex-1">
        <Hero content={dictionary.hero} terminal={dictionary.terminal} />
        <StatsStrip stats={dictionary.stats} />
        <About content={dictionary.about} />
        <Experience content={dictionary.experience} />
        <Projects content={dictionary.projects} />
        <HowIBuild content={dictionary.howIBuild} />
        <Certifications content={dictionary.certifications} locale={locale} />
        <Contact content={dictionary.contact} />
      </main>
      <Footer content={dictionary.footer} />
    </>
  );
}
