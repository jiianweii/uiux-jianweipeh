import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";

export default function Vision() {
  return (
    <Section className="min-h-svh max-[769px]:flex-col-reverse">
      <Section
        layout="col"
        className="flex-1/2 justify-center items-center relative max-[769px]:overflow-hidden"
      >
        <div className="w-[80%] max-[769px]:h-[60svh]">
          <HeaderText size="sm">Our Vision</HeaderText>
          <Text size="sm">
            We envision a transformative approach to education that goes beyond
            traditional tutoring. Our mission is to create a tailored learning
            experience that recognises and nurtures the unique strengths and
            challenges of each student. We believe that education should be a
            collaborative journey, where personalised instruction and innovative
            teaching methods empower students to reach their full potential.
          </Text>
        </div>
        <Typography className="absolute bottom-[-15%] right-20 max-[769px]:text-[15rem] max-[426px]:text-[8rem] max-[321px]:text-[6rem] max-[376px]:text-[7rem] max-[700px]:text-[13rem] max-[700px]:bottom-[-10%] max-[426px]:bottom-[-5%]">
          vision
        </Typography>
      </Section>
      <Section className="flex-1/2">
        <Image
          src="/IMG_7897-scaled.jpg"
          alt="Photo of Julius Caesar?"
          className="size-full"
        />
      </Section>
    </Section>
  );
}
