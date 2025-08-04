import ESBTitle from "./ESBTitle";
import Image from "./Image";
import Section from "./Section";

interface ESBCardProps {
  src: string;
  alt: string;
  title: string;
  info: string;
}

export default function ESBCard(props: ESBCardProps) {
  return (
    <Section layout="col" className="h-full w-full bg-[#FDFDFC]">
      <Section className="min-h-[300px] max-[769px]:h-[200px]">
        <Image src={props.src} alt={props.alt} className="w-full" />
      </Section>
      <div className="h-full grid grid-rows-2 px-8 py-4">
        <Section className="w-full justify-center">
          <ESBTitle title={props.title} />
        </Section>
        <Section className="justify-self-start">
          <p className="!text-[#605A52] text-[1.5rem] max-[1025px]:text-[1.4rem]">
            {props.info}
          </p>
        </Section>
      </div>
    </Section>
  );
}
