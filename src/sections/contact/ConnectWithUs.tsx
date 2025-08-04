import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";

export default function ConnectWithUs() {
  return (
    <Section className="min-h-[80svh] items-center max-[769px]:flex-col">
      <Section className="flex-1/2 justify-center">
        <Image
          src="/tutors/IMG_0966-scaled.jpg"
          alt="All of the staffs of Ancourage Academy"
          className="size-[80%] max-[769px]:size-full"
        />
      </Section>
      <Section className="flex-1/2 max-[769px]:justify-center">
        <Section layout="col" className="size-[80%] gap-10">
          <HeaderText size="sm">Let's Connect</HeaderText>
          <Text size="xs">
            Do you have any questions, or would you like more information about
            Ancourage? If you&apos;d like to speak to us, simply reach us
            through the available platforms. We&apos;re here to help!
          </Text>
          <div className="grid grid-cols-3 gap-4">
            <Section layout="col" className="gap-6 max-[769px]:justify-between">
              <Section
                layout="col"
                className="border-l-3 border-[var(--teal)] pl-2 gap-2"
              >
                <Text size="xs" className="font-medium max-[426px]:text-[1rem]">
                  Our Location
                </Text>
                <div>
                  <Text size="xxs" className="max-[426px]:text-[.8rem]">
                    152 Bishan Street #01-215 (2nd Floor)
                  </Text>
                </div>
              </Section>
              <Button to="https://maps.app.goo.gl/Yc8JTC8mBS7fMcP46">
                Google Maps
              </Button>
            </Section>
            <Section layout="col" className="gap-6 max-[769px]:justify-between">
              <Section
                layout="col"
                className="border-l-3 border-[var(--teal)] pl-2 gap-2"
              >
                <Text size="xs" className="font-medium max-[426px]:text-[1rem]">
                  Get In Touch
                </Text>
                <div>
                  <Text size="xxs" className="max-[426px]:text-[.8rem]">
                    +65 8849 8106
                  </Text>
                  <Text size="xxs" className="max-[426px]:text-[.8rem]">
                    tuition@ancourage.net
                  </Text>
                </div>
              </Section>
              <Button to="https://api.whatsapp.com/send?phone=6588498106&text=Hi%2C%20I%20am%20interested%20to%20know%20more%20about%20Ancourage%27s%20tuition%20services!">
                WhatsApp
              </Button>
            </Section>
            <Section layout="col" className="gap-6 max-[769px]:justify-between">
              <Section
                layout="col"
                className="border-l-3 border-[var(--teal)] pl-2 gap-2"
              >
                <Text size="xs" className="font-medium max-[426px]:text-[1rem]">
                  Our Socials
                </Text>
                <div>
                  <Text size="xxs" className="max-[426px]:text-[.8rem]">
                    @ancouragebymin
                  </Text>
                  <Text size="xxs" className="max-[426px]:text-[.8rem]">
                    @artbyancourage
                  </Text>
                </div>
              </Section>
              <Button to="https://www.instagram.com/ancourage.academy/">
                Socials
              </Button>
            </Section>
          </div>
        </Section>
      </Section>
    </Section>
  );
}
