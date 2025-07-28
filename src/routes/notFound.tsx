import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";
import Text from "../components/Text";
import HeaderText from "../components/HeaderText";
import Button from "../components/Button";

export const Route = createFileRoute("/notFound")({
  component: RouteComponent,
});

export default function RouteComponent() {
  return (
    <Section
      className="h-[77svh] justify-center items-center gap-5 text-center"
      layout="col"
    >
      <HeaderText size="sm">Oops! That page can&apos;t be found.</HeaderText>
      <Text size="sm">It looks like nothing was found at this location.</Text>
      <Button to="/">Take Me Home</Button>
    </Section>
  );
}
