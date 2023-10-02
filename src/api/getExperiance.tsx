import { Button } from "@/components/ui/button";

export default function Experiance() {

    const data = [
        {
            "id":1,
            "title": "Frontend Developer",
            "company": "Google",
            "location": "Mountain View, CA",
            "start_date": "2018-01-01",
            "end_date": "2019-01-01",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sequi accusamus rem autem! Sequi praesentium ut distinctio iure dolore impedit assumenda in molestiae, aperiam veniam, consequuntur qui deserunt repudiandae harum. Inventore nam voluptatem expedita voluptas"
        },
        {
            "id":2,
            "title": "Backend Developer",
            "company": "Facebook",
            "location": "Menlo Park, CA",
            "start_date": "2019-01-01",
            "end_date": "2020-01-01",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sequi accusamus rem autem! Sequi praesentium ut distinctio iure dolore impedit assumenda in molestiae, aperiam veniam, consequuntur qui deserunt repudiandae harum. Inventore nam voluptatem expedita voluptas"
        },
        {
            "id":3,
            "title": "Fullstack Developer",
            "company": "Amazon",
            "location": "Seattle, WA",
            "start_date": "2020-01-01",
            "end_date": "2021-01-01",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sequi accusamus rem autem! Sequi praesentium ut distinctio iure dolore impedit assumenda in molestiae, aperiam veniam, consequuntur qui deserunt repudiandae harum. Inventore nam voluptatem expedita voluptas"
        },
        {
            "id":4,
            "title": "Fullstack Developer",
            "company": "Amazon",
            "location": "Seattle, WA",
            "start_date": "2020-01-01",
            "end_date": "2021-01-01",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sequi accusamus rem autem! Sequi praesentium ut distinctio iure dolore impedit assumenda in molestiae, aperiam veniam, consequuntur qui deserunt repudiandae harum. Inventore nam voluptatem expedita voluptas"
        }
    ];

    return (
        <div className="flex p-[30px] justify-center items-center">
            <div className="p-[10px] w-[100%] border-2 border-black">
                <h1 className="text-2xl font-bold">Experiance</h1>
                <div className="flex p-[30px] flex-wrap justify-center items-center gap-10">
                    {data.map((data) => {
                        return (
                            <div key={data.id} className="border-2 border-black w-[45%] p-2 rounded-md">
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