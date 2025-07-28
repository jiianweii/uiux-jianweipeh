import { Icon } from "@iconify/react";
import Image from "./Image";
import Section from "./Section";
import Text from "./Text";
import Button from "./Button";

interface BasicSubjectCardProps {
  src: string;
  alt: string;
  title: string;
  duration: string;
  ageGroup: string;
  description: string;
  list: string[];
  to: string;
}

export default function BasicSubjectCard(props: BasicSubjectCardProps) {
  return (
    <Section className="max-[426px]:flex-col max-[426px]:gap-2">
      <Section className="flex-1/2">
        <Image src={props.src} alt={props.alt} className="w-full h-[40rem]" />
      </Section>
      <Section
        layout="col"
        className="flex-1/2 justify-center items-center relative max-[426px]:items-start"
      >
        <Section layout="col" className="w-[80%] gap-7">
          <Text size="md" className="font-medium !text-[var(--black)]">
            {props.title}
          </Text>
          <Section className="gap-5">
            <Section className="items-center gap-2">
              <Icon
                icon="tabler:clock-filled"
                color="var(--teal)"
                className="text-[1.5rem]"
              />
              <Text size="sm">{props.duration}</Text>
            </Section>
            <Section className="items-center gap-2">
              <Icon
                icon="basil:user-solid"
                color="var(--teal)"
                className="text-[2rem]"
              />
              <Text size="sm">{props.ageGroup}</Text>
            </Section>
          </Section>
          <Text size="sm">{props.description}</Text>

          <ul>
            {props.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <Button to={props.to} style="plain">
            Learn More
          </Button>
        </Section>
      </Section>
    </Section>
  );
}
