import Section from "../../components/Section";
import HeaderText from "../../components/HeaderText";
import ESBCard from "../../components/ESBCard";
import Button from "../../components/Button";

export default function ESB() {
  return (
    <Section layout="col" className="h-svh bg-[var(--beige)] p-12">
      <HeaderText size="sm">Our Proprietary ESB Methodology</HeaderText>
      <Section layout="col" className="justify-around items-center h-full">
        <Section className="h-[80%]">
          <ESBCard
            src="/Ebbinghaus.png"
            alt="Photo of Ebbinghaus"
            title="Ebbinghaus Memory Theory"
            info="Harnessing the power of Ebbinghaus' memory theory, we turn fleeting knowledge into lasting impressions through perfectly timed repetition."
          />
          <ESBCard
            src="/Socratic.png"
            alt="Photo of Socratic"
            title="Socratic Approach"
            info="Through the art of inquiry, our Socratic method turns questions into stepping stones, guiding students from curiosity to confident conclusions."
          />
          <ESBCard
            src="/Bruner.png"
            alt="Photo of Bruner"
            title="Bruner's Scaffolding Technique"
            info="By building bridges to understanding with Bruner's scaffolding, we elevate students step by step until they stand tall in their independent mastery."
          />
        </Section>
        <Button to="/about">More About ESB</Button>
      </Section>
    </Section>
  );
}
