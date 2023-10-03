

const WorkingCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <article className="lg:w-[46%]  w-full  flex flex-col p-5  my-2 mx-1 justify-around rounded-lg border-black border-solid border-2">
        <div className="my-2 font-bold text-2xl">{title}</div>
        <div className="font-medium text-md">{content}</div>
    </article>
  );
};

export default WorkingCard;
