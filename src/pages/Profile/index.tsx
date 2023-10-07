// import { useParams } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";
import Working from "./Working";
import Testimonial from "./Testimonial";
import RecentActivity from "./RecentActivity";

function Profile() {
  return (
    <div className="flex justify-center my-10 px-10">
      <div className="md:w-[80%] w-full">
        <Header />
        <Bio />
        <div className="flex md:flex-row w-full flex-col mb-3">
          <div className=" md:w-1/2 w-full flex  border my-2 mr-3"></div>
          <div className=" md:w-1/2 w-full flex border my-2">
             <RecentActivity/>
          </div>
         
        </div>
        <Working/>
        <Testimonial/>
      </div>
    </div>
  );
}

export default Profile;
