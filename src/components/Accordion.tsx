import Section from "./Section";
import Text from "./Text";
import { Icon } from "@iconify/react";

type listItem = {
  listTitle: string;
  listArr: string[];
};

interface AccordionProps {
  title: string;
  isOpen: boolean;
  setCurrentIsOpen: () => void;
  description?: string;
  list?: listItem[];
  children?: React.ReactNode;
}

export default function Accordion(props: AccordionProps) {
  return (
    <Section layout="col" className="w-full">
      <Section
        className={`w-full bg-[var(--teal)] px-8 py-4 justify-between !text-[var(--white)] items-center rounded-t-[16px] cursor-pointer ${!props.isOpen ? "rounded-[16px]" : "rounded-t-[16px]"}`}
        onClick={props.setCurrentIsOpen}
      >
        <Text size="sm" className="!text-[var(--white)]">
          {props.title}
        </Text>
        {props.isOpen ? (
          <Icon
            icon="ic:baseline-minus"
            color="var(--white)"
            className="text-[1.5rem]"
          />
        ) : (
          <Icon
            icon="ic:baseline-plus"
            color="var(--white)"
            className="text-[1.5rem]"
          />
        )}
      </Section>
      {props.isOpen && (
        <Section
          layout="col"
          className="w-full border-2 border-[var(--teal)] rounded-b-[16px] px-8 py-4 gap-4"
        >
          {props.children ? (
            props.children
          ) : (
            <>
              <Text size="xs">{props.description}</Text>
              {props.list?.map((item) => {
                return (
                  <div>
                    <Text
                      size="xs"
                      className="font-medium !text-[var(--black)]"
                    >
                      {item.listTitle}
                    </Text>
                    <ul>
                      {item.listArr.map((listItem) => (
                        <li>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </>
          )}
        </Section>
      )}
    </Section>
  );
}
