import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";

import ConnectWithUs from "../sections/contact/ConnectWithUs";

import OperatingHours from "../sections/contact/OperatingHours";
import Location from "../sections/contact/Location";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
  beforeLoad: () => ({
    title: "Contact Us - My Website",
  }),
});

function RouteComponent() {
  return (
    <Section layout="col">
      <ConnectWithUs />
      <Location />
      <OperatingHours />
    </Section>
  );
}
