import Section from "../../components/Section";
import HeaderText from "../../components/HeaderText";
import SubjectCard from "../../components/SubjectCard";

export default function Subjects() {
  return (
    <Section
      layout="col"
      className="min-h-[60svh] justify-center items-center gap-16"
    >
      <HeaderText size="xs">Courses We Offer</HeaderText>
      <div className="grid grid-cols-4 gap-4 px-16 max-[1024px]:grid-cols-2 max-[425px]:grid-cols-1">
        <SubjectCard
          icon="majesticons:calculator"
          subject="Mathematics"
          info="From Basic Mathematics, Elementary Math (EMath), Additional Math (AMath) to H1/H2/H3 Math."
        />
        <SubjectCard
          icon="bxs:flask"
          subject="Sciences"
          info="From primary all the way up to JC, we offer both combined sciences and pure sciences. Covering Physics, Chemistry, and Biology."
        />
        <SubjectCard
          icon="fontisto:language"
          subject="Languages"
          info="From Basic English and Chinese, to Higher Level Mother Tongue, GP, Literature, and Creative Writing."
        />
        <SubjectCard
          icon="mdi:art"
          subject="Fine Arts"
          info="From beginner and Intermediate classes to further art studies such as IGCSE, IB, and DSA."
        />
      </div>
    </Section>
  );
}
