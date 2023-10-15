import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const TestimonialCard = ({
  imgUrl,
  name,
  title,
  content,
}: {
  imgUrl: string;
  name: string;
  title: string;
  content: string;
}) => {
  return (
    <article className=" border-2 lg:w-[46%] w-full p-2 flex items-center px-2 rounded-md mb-4">
      <div className="w-max h-full flex items-center ">
        <Avatar className=" h-32 w-32">
          <AvatarImage src={imgUrl} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </div>
      <section className="flex w-full h-full p-2 justify-around flex-col pl-8">
        <div className="text-lg font-semibold ">{content}</div>
        <div className="flex flex-col t">
          <span className="text-lg text-gray-500 font-extrabold ">{name}</span>
          <span className="text-lg text-gray-500 font-normal ">{title}</span>
        </div>
      </section>
    </article>
  );
};

export default TestimonialCard;
