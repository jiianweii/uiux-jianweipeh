import Button from "../../components/Button";
import ReviewCard from "../../components/ReviewCard";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";
import { Icon } from "@iconify/react";

export default function Reviews() {
  return (
    <Section
      layout="col"
      className="h-[60svh] justify-between bg-[var(--beige)] px-20 pt-20 relative overflow-hidden"
    >
      <div className="grid grid-cols-7">
        <Section
          layout="col"
          className="w-full items-center justify-center col-span-2"
        >
          <Section layout="col" className="gap-y-4 z-10">
            <Text size="md">Ancourage Reviews</Text>
            <Section>
              {[...Array(5)].map(() => (
                <Icon
                  icon="material-symbols:star"
                  color="var(--teal)"
                  className="text-[2rem]"
                />
              ))}
            </Section>
            <Section className="gap-x-5">
              <Text size="xs">5.0 Ratings</Text>
              <Text size="xs">38 Reviews</Text>
            </Section>
            <Button
              target="_blank"
              to="https://www.google.com/maps/place/Ancourage+Academy/@1.3456678,103.8519498,16z/data=!3m1!5s0x31da176d351fb82b:0xcdd24792cd85afe7!4m8!3m7!1s0x31da1764d30519f1:0x2538b941eced38dc!8m2!3d1.3456624!4d103.8545247!9m1!1b1!16s%2Fg%2F11vwhtcn87?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
            >
              View All Reviews
            </Button>
          </Section>
        </Section>
        <Section className="h-full w-full gap-8 overflow-hidden py-2 col-span-5 z-10">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Section>
      </div>

      <Typography className="absolute bottom-[-15%] right-20">
        #ancouragelove
      </Typography>
    </Section>
  );
}
