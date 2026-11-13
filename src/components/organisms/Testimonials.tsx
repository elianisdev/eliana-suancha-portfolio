import { SectionHeader } from "@/components/molecules/SectionHeader";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { profileLinks, sectionIds } from "@/content/profile";
import { testimonials } from "@/content/testimonials";
import type { Dictionary } from "@/types/dictionary";

type TestimonialsProps = {
  content: Dictionary["testimonials"];
};

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <section id={sectionIds.testimonials} className="border-t border-line py-18 lg:py-23">
      <div className="mx-auto max-w-page px-4">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleStart={content.title}
          description={content.description}
          align="center"
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard
                quote={content.items[testimonial.id]}
                name={testimonial.name}
                role={testimonial.role}
                initials={testimonial.initials}
              />
            </li>
          ))}
        </ul>

        <a
          href={profileLinks.recommendations}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-6.5 block w-max max-w-full rounded-lg border border-dashed border-line px-3.5 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          {content.viewAll}
        </a>
      </div>
    </section>
  );
}
