import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";

export default function Summary() {
  return (
    <Section className="h-[80svh] mb-[20rem] relative max-[426px]:flex-col-reverse">
      <Section
        layout="col"
        className="flex-1/2 justify-center items-center relative"
      >
        <Section layout="col" className="w-[80%] gap-4">
          <HeaderText size="sm" className="leading-18 max-[426px]:text-[3rem]">
            What is it like being a student at Ancourage?
          </HeaderText>
          <Text size="sm">
            We prepared a list of frequently asked questions received from
            parents. If you have other queries, please feel free to contact us.
          </Text>
        </Section>
      </Section>
      <Section className="flex-1/2 justify-center">
        <Image
          src="/IMG_0963.jpg"
          alt="Photo of Girl writting on the board"
          className="w-[80%]"
        />
      </Section>
      <Typography className="absolute bottom-[-30%] left-20 max-[426px]:text-[8rem] max-[426px]:bottom-[-30%]">
        questions
      </Typography>
    </Section>
  );
}
