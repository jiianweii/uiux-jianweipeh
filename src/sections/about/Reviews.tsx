import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ReviewCard from "../../components/ReviewCard";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Typography from "../../components/Typography";
import { Icon } from "@iconify/react";

type ReviewType = {
  name: string;
  ratings: number;
  content: string;
  url: string;
};

const tempReviews = [
  {
    name: "Justin Chuang",
    ratings: 5,
    content:
      "Teacher Angie has had a profoundly positive impact on my children. Her dedication and passion for education have played a crucial role in their growth and development. She continuously provides them with creative insights, fostering their curiosity and love for learning. Beyond just academic support, she offers guidance that helps them build confidence and critical thinking skills. Her encouragement and personalized approach ensure that each child feels valued and motivated to reach their full potential. We are truly grateful for her unwavering commitment and the positive influence she has on their journey.",
    url: "https://maps.app.goo.gl/bNfTi3zjGQnW62ed7",
  },
  {
    name: "Ali Arshy",
    ratings: 5,
    content:
      "Miss Angie has been such a wonderful art teacher for my kid. From the very beginning, we noticed how great she is at connecting with kids—she really sees each student for who they are and what they’re naturally good at. It’s amazing how she can tell which kids are drawn to colors, details, or strong imagination, and she knows just how to encourage them. She’s also really great at teaching the basics of painting in a way that’s fun and easy to understand. Things like how to mix colors, use different brush strokes, and create texture are all introduced through simple activities that the kids enjoy, but they’re actually learning real skills along the way. My kid has become much more confident with a paintbrush and looks forward to every class.",
    url: "https://maps.app.goo.gl/EnncUuVRcxL1UWPP6",
  },
  {
    name: "Jared Khuan",
    ratings: 5,
    content:
      "My daughter has been going to Ancourage Academy for 3 months now and has been showing steady improvement in arts from Teacher Angie. Teacher Angie is great with kids despite my daughter being playful and chaotic, and she looks forward to her classes every week! Under Teacher Angie’s guidance my child has been becoming more confident in her art skills and is always excited to show me her work. For anyone looking for art classes I would definitely recommend Ancourage Academy!",
    url: "https://maps.app.goo.gl/V19L8QE3k5yUWpd86",
  },
  {
    name: "Minhui Tan",
    ratings: 5,
    content:
      "Ancourage Academy have always believed that every student deserves a structured, thoughtful, and caring guidance. Over the years, the team has worked hard to create a learning environment where students don't just aim for better grades — they build confidence, develop critical thinking skills, and rediscover they joy of learning. Ancourage's teaching approach is carefully crafted: using proven methodologies, maintaining small class sizes for personalised attention, and focusing on helping students truly understand and apply concepts rather than blindly memorising. Ancourage Academy is more than just a tuition centre — it is a community that nurtures potential, celebrates progress, and believes in every student's journey!",
    url: "https://maps.app.goo.gl/QPpJAU3oyUFbPnr79",
  },
  {
    name: "Fiona Tay",
    ratings: 5,
    content:
      "My 5yo has been attending art classes with Teacher Angie the past month. He enjoys and looks forward to her classes! Teacher Angie is wonderful at keeping the atmosphere warm and encouraging, for kids to express themselves. We are amazed by our boy’s art work, and grateful for the patient guidance, exposure to art techniques, and more importantly his growing confidence!",
    url: "https://maps.app.goo.gl/Xi5gSUuDPZ39ETR67",
  },
  {
    name: "Archer Yu",
    ratings: 5,
    content:
      "I cannot express enough gratitude for the incredible experience my kids had at Ancourage Tuition Center, particularly in their math classes with Teacher Min. From the moment we enrolled them, we knew we had made the right choice for their education.",
    url: "https://maps.app.goo.gl/FZ2VaW1ij4CGmeY89",
  },
];

export default function Reviews() {
  const [steps, setSteps] = useState(3);
  const [currentCount, setCurrentCount] = useState(0);
  const [currentReviews, setCurrentReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    function setReviewsBySteps() {
      const width = window.innerWidth;
      if (width <= 769) {
        setSteps(2);
      }
      if (width <= 429) {
        setSteps(1);
      }
      if (width > 769) {
        setSteps(3);
      }
      setCurrentReviews(tempReviews.slice(currentCount, currentCount + steps));
    }

    window.addEventListener("resize", setReviewsBySteps);

    setReviewsBySteps();

    return () => window.removeEventListener("resize", setReviewsBySteps);
  }, [currentCount, window.innerWidth, steps]);

  return (
    <Section
      layout="col"
      className="h-[60svh] max-[769px]:h-[50svh] justify-between bg-[var(--beige)] px-10 pt-20 relative overflow-hidden"
    >
      <div className="grid grid-cols-9 max-[429px]:grid-rows-2">
        <Section
          layout="col"
          className="w-full items-center justify-center col-span-2 max-[429px]:row-span-1 max-[429px]:col-span-9"
        >
          <Section
            layout="col"
            className="gap-y-4 z-10 max-[429px]:flex-row max-[429px]:items-center"
          >
            <Section layout="col" className="gap-y-4">
              <Text size="md">Ancourage Reviews</Text>
              <Section>
                {[...Array(5)].map(() => (
                  <Icon
                    icon="material-symbols:star"
                    color="var(--teal)"
                    className="text-[2rem]"
                  />
                ))}
              </Section>
              <Section className="gap-x-5">
                <Text size="xs">5.0 Ratings</Text>
                <Text size="xs">38 Reviews</Text>
              </Section>
            </Section>
            <Button
              target="_blank"
              to="https://www.google.com/maps/place/Ancourage+Academy/@1.3456678,103.8519498,16z/data=!3m1!5s0x31da176d351fb82b:0xcdd24792cd85afe7!4m8!3m7!1s0x31da1764d30519f1:0x2538b941eced38dc!8m2!3d1.3456624!4d103.8545247!9m1!1b1!16s%2Fg%2F11vwhtcn87?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
              className="max-[321px]:text-center"
            >
              View All Reviews
            </Button>
          </Section>
        </Section>
        <Section className="h-full w-full col-span-7 z-10 max-[429px]:row-span-1 max-[429px]:col-span-9">
          <div className="grid grid-cols-3 max-[769px]:grid-cols-2 max-[429px]:grid-cols-1 gap-5 p-2 relative">
            <button
              className="absolute top-[50%] left-0 size-10 ml-[-10px] bg-[var(--teal)] rounded-full transform -translate-y-1/2"
              onClick={() =>
                setCurrentCount((curr) =>
                  curr - (steps - 1) <= 0
                    ? tempReviews.length - steps
                    : curr - steps
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
                setCurrentCount((curr) => (curr + steps) % tempReviews.length)
              }
            >
              <Icon
                icon="formkit:arrowright"
                color="var(--white)"
                className="text-[.8rem] justify-self-center"
              />
            </button>
            {currentReviews.map((review) => (
              <ReviewCard {...review} />
            ))}
          </div>
        </Section>
      </div>

      <Typography className="absolute bottom-[-15%] right-10 max-[429px]:text-[6rem] max-[376px]:text-[5rem] max-[321px]:text-[4rem] max-[321px]:bottom-[-3%] max-[429px]:bottom-[-5%]">
        #ancouragelove
      </Typography>
    </Section>
  );
}
