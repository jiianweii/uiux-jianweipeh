import Section from "../../components/Section";
import HeaderText from "../../components/HeaderText";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "../../components/Image";

type imagesType = {
  id: number;
  src: string;
  alt: string;
};

export default function StudentsWork() {
  const [steps, setSteps] = useState(3);
  const [currentCount, setCurrentCount] = useState(0);
  const [currentImages, setCurrentImages] = useState<imagesType[]>([]);
  const images = [
    {
      id: 1,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/chicken-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "Vibrant student painting of a chicken portrait in acrylic on yellow background, created at Ancourage Academy Bishan art class",
    },
    {
      id: 2,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/doll-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "Portrait of a young Black girl in white headband with three antique-style dolls, student artwork from Ancourage Academy Bishan",
    },
    {
      id: 3,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/vase-sketch-student-art-ancourage-academy-bishan.jpg",
      alt: "Intricate pencil sketch by a student, featuring expressive lines and creative composition, created as part of an art program at Ancourage Academy in Bishan.",
    },
    {
      id: 4,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/charcoal-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "Charcoal portrait of a girl by student at Ancourage Academy Bishan Art Enrichment Program",
    },
    {
      id: 5,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/sketch-student-art-ancourage-academy-bishan.jpg",
      alt: "Intricate pencil sketch by a student, featuring expressive lines and creative composition, created as part of an art program at Ancourage Academy in Bishan.",
    },
    {
      id: 6,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/sunflower-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "Colorful student painting of sunflowers with expressive brushwork and vibrant tones, created during an art class at Ancourage Academy in Bishan.",
    },
    {
      id: 7,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/flower-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "Watercolor painting of purple lilies in a green glass vase, student artwork from Ancourage Academy Bishan",
    },
    {
      id: 8,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/mermaid-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "A vibrant, student-created portrait of a mermaid, featuring bright colors and whimsical oceanic details, displayed at Ancourage Academy in Bishan.",
    },
    {
      id: 9,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/dining-sketch-student-art-ancourage-academy-bishan.jpg",
      alt: "Pencil still life drawing by student from Ancourage Academy Bishan showcasing wine bottle, apple, knife, and glass on draped surface",
    },
    {
      id: 10,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/strawberry-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "Vibrant acrylic painting of strawberries in a glass cup with reflections and bold colors, created by a student from Ancourage Academy in Bishan.",
    },
    {
      id: 11,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/dining-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "Colourful acrylic still life painting by student at Ancourage Academy Bishan featuring red jug, striped vase with daisies, and fruits on table",
    },
    {
      id: 12,
      src: "https://ancourage.academy/wp-content/uploads/2025/03/dragon-portrait-student-art-ancourage-academy-bishan.jpg",
      alt: "Vibrant dragon head painting under a starry night sky, student artwork from Ancourage Academy Bishan",
    },
  ];

  useEffect(() => {
    setCurrentImages(images.slice(currentCount, currentCount + steps));
  }, [currentCount]);

  return (
    <Section layout="col" className="justify-center px-20">
      <HeaderText
        size="md"
        className="max-[768px]:text-[5rem] max-[426px]:text-[4rem] max-[375px]:text-[3rem]"
      >
        student's works
      </HeaderText>
      <Section className="h-full w-full col-span-7 z-10 py-5">
        <div className="grid grid-cols-3 gap-5 p-2 relative">
          <button
            className="absolute top-[50%] left-0 size-10 ml-[-10px] bg-[var(--teal)] rounded-full transform -translate-y-1/2"
            onClick={() =>
              setCurrentCount((curr) =>
                curr - (steps - 1) < 0 ? images.length - steps : curr - steps
              )
            }
          >
            <Icon
              icon="formkit:arrowleft"
              color="var(--white)"
              className="text-[.8rem] justify-self-center"
            />
          </button>
          <button
            className="absolute top-[50%] right-0 mr-[-10px] size-10 bg-[var(--teal)] rounded-full transform -translate-y-1/2"
            onClick={() =>
              setCurrentCount((curr) => (curr + steps) % images.length)
            }
          >
            <Icon
              icon="formkit:arrowright"
              color="var(--white)"
              className="text-[.8rem] justify-self-center"
            />
          </button>
          {currentImages.map((image) => (
            <Image src={image.src} alt={image.alt} className="size-full" />
          ))}
        </div>
      </Section>
    </Section>
  );
}
