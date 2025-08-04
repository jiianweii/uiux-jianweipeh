import { Link } from "@tanstack/react-router";
import Image from "./Image";
import Section from "./Section";
import Text from "./Text";
import { Icon } from "@iconify/react";

interface ReviewCardProps {
  src?: string;
  name: string;
  ratings: number;
  content: string;
  url: string;
}

export default function ReviewCard({
  src,
  name,
  ratings,
  content,
  url,
}: ReviewCardProps) {
  const contentArr = content.split(" ");
  const newContent = contentArr.slice(0, 30).join(" ");

  return (
    <Section
      layout="col"
      className="rounded-[16px] justify-around bg-[var(--white)] p-8 shadow-[2px_4px_4px_#00000025] gap-4"
    >
      <Section className="items-center gap-x-4">
        <div className="flex rounded-full size-10 bg-[var(--charcoal)] overflow-hidden justify-center items-center">
          {src ? (
            <Image src={src} alt={"Photo of " + name} className="size-full" />
          ) : (
            <Text size="xs" className="!text-[var(--white)]">
              {name[0]}
            </Text>
          )}
        </div>
        <Text size="xs" className="max-[1025px]:text-[1rem]">
          {name}
        </Text>
        <Section className="gap-x-0.5">
          {[...Array(ratings)].map(() => (
            <Icon
              icon="material-symbols:star"
              color="var(--teal)"
              className="text-[1.5rem] max-[1025px]:text-[1rem]"
            />
          ))}
        </Section>
      </Section>

      <Section layout="col" className="h-[60%] gap-4">
        <Text size="xxs" className="max-[1025px]:text-[.9rem]">
          {content.split(" ").length > 29 ? (
            <>
              {newContent}...<Link to={url}>Read More</Link>
            </>
          ) : (
            content
          )}
        </Text>
      </Section>
    </Section>
  );
}
