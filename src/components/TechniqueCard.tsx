import Section from "./Section";
import Text from "./Text";

interface TechniqueCardProps {
  title: string;
  content: string[];
}

export default function TechniqueCard({ title, content }: TechniqueCardProps) {
  return (
    <Section
      layout="col"
      className="h-full w-[30rem] justify-around bg-[var(--white)] gap-y-8 p-8 shadow-[2px_4px_4px_#00000025]"
    >
      <div className="border-l-4 border-[var(--teal)] px-4">
        <Text size="sm">{title}</Text>
      </div>

      <Section layout="col" className="h-[60%] gap-4">
        {content.map((con) => (
          <p className="text-[0.9rem]">{con}</p>
        ))}
      </Section>
    </Section>
  );
}
