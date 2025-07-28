import Section from "./Section";

export default function ESBTitle({ title }: { title: string }) {
  const FL = title[0];
  const newTitle = title.substring(1);
  return (
    <Section className="p-4 w-[80%] text-center max-[1500px]:w-[90%]">
      <p className="font-regular text-[#605A52] italic text-[2rem]">
        <span className="font-medium text-[var(--white)] px-2 bg-[#605A52] size-fit rounded-[5px] mr-0.5">
          {FL}
        </span>
        {newTitle}
      </p>
    </Section>
  );
}
