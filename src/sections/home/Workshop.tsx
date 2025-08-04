import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";

export default function Workshop() {
  return (
    <Section
      layout="col"
      className="h-[60svh] justify-between bg-[var(--beige)] px-20 pt-20 relative overflow-hidden max-[426px]:h-[60svh]"
    >
      <Section className=" max-[769px]:flex-col gap-y-5">
        <Section className="w-full">
          <HeaderText
            size="md"
            className="mt-[-30px] leading-18 max-[426px]:text-[4rem]"
          >
            Interested in our workshops?
          </HeaderText>
        </Section>
        <Section layout="col" className="w-full gap-8">
          <Text size="sm">
            We Think One of Our Workshops Will Fit Your Needs Ready to check
            which workshops are available? You can click the button to see all
            our available workshops or you can call us for a consultation!
          </Text>
          <Button style="plain" to="/classes">
            Check Our Workshops
          </Button>
        </Section>
      </Section>

      <Typography className="absolute bottom-[-15%] right-20 max-[769px]:text-[15rem] max-[426px]:text-[8rem] max-[321px]:text-[6rem] max-[376px]:text-[7rem] max-[700px]:text-[13rem] max-[700px]:bottom-[-10%] max-[426px]:bottom-[-5%]">
        workshops
      </Typography>
    </Section>
  );
}
