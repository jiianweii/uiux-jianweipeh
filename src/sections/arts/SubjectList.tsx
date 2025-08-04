import BasicSubjectCard from "../../components/BasicSubjectCard";

import Section from "../../components/Section";

export default function SubjectList() {
  return (
    <Section layout="col" className="px-20 gap-20 max-[426px]:px-10">
      <BasicSubjectCard
        src="/art/prefProfArt.jpg"
        alt="Prep Professional Class Art"
        title="Prep Professional Class"
        description="Crafts and fine arts aimed at honing motor function skills with a gradual progression in difficulty, to prepare the transitioning to the professional fine arts class."
        duration="1.5hrs"
        ageGroup="6-8 years Old"
        list={[
          "sketching",
          "painting",
          "collages & crafts",
          "basic principles of design",
          "presenting and discussing of ideas",
          "develop understanding of aesthetics",
        ]}
        to="https://api.whatsapp.com/send?phone=6588498106&text=Hi%2C%20I%20am%20interested%20to%20know%20more%20about%20Arts%20by%20Ancourage%20Prep%20Professional%20Class!!"
      />
      <BasicSubjectCard
        src="/art/fineArt.jpg"
        alt="Professional Fine Arts"
        title="Professional Fine Arts"
        description="This course encourages the development and visualization of ideas whilst building technical skills. Whether you’re a beginner or looking to refine your skills, this is a space where creativity flourishes and personal expression is celebrated!"
        duration="2hrs+"
        ageGroup="7-18 Years Old"
        list={[
          "advanced sketching & painting",
          "observation and ideation skills",
          "principles of design",
          "understanding of aesthetics",
          "developing own styles and preferences",
        ]}
        to="https://api.whatsapp.com/send?phone=6588498106&text=Hi%2C%20I%20am%20interested%20to%20know%20more%20about%20Arts%20by%20Ancourage%20Professional%20Fine%20Arts%20Class!"
      />
      <BasicSubjectCard
        src="/art/DSA.jpg"
        alt="DSA, IGCSE, IB Fine Arts"
        title="DSA, IGCSE, IB Fine Arts"
        description="This course is crafted to deepen artistic expertise and enhancing the portfolio through a multifaceted and rigorous approach with the aim of preparing students for further art studies. Alongside hands-on practice, students will develop critical thinking and writing skills, as well as learn how to articulate artistic processes."
        duration="2hrs+"
        ageGroup="10-18 Years Old"
        list={[
          "portoflio help & artwork curation",
          "advanced fine arts",
          "development and presentation of ideas",
          "interview training",
          "process journal guidance",
        ]}
        to="https://api.whatsapp.com/send?phone=6588498106&text=Hi%2C%20I%20am%20interested%20to%20know%20more%20about%20Arts%20by%20Ancourage%20DSA%20IGCSE%20IB%20Fine%20Arts%20Class!"
      />
    </Section>
  );
}
