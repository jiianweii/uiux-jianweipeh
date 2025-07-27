import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";
import Hero from "../sections/home/Hero";
import Summary from "../sections/home/Summary";
import ESB from "../sections/home/ESB";
import Subjects from "../sections/home/Subjects";
import Tutors from "../sections/home/Tutors";
import StudentsWork from "../sections/home/StudentsWork";
import Workshop from "../sections/home/Workshop";

import MyGoogleMap from "../components/Map";
import Button from "../components/Button";
import Image from "../components/Image";
import Text from "../components/Text";

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
      <Section className="h-[80svh] justify-center py-10">
        <Section layout="col" className="w-[70%] items-center gap-5">
          <Text size="md" className="font-medium">
            Where we are located!
          </Text>
          <div className="w-[80%] h-[500px] relative">
            <MyGoogleMap />
          </div>
          <Button to="https://maps.app.goo.gl/Yc8JTC8mBS7fMcP46">
            Google Maps
          </Button>
          <Image
            src="/ancouragebymin.png"
            alt="Designed brand name of ancouragebymin"
          />
        </Section>
      </Section>
    </Section>
  );
}
