import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";
import Hero from "../sections/home/Hero";
import Summary from "../sections/home/Summary";
import ESB from "../sections/home/ESB";
import Subjects from "../sections/home/Subjects";
import Tutors from "../sections/home/Tutors";
import StudentsWork from "../sections/home/StudentsWork";
import Workshop from "../sections/home/Workshop";

import Location from "../sections/home/Location";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Section layout="col">
      <Hero />
      <Summary />
      <ESB />
      <Subjects />
      <Tutors />
      <StudentsWork />
      <Workshop />
      <Location />
    </Section>
  );
}
