import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";
import { Icon } from "@iconify/react";

export default function ContactUs() {
  return (
    <Section className="h-svh items-center px-20 max-[426px]:flex-col">
      <Section className="flex-1/2 justify-center">
        <Image
          src="/Ancourage-Academy-Outdoor-Signboard-Logo-1.jpg"
          alt="Ancourage-Academy-Outdoor-Signboard-Logo-1"
          className="size-[80%] max-[426px]:size-full"
        />
      </Section>
      <Section className="flex-1/2 justify-center">
        <Section
          layout="col"
          className="size-[60%] gap-8 max-[426px]:size-full"
        >
          <HeaderText size="sm" className="leading-18">
            Have more questions to ask?
          </HeaderText>
          <Text size="xs">
            Reach out to us today and we will answer any question that you may
            have in mind!
          </Text>
          <Section layout="col" className="gap-2">
            <Section className="gap-2 items-center">
              <Icon
                icon="ri:whatsapp-fill"
                className="text-[1.2rem]"
                color="#25D366"
              />
              <Text size="xxs">Whatsapp 88498106</Text>
            </Section>
            <Section className="gap-2 items-center">
              <Icon icon="logos:telegram" className="text-[1rem]" />
              <Text size="xxs">Telegram @ancouragebymin</Text>
            </Section>
            <Section className="gap-2 items-center">
              <Icon icon="skill-icons:instagram" className="text-[1rem]" />
              <Text size="xxs">@ancouragebymin</Text>
            </Section>
          </Section>

          <Button
            style="plain"
            to="https://api.whatsapp.com/send?phone=6588498106&text=Hi%2C%20I%20am%20interested%20to%20know%20more%20about%20Ancourage%27s%20tuition%20services!"
          >
            Contact Us
          </Button>
        </Section>
      </Section>
    </Section>
  );
}
