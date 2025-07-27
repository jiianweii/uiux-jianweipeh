import BasicESBCard from "../../components/BasicESBCard";
import HeaderText from "../../components/HeaderText";
import Section from "../../components/Section";

export default function ESB() {
  return (
    <Section
      layout="col"
      className="bg-[var(--beige)] justify-center items-center min-h-svh"
    >
      <Section layout="col" className="w-[70%] gap-4">
        <HeaderText size="sm">ESB classflow</HeaderText>
        <Section layout="col" className="justify-center items-center gap-5">
          <BasicESBCard
            content="We begin each lesson by sparking lively discussions using the Socratic
                        method, encouraging students to question, explore, and delve into the
                        topic of the day. This fosters curiosity and sets the stage for deeper
                        understanding."
          >
            Beginning of lesson: (S)ocratic method -{" "}
            <strong>IGNITE WITH INQUIRY</strong>
          </BasicESBCard>
          <BasicESBCard content="As the lesson progresses, we layer support using Bruner’s scaffolding, guiding students through complex concepts with just the right balance of challenge and assistance. This step-by-step approach ensures a solid foundation of knowledge.">
            Throughout the lesson: (B)runer’s scaffolding –{" "}
            <strong>BUILD WITH BRILLIANCE</strong>
          </BasicESBCard>
          <BasicESBCard content="We conclude the lesson by reinforcing learning through the lens of Ebbinghaus’ memory theory. Students recap key points, locking in what they have learned and fortifying their memory for long-term retention, defeating the forgetting curve.">
            End of lesson: (E)bbinghaus theory – <strong>LOCK IT IN</strong>
          </BasicESBCard>
        </Section>
      </Section>
    </Section>
  );
}
