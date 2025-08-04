import AdvancedTutorCard from "../../components/AdvancedTutorCard";
import HeaderText from "../../components/HeaderText";
import Section from "../../components/Section";
import Text from "../../components/Text";

const staffs = [
  {
    src: "/tutors/min.png",
    alt: "image of min (tutor)",
    role: "Ancourage educator",
    name: "Min",
    specialties: "English Language | Literature | History | Mathematics",
    quotes:
      "‘The beautiful thing about learning is that no one can take it away from you.’",
    biography:
      "Beyond Ancourage’s visionary founder, Min is an inspiring mathematics educator, acclaimed for her passion and dedication to helping students excel. With years of experience in tutoring students of diverse backgrounds, she brings both expertise and heart into her work. Min is committed to creating a warm, inclusive, and engaging learning environment where each students’ needs are recognised and nurtured. She believes in building meaningful connections with her students, offering encouragement and support that extends beyond the classroom, a space where learning is both enjoyable and enriching.",
    facts: [
      "A dancer for more than half her life",
      "Likes to solve math questions to calm herself down",
      "An introverted extrovert",
      "Loves the dog breeds Dachshund and Golden Retriever",
      "Lego Enthusiast",
    ],
  },
  {
    src: "/tutors/karl.png",
    alt: "image of karl (tutor)",
    role: "Ancourage educator",
    name: "Karl",
    specialties:
      "English Language | Mathematics | Science | Physics | Chemistry | Biology",
    quotes: "‘Every Student Matters’",
    biography:
      "Karl is a seasoned science educator with years of experience who brings a casual yet effective approach to the classroom. Emphasising topic-based learning, he makes complex concepts accessible and engaging for all students. Known for his friendly demeanor, Karl fosters strong connections with his students, creating a comfortable environment where curiosity thrives. His passion for science and commitment to student success inspire young minds to explore and discover the wonders of the world around them.",
    facts: [
      "His favorite Pokemon is Oddish",
      "Favorite science: Chemistry",
      "Plays the guitar",
      "Was in a milk powder commercial when he was 3 years old",
      "Wanted to be a doctor but lost interest",
      "Favorite animal: fish",
    ],
  },
  {
    src: "/tutors/angie.png",
    alt: "image of angie (tutor)",
    role: "Ancourage educator",
    name: "Angie",
    specialties: "Fine Arts | Digital Arts | Arts | Crafts",
    quotes:
      "‘It’s not just the lessons that shape children but the care and dedication a teacher puts into them. When a teacher fosters curiosity, patience and understanding, learning becomes a journey children will cherish forever.’",
    biography:
      "Angie is an inspiring educator with a rich background in arts studies, giving them a profound understanding of what constitutes an exceptional learning experience. Having taught students from a variety of backgrounds, they bring a wealth of experience and cultural insight to the classroom. She is dedicated to fostering a supportive and inclusive environment, taking the time to understand each student’s unique needs and perspectives. Her passion for teaching and commitment to student growth create a dynamic atmosphere where creativity and learning thrive.",
    facts: [
      "Favourite pastime: Playing Tetris while listening to horror video essays",
      "Favourite mediums: graphite pencils because they allow precise control and intricate details while providing a dynamic range of expression",
      "Misses playing the violin",
      "Speaks 4 languages fluently",
      "Literature nerd",
    ],
  },
];

export default function OurTutors() {
  return (
    <Section layout="col" className="min-h-svh px-20 py-10 gap-y-10">
      <div>
        <HeaderText size="xs">Get to know our educators</HeaderText>
        <Text size="xs">
          Meet our dedicated team of educators, each passionate about inspiring
          and nurturing the unique talents of every student.
        </Text>
      </div>
      <Section layout="col" className="gap-y-10">
        {staffs.map((staff) => (
          <AdvancedTutorCard {...staff} />
        ))}
      </Section>
    </Section>
  );
}
