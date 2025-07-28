import Button from "../../components/Button";
import Image from "../../components/Image";
import MyGoogleMap from "../../components/Map";
import Section from "../../components/Section";
import Text from "../../components/Text";

export default function Location() {
  return (
    <Section className="h-[80svh] justify-center py-10">
      <Section
        layout="col"
        className="w-[70%] items-center gap-5 max-[426px]:w-[90%]"
      >
        <Text size="md" className="font-medium">
          Where we are located!
        </Text>
        <div className="w-[80%] h-[500px] relative max-[426px]:w-full">
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
  );
}
