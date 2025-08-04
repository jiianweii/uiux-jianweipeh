import Section from "../../components/Section";
import HeaderText from "../../components/HeaderText";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Button from "../../components/Button";

export default function Trial() {
  return (
    <Section className="h-svh max-[426px]:flex-col-reverse">
      <Section
        layout="col"
        className="flex-1/2 justify-center items-center relative"
      >
        <Section layout="col" className="w-[80%] gap-4">
          <HeaderText size="sm">$18 Trial Class</HeaderText>
          <Text size="sm">
            Give your child the opportunity to experience our unique approach to
            learning. Sign up for our $18 trial class today and take the first
            step toward academic success!
          </Text>
          <Button to="https://api.whatsapp.com/send?phone=6588498106&text=Hi%2C%20I%20am%20interested%20to%20sign%20up%20for%20a%20trial%20class%20at%20Ancourage!">
            Register
          </Button>
        </Section>
      </Section>
      <Section className="flex-1/2">
        <Image
          src="/image15.png"
          alt="Small group of students drawing"
          className="max-[426px]:w-full"
        />
      </Section>
    </Section>
  );
}
