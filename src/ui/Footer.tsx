import Logo from "../components/Logo";
import Section from "../components/Section";
import Text from "../components/Text";

export default function Footer() {
  return (
    <Section className="w-full justify-between px-16 py-6">
      <Logo />
      <Text size="xxs">&copy; 2025 Ancourage Academy, All Rights Reserved</Text>
    </Section>
  );
}
