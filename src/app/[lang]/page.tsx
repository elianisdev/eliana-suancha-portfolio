import { Badge } from "@/components/atoms/Badge";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Chip } from "@/components/atoms/Chip";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";
import { Tag } from "@/components/atoms/Tag";
import { LanguageSwitcher } from "@/components/molecules/LanguageSwitcher";
import { getDictionary, getLocale } from "@/content/get-dictionary";

export default async function Home() {
  const [locale, dictionary] = await Promise.all([getLocale(), getDictionary()]);
  const { placeholder, languageSwitcher } = dictionary;

  return (
    <main className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center gap-6 px-4">
      <LanguageSwitcher currentLocale={locale} label={languageSwitcher.label} />
      <Eyebrow>{placeholder.eyebrow}</Eyebrow>
      <h1 className="font-display text-5xl font-extrabold tracking-tight">
        Eliana <GradientText>Suancha</GradientText>
      </h1>
      <p className="max-w-xl text-muted">{placeholder.description}</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{placeholder.status}</Badge>
        <Tag>Next.js</Tag>
        <Tag tone="secondary">TypeScript</Tag>
        <Chip>Tailwind CSS</Chip>
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="https://www.linkedin.com/in/elianaguz" variant="primary" external>
          LinkedIn ↗
        </ButtonLink>
        <ButtonLink href="https://github.com/elianisdev" external>
          GitHub ↗
        </ButtonLink>
      </div>
    </main>
  );
}
