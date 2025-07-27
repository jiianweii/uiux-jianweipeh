import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";
import Trial from "../sections/classes/Trial";
import ESB from "../sections/classes/ESB";
import Subjects from "../sections/classes/Subjects";

export const Route = createFileRoute("/classes")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Section layout="col" className="gap-10">
      <Trial />
      <ESB />
      <Subjects />
    </Section>
  );
}
