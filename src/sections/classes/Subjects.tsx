import { useState } from "react";
import Accordion from "../../components/Accordion";
import HeaderText from "../../components/HeaderText";
import Section from "../../components/Section";

const courses = [
  {
    title: "Languages Classes",
    description:
      "Our language classes are designed to enhance fluency, comprehension, and communication skills. Lessons include vocabulary building, grammar practice, and engaging activities like discussions and writing exercises. By blending foundational learning with real-world applications, students improve their language proficiency and gain the confidence to express themselves effectively, both academically and beyond.",
    list: [
      {
        listTitle: "Levels...",
        listArr: [
          "Primary School",
          "Specialised PSLE",
          "Secondary School",
          "Specialised Ordinary O Levels",
          "IGCSE",
          "SAT",
          "TOEFL",
          "IELTS",
          "Adult Classes",
        ],
      },
      {
        listTitle: "Subjects...",
        listArr: [
          "Basic English",
          "Advanced English",
          "Chinese",
          "Higher Chinese",
        ],
      },
    ],
  },
  {
    title: "Math Classes",
    description:
      "Our math classes focus on building strong problem-solving skills and a solid understanding of key concepts across all topics. Lessons are structured to simplify complex ideas, with step-by-step guidance and plenty of practice questions tailored to different levels of difficulty. By combining focused teaching with exam-style problem-solving, students gain confidence and the tools needed to excel in both classwork and examinations.",
    list: [
      {
        listTitle: "Levels...",
        listArr: [
          "Primary School",
          "Specialised PSLE",
          "Secondary School",
          "Specialised Ordinary O Levels",
          "Junior College (JC)",
          "International Baccalaureate (IB)",
          "Integrated Programme (IP)",
          "IGCSE",
          "SAT",
        ],
      },
      {
        listTitle: "Subjects...",
        listArr: [
          "Mathematics",
          "Elementary Mathematics (EMath)",
          "Advanced Mathematics (AMath)",
          "Statistics",
          "Finance",
          "Economics",
        ],
      },
    ],
  },
  {
    title: "Science Classes",
    description:
      "Our science class provides structured, engaging lessons that cover key syllabus topics in Biology, Chemistry, and Physics. Each session includes clear teaching and targeted practice with past-year questions to reinforce understanding and boost exam readiness. Students can expect a supportive, results-focused environment designed to build both confidence and academic success.",
    list: [
      {
        listTitle: "Levels...",
        listArr: [
          "Primary School",
          "Specialised PSLE",
          "Secondary School",
          "Specialised Ordinary O Levels",
          "Junior College (JC)",
          "International Baccalaureate (IB)",
          "Integrated Programme (IP)",
          "IGCSE",
        ],
      },
      {
        listTitle: "Subjects...",
        listArr: [
          "Physics",
          "Chemistry",
          "Biology",
          "Combined Sciences",
          "Pure Sciences",
        ],
      },
    ],
  },
  {
    title: "Art Classes",
    description:
      "Unleash creativity at our art classes for ages 5 to 18! From foundational motor skills for young learners to advanced techniques for teens, our program covers drawing, painting, and mixed media. Students develop critical skills like conceptual thinking and portfolio building, with personalized DSA guidance for academic or professional goals. A supportive space to inspire and empower every young artist!",
    list: [
      {
        listTitle: "Levels...",
        listArr: [
          "Crafty Corner (mini-makers, tiny tinkerers) for ages 3-5",
          "Prep Pro (Starter studios, creative core, pro art foundations) for ages 6-8",
          "Professional Fine Arts Class for ages 7-18",
          "Fine Arts for IGCSE, IB, DSA for ages 10-18",
        ],
      },
      {
        listTitle: "Subjects...",
        listArr: [
          "Arts and crafts, honing motor functions",
          "Observational Art",
          "Conceptual Art",
          "Dry Media: Graphite, colour pencils, soft pastel, charcoal",
          "Wet Media: Watercolour, acrylics, gouache, oil painting",
          "Portfolio Refining",
          "Art Analysis",
          "Art Interview and Test preparation",
        ],
      },
    ],
  },
];

export default function Subjects() {
  const [isOpenForItem, setIsOpenForItem] = useState(0);
  return (
    <Section layout="col" className="items-center min-h-svh">
      <Section layout="col" className="w-[70%] gap-4">
        <HeaderText size="sm">Class offerings</HeaderText>
        {courses.map((course, key) => (
          <Accordion
            {...course}
            isOpen={key === isOpenForItem}
            setCurrentIsOpen={() =>
              key === isOpenForItem
                ? setIsOpenForItem(-1)
                : setIsOpenForItem(key)
            }
          />
        ))}
      </Section>
    </Section>
  );
}
