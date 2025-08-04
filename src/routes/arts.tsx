import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";
import Summary from "../sections/arts/Summary";
import SubjectList from "../sections/arts/SubjectList";

export const Route = createFileRoute("/arts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Section layout="col">
      <Summary />
      <SubjectList />
    </Section>
  );
}
