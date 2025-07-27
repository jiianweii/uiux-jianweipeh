import Section from "./Section";
import { Icon } from "@iconify/react";
import Text from "./Text";

interface SubjectCardProps {
  icon: string;
  subject: string;
  info: string;
}

export default function SubjectCard(props: SubjectCardProps) {
  return (
    <Section
      layout="col"
      className="justify-center items-center gap-2 size-fit"
    >
      <Icon icon={props.icon} color="var(--teal)" className="text-[3rem]" />
      <Text size="sm" className="!text-[var(--black)] font-semibold">
        {props.subject}
      </Text>
      <Text size="xs" className="text-center">
        {props.info}
      </Text>
    </Section>
  );
}
