import Section from "../../components/Section";
import TechniqueCard from "../../components/TechniqueCard";

const ESBMethods = [
  {
    title: "Ebbinghaus Memory Theory",
    content: [
      "Rooted in the pioneering research of 19th century psychologist Hermann Ebbinghaus, this theory underscores the natural decline of memory over time.",
      "Here at Ancourage, we transcend conventional teaching by integrating scientifically calibrated intervals of spaced repetition, thereby fortifying long-term retention and enhancing recall.",
      "This ensures that knowledge acquired is not merely fleeting but deeply embedded in the student's cognitive framework.",
    ],
  },
  {
    title: "Socratic Approach",
    content: [
      "Inspired by the philosophical dialogues of Socrates, our pedagogical approach champions intellectual discourse as a means to illuminate understanding.",
      "Through rigorous questioning and dialectical reasoning, we challenge students to explore the depths of their knowledge, fostering a more profound grasp of complex concepts.",
      "This method not only refines analytical thinking, but also empowers students to articulate and defend their ideas with clarity and confidence.",
    ],
  },
  {
    title: "Brurner's Scaffolding Technique",
    content: [
      "Drawing on psychologist Jerome Bruner's work, our scaffolding technique effectively helps learners engage with more complex concepts.",
      "By providing targeted guidance at critical junctures, students can navigate challenges with confidence. As mastery develops, this support is gradually withdrawn, fostering the ability to tackle advanced material autonomously.",
      "This responsive approach ensures each student progresses at their optimal pace, building both competence and confidence in their academic pursuits.",
    ],
  },
];

export default function ESB() {
  return (
    <Section className="h-[60svh] px-20 py-10 bg-[var(--beige)] justify-center items-center gap-8  max-[1024px]:h-auto  max-[1024px]:flex-col">
      {ESBMethods.map((method) => (
        <TechniqueCard {...method} />
      ))}
    </Section>
  );
}
