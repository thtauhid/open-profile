// import { useParams } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";
import Testimonial from "./Testimonial";

function Profile() {
  return (
    <div className="flex justify-center my-10 px-10">
      <div className="md:w-[80%] w-full">
        <Header />
        <Bio />
        <Testimonial/>
      </div>
    </div>
  );
}

export default Profile;
