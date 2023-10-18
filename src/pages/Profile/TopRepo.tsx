import { getTopRepos } from "@/api";
import { Button } from "@/components/ui/button";

const TopRepo = () => {
  const data = getTopRepos();
  console.log(data);

  return (
    <div className="py-6 my-8 border-2 border-gray">
      <h1 className="text-2xl px-6 font-bold">Top Repos</h1>
      <div className="lg:flex py-6 px-6 flex-col gap-10">
        {data.map((data) => {
          return (
            <div className="border-2 lg:w-full p-2 m-2 lg:m-0 rounded-md">
              <div className="p-1">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500">{data.description}</p>
                <p className="text-gray-500">{data.url}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end px-6">
        <Button type="submit">More</Button>
      </div>
    </div>
  );
};

export default TopRepo;
