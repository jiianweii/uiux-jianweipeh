import Image from "./Image";
import Section from "./Section";
import Text from "./Text";
import { Icon } from "@iconify/react";

export default function ReviewCard() {
  return (
    <Section
      layout="col"
      className="min-w-[30rem] rounded-[16px] justify-around bg-[var(--white)] p-8 shadow-[2px_4px_4px_#00000025] gap-4"
    >
      <Section className="items-center gap-x-4">
        <div className="rounded-full size-10 bg-[var(--charcoal)] overflow-hidden">
          <Image
            src="/tutors/min.png"
            alt={"Photo of user "}
            className="size-full"
          />
        </div>
        <Text size="sm">Joseph A</Text>
        <Section className="gap-x-0.5">
          {[...Array(5)].map(() => (
            <Icon
              icon="material-symbols:star"
              color="var(--teal)"
              className="text-[1.5rem]"
            />
          ))}
        </Section>
      </Section>

      <Section layout="col" className="h-[60%] gap-4">
        <Text size="xxs">
          “Ancourage has the warmest and friendliest teachers! The atmosphere is
          so conducive and comfortable for children to learn in. For student
          care, the teachers are respectful and caring towards every child’s
          needs. They also hold fun activities to build various life skills in
          children.”
        </Text>
      </Section>
    </Section>
  );
}
