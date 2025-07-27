import ESBTitle from "./ESBTitle";
import Image from "./Image";
import Section from "./Section";
import Text from "./Text";

interface ESBCardProps {
  src: string;
  alt: string;
  title: string;
  info: string;
}

export default function ESBCard(props: ESBCardProps) {
  return (
    <Section layout="col" className="h-full w-[500px] bg-[#FDFDFC]">
      <Section className="h-[300px]">
        <Image src={props.src} alt={props.alt} className="w-full" />
      </Section>
      <Section layout="col" className="h-full justify-between  px-8 py-4">
        <Section className="w-full justify-center">
          <ESBTitle title={props.title} />
        </Section>
        <Section>
          <Text size="sm" className="text-[#605A52]">
            {props.info}
          </Text>
        </Section>
      </Section>
    </Section>
  );
}
