import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";

const Testimonial = () => {
  return (
    <div className="border-2 flex justify-between items-center flex-col p-3">
      <div className="flex w-full justify-start my-2 text-[2rem] font-bold pl-4">
        Testimonials
      </div>
      <section className="flex flex-wrap justify-around">
        <TestimonialCard
          imgUrl="https://github.com/thtauhid.png"
          name="John Doe"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Aut hic sequi accusamus rem autem! "
          title="Ceo of IIM"
        />
        <TestimonialCard
          imgUrl="https://github.com/thtauhid.png"
          name="John Doe"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Aut hic sequi accusamus rem autem! "
          title="Ceo of IIM"
        />
        <TestimonialCard
          imgUrl="https://github.com/thtauhid.png"
          name="John Doe"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Aut hic sequi accusamus rem aute"
          title="Ceo of IIM"
        />
        <TestimonialCard
          imgUrl="https://github.com/thtauhid.png"
          name="John Doe"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Aut hic sequi accusamus rem at"
          title="Ceo of IIM"
        />
      </section>
      <div className="my-4 flex w-full justify-end pr-5">
        <Button variant={"default"}>More</Button>
      </div>
    </div>
  );
};

export default Testimonial;
