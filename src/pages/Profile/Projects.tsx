import { getProjects } from "@/api"
import { Button } from "@/components/ui/button";

export const Projects= ()=>{
    const data =getProjects();
    console.log(data);

    return (
        <div className="p-[10px] border-2 border-gray">
                <h1 className="text-3xl p-[10px] pl-[25px] font-bold">Projects</h1>
                <div className="flex p-[10px] pl-[25px] flex-wrap gap-10">
                    {data.map((data) => {
                        return (
                            <div className="border-2 border-black w-[45%] p-2 rounded-md">
                                <div className="p-1">
                                    <h1 className="text-2xl font-bold">{data.title}</h1>
                                    <p className="text-gray-500">{data.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="flex justify-end px-10 py-1">
                    <Button type="submit">More</Button>
                </div>
        </div>
    )  
}