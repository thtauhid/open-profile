// import { useParams } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";
import Working from "./Working";
import Testimonial from "./Testimonial";
import Experiance from "@/pages/Profile/Experiance";

function Profile() {
  return (
    <div className="flex justify-center my-10 px-10">
      <div className="md:w-[80%] w-full">
        <Header />
        <Bio />
        <Working/>
        <Experiance/>
        <Testimonial/>
      </div>
    </div>
  );
}

export default Profile;
