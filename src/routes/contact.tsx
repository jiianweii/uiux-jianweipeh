import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";

import ConnectWithUs from "../sections/contact/ConnectWithUs";
import Text from "../components/Text";

import Typography from "../components/Typography";
import MyGoogleMap from "../components/Map";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
  beforeLoad: () => ({
    title: "Contact Us - My Website",
  }),
});

function RouteComponent() {
  return (
    <Section layout="col">
      <ConnectWithUs />
      <Section className="h-[70svh] justify-center">
        <div className="grid grid-cols-2 w-[80%] h-[80%] gap-12">
          <div className="relative w-full">
            <MyGoogleMap />
          </div>
          <Section layout="col" className="gap-4 justify-between">
            <Typography className="leading-50 !text-[18rem]">
              visit us
            </Typography>
            <Section className="gap-4" layout="col">
              <Section
                layout="col"
                className="border-l-3 border-[var(--teal)] pl-2 gap-2"
              >
                <Text size="xs" className="font-medium">
                  We&apos;re located in Bishan. Come and visit us!
                </Text>
              </Section>
              <div>
                <Text size="xxs">
                  We are two bus stops away from Bishan interchange, tucked into
                  a little cozy corner at the second floor of HDB Block 152.
                </Text>
              </div>
            </Section>
          </Section>
        </div>
      </Section>
      <Section className="h-svh justify-center">
        <Section layout="col" className="w-[80%] justify-around">
          <Typography className="leading-70">opening hours</Typography>
          <Section className="gap-8" layout="col">
            <Section
              layout="col"
              className="border-l-3 border-[var(--teal)] pl-2 gap-2"
            >
              <Text size="md" className="font-medium">
                We are open every day!
              </Text>
            </Section>
            <Section layout="col" className="gap-5">
              <Text size="xs">
                <strong>Monday:</strong> 12:00pm to 11:00pm
              </Text>
              <Text size="xs">
                <strong>Tuesday:</strong> 12:00pm to 11:00pm
              </Text>
              <Text size="xs">
                <strong>Wednesday:</strong> 12:00pm to 11:00pm
              </Text>
              <Text size="xs">
                <strong>Thursday:</strong> 12:00pm to 11:00pm
              </Text>
              <Text size="xs">
                <strong>Friday:</strong> 12:00pm to 11:00pm
              </Text>
              <Text size="xs">
                <strong>Saturday:</strong> 9:00am to 11:00pm
              </Text>
              <Text size="xs">
                <strong>Sunday:</strong> 9:00am to 11:00pm
              </Text>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
