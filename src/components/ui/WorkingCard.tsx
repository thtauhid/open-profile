const WorkingCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <article className="lg:w-[46%]  w-full  flex flex-col p-5  my-2  justify-around rounded-lg border-solid border-2">
      <div className="font-bold text-xl">{title}</div>
      <div className=" text-gray-500 text-md">{content}</div>
    </article>
  );
};

export default WorkingCard;
