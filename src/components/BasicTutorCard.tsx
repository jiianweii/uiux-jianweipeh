import Image from "./Image";
import Section from "./Section";
import Text from "./Text";

interface BasicTutorCard {
  src: string;
  alt: string;
  name: string;
  info: string;
}

export default function BasicTutorCard(props: BasicTutorCard) {
  return (
    <Section layout="col" className="size-[80%] gap-2">
      <div>
        <Image src={props.src} alt={props.alt} className="h-[250px] w-full" />
      </div>

      <Text size="xs" className="font-semibold">
        {props.name}
      </Text>
      <p className="text-[0.8rem] font-light">{props.info}</p>
    </Section>
  );
}
