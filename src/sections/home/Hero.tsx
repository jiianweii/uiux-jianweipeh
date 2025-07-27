import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";

export default function Hero() {
  return (
    <Section className="justify-center items-center h-svh bg-[var(--beige)]">
      <Section
        layout="col"
        className="flex-3/5 h-full justify-center items-center"
      >
        <Section layout="col" className="size-[80%] justify-center">
          <HeaderText size="xl">ancourage</HeaderText>
          <Section layout="col" className="gap-6">
            <Text size="sm">Languages | Mathematics | Science | Arts</Text>
            <Text size="lg">
              Ancourage Academy – MOE-Registered Bishan Tuition Centre Offering
              Personalised Learning from Preschool to JC, Including IP and IB
              Programmes
            </Text>
            <Button to="/contact">Contact Us</Button>
          </Section>
        </Section>
      </Section>
      <Section className="h-full">
        <Image src="/book-bg.jpg" alt="book with pink wall background" />
      </Section>
    </Section>
  );
}
