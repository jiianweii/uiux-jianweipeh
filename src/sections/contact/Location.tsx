import MyGoogleMap from "../../components/Map";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";

export default function Location() {
  return (
    <Section className="h-[70svh] justify-center mt-20">
      <div className="grid grid-cols-2 size-[80%] max-[426px]:size-[90%] gap-12 max-[769px]:grid-rows-2">
        <div className="relative w-full max-[769px]:row-span-2 max-[769px]:col-span-2 max-[426px]:size-full">
          <MyGoogleMap />
        </div>
        <Section
          layout="col"
          className="gap-4 justify-between max-[769px]:row-span-2 max-[769px]:col-span-2"
        >
          <Typography className="leading-50 text-[18rem] max-[769px]:text-[12rem] max-[426px]:text-[9rem]">
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
                We are two bus stops away from Bishan interchange, tucked into a
                little cozy corner at the second floor of HDB Block 152.
              </Text>
            </div>
          </Section>
        </Section>
      </div>
    </Section>
  );
}
