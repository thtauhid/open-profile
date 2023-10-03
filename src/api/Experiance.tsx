import { Button } from "@/components/ui/button";
import {getExperience} from '@/api/index'

export default function Experiance() {

    const data =getExperience();
    console.log(data);

    return (
        <div className="flex  justify-center items-center">
            <div className="p-[10px] w-[100%] border-2 border-gray border-t-0">
                <h1 className="text-3xl p-[10px] pl-[25px] font-bold">Experiance</h1>
                <div className="flex py-[20px] flex-wrap justify-center items-center gap-10">
                    {data.map((data) => {
                        return (
                            <div className="border-2 border-black w-[45%] p-2 rounded-md">
                                <div className="p-1">
                                    <h1 className="text-2xl font-bold">{data.title}</h1>
                                    <p className="text-gray-500">{data.company}</p>
                                    <div className="">
                                    <span>Location : </span>
                                    <span>{data.location}</span>
                                    </div>
                                    <div className="px-1 flex justify-between">
                                        <p>{data.start_date}</p>
                                        <p>{data.end_date}</p>
                                    </div>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="flex justify-end px-10 py-1">
                    <Button type="submit">More</Button>
                </div>
            </div>
        </div>
    )
}