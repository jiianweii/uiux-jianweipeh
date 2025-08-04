import { useState } from "react";
import Accordion from "../../components/Accordion";
import Section from "../../components/Section";
import Text from "../../components/Text";

export default function QuestionList() {
  const [isCurrentOpen, setIsCurrentOpen] = useState(-1);
  return (
    <Section className="justify-center">
      <Section layout="col" className="w-[80%] gap-2.5">
        <Accordion
          title="What makes Ancourage different from other tuition centres?"
          isOpen={isCurrentOpen == 0}
          setCurrentIsOpen={() =>
            isCurrentOpen == 0 ? setIsCurrentOpen(-1) : setIsCurrentOpen(0)
          }
        >
          <p>
            Here at Ancourage, we tailor each student’s learning journey,
            focusing on their unique strengths and needs to help them reach
            their full potential. Our innovative ESB methodology goes beyond
            traditional teaching, fostering critical thinking and passion for
            learning. In addition to the standard syllabus, we offer enrichment
            activities such as coding, creative writing, and art, encouraging
            creativity and problem-solving. Ancourage is not just about academic
            excellence— it’s about nurturing well-rounded, innovative
            individuals ready for the future.
          </p>
        </Accordion>
        <Accordion
          title="Who are Ancourage's Teachers?"
          isOpen={isCurrentOpen == 1}
          setCurrentIsOpen={() =>
            isCurrentOpen == 1 ? setIsCurrentOpen(-1) : setIsCurrentOpen(1)
          }
        >
          <p>
            All of our teachers are multicultural and have years of experience
            in educating. We specifically handpicked teachers with the hearts to
            teach children to their best efforts, pushing to inspire and connect
            with students and ensure their best learning experience. Today, we
            have teachers recruited from various reputable universities.
          </p>
        </Accordion>
        <Accordion
          title="How does Ancourage's classes work?"
          isOpen={isCurrentOpen == 2}
          setCurrentIsOpen={() =>
            isCurrentOpen == 2 ? setIsCurrentOpen(-1) : setIsCurrentOpen(2)
          }
        >
          <ol>
            <li>
              <Text size="xxs">Billing Per Lesson:</Text>
            </li>
            <ul>
              <li>
                <Text size="xxs">
                  You are charged based on the number of lessons your child
                  attends each month.
                </Text>
              </li>
              <li>
                <Text size="xxs">Example:</Text>
              </li>
              <ul>
                <li className="square">
                  <Text size="xxs">
                    If there are <strong>4 weeks</strong> in the month and your
                    child attends all 4 lessons (assuming 1 class per week),
                    you'll be billed for 4 lessons.
                  </Text>
                </li>
                <li className="square">
                  <Text size="xxs">
                    If there are <strong>5 weeks</strong>, you'll be billed for
                    5 lessons.
                  </Text>
                </li>
              </ul>
            </ul>
            <li>
              <Text size="xxs">Payment Structure:</Text>
            </li>
            <ul>
              <li>
                <Text size="xxs">
                  Payment is made in blocks of <strong>4 lessons</strong>.
                </Text>
              </li>
              <li>
                <Text size="xxs">
                  If your child attends{" "}
                  <strong>more than 4 lessons in a month</strong> (e.g., 8
                  lessons), you'll be billed for{" "}
                  <strong>2 blocks of 4 lessons</strong>.
                </Text>
              </li>
            </ul>
            <li>
              <Text size="xxs">Missed Classes:</Text>
            </li>
            <ul>
              <li>
                <Text size="xxs">
                  You are only charged for lessons your child{" "}
                  <strong>actually attends</strong>.
                </Text>
              </li>
              <li>
                <Text size="xxs">
                  If your child <strong>misses a lesson</strong> (with a valid
                  reason provided), it will not be included in your bill.
                </Text>
              </li>
            </ul>
          </ol>
          <Text size="sm" className="font-medium">
            Key Benefits:
          </Text>
          <ul>
            <li>
              <Text size="xxs">
                <strong>Fair Billing:</strong> You only pay for the lessons
                attended.
              </Text>
            </li>
            <li>
              <Text size="xxs">
                <strong>Flexibility:</strong> No unnecessary charges for missed
                lessons.
              </Text>
            </li>
          </ul>
        </Accordion>
        <Accordion
          title="What is the average class size at Ancourage?"
          isOpen={isCurrentOpen == 3}
          setCurrentIsOpen={() =>
            isCurrentOpen == 3 ? setIsCurrentOpen(-1) : setIsCurrentOpen(3)
          }
        >
          <p>
            On average, all lessons at Ancourage have a class size of 4-6
            students. We keep to a smaller class size to ensure focus, quality
            and tailoring the lesson experience to maximise all students
            learning.
          </p>
        </Accordion>
      </Section>
    </Section>
  );
}
