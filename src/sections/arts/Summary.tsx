import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";

export default function Summary() {
  return (
    <Section className="h-[80svh] max-[426px]:h-svh max-[426px]:flex-col-reverse mb-[20rem] relative">
      <Section
        layout="col"
        className="flex-1/2 justify-center items-center relative"
      >
        <Section layout="col" className="w-[80%] gap-4">
          <HeaderText size="sm">Age groups & Courses</HeaderText>
          <Text size="sm">
            Explore our art classes, offering creative courses for various age
            groups, from young beginners to advanced artists, designed to
            nurture talent and artistic expression.
          </Text>
        </Section>
      </Section>
      <Section className="flex-1/2">
        <Image src="/artcourage.png" alt="Logo of Arts by Ancourage" />
      </Section>
      <Typography className="absolute bottom-[-30%] left-20 max-[426px]:text-[10rem] max-[426px]:bottom-[-20%]">
        classes
      </Typography>
    </Section>
  );
}
