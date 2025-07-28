import Section from "./Section";
import Text from "./Text";

export default function BasicESBCard({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  return (
    <Section
      layout="col"
      className="bg-white h-[200px] justify-center items-center shadow-[2px_4px_4px_#00000025]"
    >
      <Section
        layout="col"
        className="w-[70%] justify-center items-center  gap-4"
      >
        <Text size="xs" className="!text-[var(--black)] text-center">
          {children}
        </Text>

        <Text size="xxs" className="text-center">
          {content}
        </Text>
      </Section>
    </Section>
  );
}
