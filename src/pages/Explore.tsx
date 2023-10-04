import data from "../../data/exploreData.json";
import ProfileCard from "./Profile/ProfileCard";

function Explore () {
    return (
        <main className="py-24 px-10 xl:px-36">
            <h1 className="text-4xl mb-10">Explore</h1>
            <div className="flex gap-16 lg:justify-between justify-center flex-wrap">
                {data.map((profile, index) => <ProfileCard key={index} profile={profile} />)}
            </div>
        </main>
    )
}

export default Explore;