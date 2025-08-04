import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";

export default function Hero() {
  return (
    <Section className="justify-center items-center h-svh max-[426px]:h-[60svh] bg-[var(--beige)] max-[1200px]:flex-wrap-reverse">
      <Section
        layout="col"
        className="flex-3/5 h-full justify-center items-center"
      >
        <Section
          layout="col"
          className="size-[80%] justify-around max-[1025px]:justify-center max-[1025px]:gap-y-10"
        >
          <div>
            <HeaderText size="xl" className="max-[426px]:text-[6rem]">
              ancourage
            </HeaderText>
            <div className="px-8 py-4 bg-[var(--teal)] w-fit rounded-4xl">
              <Text
                size="lg"
                className="!text-[var(--white)] font-medium max-[426px]:text-[1.2rem] max-[376px]:text-[1rem]"
              >
                Primary | Secondary | IB | Junior College
              </Text>
            </div>
          </div>
          <Section layout="col" className="gap-6">
            <Text
              size="lg"
              className="font-medium max-[769px]:text-[1.8rem] max-[426px]:text-[1.2rem] max-[375px]:text-[1rem]"
            >
              Ancourage Academy – MOE-Registered Bishan Tuition Centre Offering
              Personalised Learning from Preschool to JC, Including IP and IB
              Programmes
            </Text>
            <Text size="sm" className="font-medium max-[321px]:text-[1rem]">
              Languages | Mathematics | Science | Arts
            </Text>
            <Button to="/contact">Contact Us</Button>
          </Section>
        </Section>
      </Section>
      <Section className="h-full max-[1200px]:hidden">
        <Image src="/book-bg.jpg" alt="book with pink wall background" />
      </Section>
    </Section>
  );
}
