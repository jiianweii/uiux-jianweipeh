import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Text from "../../components/Text";

export default function Method() {
  return (
    <Section className="min-h-svh px-4 max-[769px]:flex-col max-[769px]:px-0">
      <Section className="flex-1/2 justify-center items-center">
        <Image
          src="/IMG_0963.jpg"
          alt="Photo of Girl writting on the board"
          className="size-[60%] max-[1024px]:w-[80%] max-[769px]:w-full"
        />
      </Section>
      <Section
        layout="col"
        className="flex-1/2 justify-center max-[769px]:items-center max-[426px]:pb-10"
      >
        <div className="w-[70%]">
          <div>
            <HeaderText size="sm">Our</HeaderText>
            <Section className="items-center ml-10 mt-[-25px] mb-5">
              <div className="w-12 h-1.5 bg-black mr-5"></div>
              <HeaderText size="sm">ESB Method</HeaderText>
            </Section>
          </div>
          <Text size="sm">
            Our ESB methodology combines three powerful, research-backed
            techniques to amplify memory retention, stimulate critical inquiry,
            and elevate cognitive development, ensuring student&apos;s academic
            journey to be both refined and transformative.
          </Text>
        </div>
      </Section>
    </Section>
  );
}
