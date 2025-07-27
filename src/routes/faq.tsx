import { createFileRoute } from "@tanstack/react-router";
import Summary from "../sections/faq/Summary";
import Section from "../components/Section";
import QuestionList from "../sections/faq/QuestionList";
import ContactUs from "../sections/faq/ContactUs";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Section layout="col" className="gap-10">
      <Summary />
      <QuestionList />
      <ContactUs />
    </Section>
  );
}
