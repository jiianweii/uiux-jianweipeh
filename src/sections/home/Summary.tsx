import Section from "../../components/Section";
import Image from "../../components/Image";
import HeaderText from "../../components/HeaderText";
import Text from "../../components/Text";
import Button from "../../components/Button";

export default function Summary() {
  return (
    <Section className="h-svh items-center max-[769px]:flex-col pb-10">
      <Section className="flex-1/2 justify-center items-center">
        <Image
          src="/Ancourage-Academy-Outdoor-Signboard-Logo-1.jpg"
          alt="Ancourage-Academy-Outdoor-Signboard-Logo-1"
          className="size-[80%]"
        />
      </Section>
      <Section className="flex-1/2 justify-center">
        <Section layout="col" className="size-[80%] gap-5">
          <HeaderText size="sm" className="max-[426px]:text-[2.5rem]">
            Not just a tuition centre
          </HeaderText>
          <Text size="xs">
            At Ancourage, we believe that every student is unique, and so should
            their learning journey be. That&apos;s why we&apos;ve embraced the
            innovative ESB method to create personalised educational experiences
            that truly resonate.
          </Text>
          <Text size="xs">
            Unlike traditional tuition centres, our approach goes beyond simply
            teaching; we aim to understand each student&apos;s individual
            experiences, harness their strengths, and build on their beliefs
            about learning. By doing so, we empower our students to take charge
            of their education, fostering a deeper connection to the material
            and enhancing their confidence.
          </Text>
          <Text size="xs">
            Join us at Ancourage, a MOE-Registered Academy, and discover a
            transformative learning environment where tailored support meets
            academic excellence.
          </Text>
          <Button style="plain" to="/about">
            More About Us
          </Button>
        </Section>
      </Section>
    </Section>
  );
}
