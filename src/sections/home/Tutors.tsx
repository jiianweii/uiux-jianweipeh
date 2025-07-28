import BasicTutorCard from "../../components/BasicTutorCard";
import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import Section from "../../components/Section";
import Text from "../../components/Text";

export default function Tutors() {
  return (
    <Section
      layout="col"
      className="min-h-[80svh] px-20 py-15 bg-[var(--beige)] justify-around"
    >
      <HeaderText
        size="md"
        className="max-[768px]:text-[5rem] max-[426px]:text-[4rem] max-[376px]:text-[3.5rem]"
      >
        What We Offer
      </HeaderText>
      <div className="h-[60%] grid grid-cols-5 gap-x-8 gap-y-4 max-[1024px]:grid-cols-1">
        <Section layout="col" className="col-span-2 justify-between gap-y-4">
          <Text size="xs">
            We pride ourselves on our team of dedicated educators, each bringing
            years of teaching experience and a wealth of knowledge to the
            classroom. Our educators have worked with a diverse range of
            students, tailoring their teaching methods to meet individual needs
            and learning styles.
          </Text>
          <Text size="xs">
            Whether it is mastering complex concepts or building confidence, our
            teachers are committed to guiding each student on their unique
            educational journey.
          </Text>
          <Button style="plain" to="/classes">
            Learn More
          </Button>
        </Section>
        <Section className="col-span-3 justify-between max-[769px]:flex-col max-[769px]:gap-y-10">
          <Section className="size-full">
            <BasicTutorCard
              src="/tutors/min.png"
              alt="Image of Tutor Min"
              name="Min"
              info="Tutor Min specialises in English Language, Literature, History, Mathematics, Additional Mathematics."
            />
          </Section>
          <Section className="size-full">
            <BasicTutorCard
              src="/tutors/karl.png"
              alt="Image of Tutor Karl"
              name="Karl"
              info="Tutor Karl specialises in English Language, Mathematics, Science, Physics, Chemistry and Biology."
            />
          </Section>
          <Section className="size-full">
            <BasicTutorCard
              src="/tutors/angie.png"
              alt="Image of Tutor Angie"
              name="Angie"
              info="Tutor Angie specialises in Fine Arts, Digital Arts, Arts and Crafts."
            />
          </Section>
        </Section>
      </div>
    </Section>
  );
}
