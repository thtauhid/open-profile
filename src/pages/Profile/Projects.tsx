import { getProjects } from "@/api";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const data = getProjects();
  console.log(data);

  return (
    <div className="my-8 border-2 border-gray ">
      <h1 className="text-2xl px-6 mb-4 mt-6 font-bold">Projects</h1>
      <div className="flex flex-wrap px-6 justify-between items-center gap-10">
        {data.map((data) => {
          return (
            <div className="border-2 lg:w-[45%] p-2 m-2 lg:m-0 rounded-md">
              <div className="p-2">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end px-10 py-6">
        <Button type="submit">More</Button>
      </div>
    </div>
  );
};
