import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";

export default function OperatingHours() {
  return (
    <Section className="h-svh justify-center">
      <Section layout="col" className="w-[80%] justify-around">
        <Typography className="leading-70 max-[769px]:text-[12rem] max-[426px]:text-[9rem] max-[769px]:leading-40">
          opening hours
        </Typography>
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
  );
}
