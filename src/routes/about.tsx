import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";
import Vision from "../sections/about/Vision";
import Method from "../sections/about/Method";
import ESB from "../sections/about/ESB";
import Conclusion from "../sections/about/Conclusion";
import OurTutors from "../sections/about/OurTutors";
import Reviews from "../sections/about/Reviews";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Section layout="col">
      <Vision />
      <Method />
      <ESB />
      <Conclusion />
      <OurTutors />
      <Reviews />
    </Section>
  );
}
