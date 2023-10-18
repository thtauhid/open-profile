import WorkingCard from "@/components/ui/WorkingCard";
import { Button } from "@/components/ui/button";

const Working = () => {
  return (
    <div className="py-6 my-8 border-2 border-gray">
      <div className="px-6">
        <div className="flex text-2xl w-full justify-start font-bold ">
          Working On
        </div>
        <section className="flex flex-wrap justify-between w-full py-4 ">
          <WorkingCard
            title={"Web Development"}
            content={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"
            }
          />
          <WorkingCard
            title={"Web Development"}
            content={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"
            }
          />
          <WorkingCard
            title={"Web Development"}
            content={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"
            }
          />
          <WorkingCard
            title={"Web Development"}
            content={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"
            }
          />
        </section>
      </div>
      <div className="flex justify-end px-6">
        <Button type="submit">More</Button>
      </div>
    </div>
  );
};

export default Working;
