import { Button } from "@/components/ui/button";
import { getExperience } from "@/api/index";

export default function Experience() {
  const data = getExperience();
  console.log(data);

  return (
    <div className="flex my-8 justify-center items-center">
      <div className="py-6 px-6 w-[100%] border-2 border-gray">
        <h1 className="text-2xl font-bold mb-4">Experience</h1>
        <div className="flex flex-wrap justify-between items-center gap-y-5">
          {data.map((data) => {
            return (
              <div className="border-2 lg:w-[46%] p-5 my-2 rounded-md">
                <div className="p-1">
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500">{data.company}</p>
                  <div className="text-gray-500">
                    <span>Location : </span>
                    <span>{data.location}</span>
                  </div>
                  <div className="px-1 flex text-gray-500 justify-between">
                    <p>{data.start_date}</p>
                    <p>{data.end_date}</p>
                  </div>
                  <p className="text-gray-500">{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end px-10 py-1">
          <Button type="submit">More</Button>
        </div>
      </div>
    </div>
  );
}
