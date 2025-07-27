import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";

export default function Vision() {
  return (
    <Section className="h-svh">
      <Section
        layout="col"
        className="flex-1/2 justify-center items-center relative"
      >
        <div className="w-[80%]">
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
        <Typography className="absolute bottom-[-10%] right-20">
          vision
        </Typography>
      </Section>
      <Section className="flex-1/2">
        <Image src="/IMG_7897-scaled.jpg" alt="Photo of Julius Caesar?" />
      </Section>
    </Section>
  );
}
