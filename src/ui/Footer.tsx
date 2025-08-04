import Section from "../components/Section";
import Text from "../components/Text";

export default function Footer() {
  return (
    <Section className="w-full justify-between items-center px-16 py-6 max-[426px]:px-6">
      <img
        src="/ancourage-logo.png"
        className="max-[426px]:w-60 max-[376px]:w-40 max-[321px]:w-30"
      />
      <Text
        size="xxs"
        className="max-[426px]:text-[0.9rem] max-[376px]:text-[0.8rem]"
      >
        &copy; 2025 Ancourage Academy, All Rights Reserved
      </Text>
    </Section>
  );
}
