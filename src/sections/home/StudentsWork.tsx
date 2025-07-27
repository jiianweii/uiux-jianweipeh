import { useRef, useState } from "react";
import Section from "../../components/Section";
import HeaderText from "../../components/HeaderText";
import Image from "../../components/Image";

export default function StudentsWork() {
  const slideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  });

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

  const HandleMouseLeave = () => {
    setIsDragging(false);
    ChangeCarouselIndex();
  };

  const HandleMouseDown = (e) => {
    setIsDragging(true);
    const startX = e.pageX - slideRef.current.offsetLeft;
    const scrollLeft = slideRef.current.scrollLeft;
    mouseCoords.current = { startX, scrollLeft };
  };

  const HandleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slideRef.current.offsetLeft;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    slideRef.current.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  };

  const HandleMouseUp = () => {
    setIsDragging(false);
    ChangeCarouselIndex();
  };

  const ChangeCarouselIndex = () => {
    const container = slideRef.current;
    const itemWidth = container.children[0].offsetWidth + 20; // item width + margin
    const scrollPosition = container.scrollLeft;
    const index = Math.round(scrollPosition / itemWidth);

    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <Section layout="col" className="justify-center px-20">
      <HeaderText size="md">student's works</HeaderText>
      <div className="relative w-full overflow-hidden">
        <div
          ref={slideRef}
          className="flex gap-5 overflow-x-hidden scrollbar-hide cursor-grab select-none"
          onMouseDown={HandleMouseDown}
          onMouseLeave={HandleMouseLeave}
          onMouseUp={HandleMouseUp}
          onMouseMove={HandleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-[calc(33.33%-13.33px)]" // Show 3 images at a time (33.33% width each minus gap)
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
