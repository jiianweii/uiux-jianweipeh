import Image from "./Image";
import Section from "./Section";
import Text from "./Text";
import { Icon } from "@iconify/react";

interface AdvancedTutorCardProps {
  src: string;
  alt: string;
  role: string;
  name: string;
  specialties: string;
  quotes: string;
  biography: string;
  facts: string[];
}

export default function AdvancedTutorCard(props: AdvancedTutorCardProps) {
  return (
    <div className="bg-[var(--beige)] shadow-[4px_6px_10px_#00000025] rounded-[16px] grid grid-cols-7">
      <div className="flex size-full col-span-2  max-[1024px]:col-span-7">
        <Image
          src={props.src}
          alt={props.alt}
          className="rounded-tl-[16px] rounded-bl-[16px] size-full max-[769px]:rounded-tr-[16px] max-[769px]:rounded-bl-none"
        />
      </div>

      <Section
        layout="col"
        className="p-10 gap-y-5 col-span-5  max-[1024px]:col-span-7"
      >
        <Text size="sm" className="font-semibold">
          {props.role}
        </Text>
        <Section className="items-center gap-x-4">
          <Text size="lg" className="font-semibold !text-[var(--black)]">
            {props.name}
          </Text>
          <Section className="items-center gap-x-2">
            <Icon
              icon="tabler:book-filled"
              color="var(--teal)"
              className="text-[1.5rem]"
            />
            <Text size="xs">{props.specialties}</Text>
          </Section>
        </Section>
        <Text size="xxs" className="!text-[var(--teal)] italic">
          {props.quotes}
        </Text>
        <Text size="xxs">{props.biography}</Text>
        <Text size="xs">Fun Facts:</Text>
        <ul>
          {props.facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
