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
    <Section layout="col" className="size-[80%] gap-2 max-[769px]:size-full">
      <div>
        <Image
          src={props.src}
          alt={props.alt}
          className="h-[250px] max-[769px]:h-[400px] max-[376px]:h-[200px] w-full"
        />
      </div>

      <Text size="xs" className="font-semibold max-[769px]:text-[2rem]">
        {props.name}
      </Text>
      <p className="text-[0.8rem] font-light max-[769px]:text-[1.5rem]">
        {props.info}
      </p>
    </Section>
  );
}
