// import { useParams } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";
import Working from "./Working";

function Profile() {
  return (
    <div className="flex justify-center my-10 px-2">
      <div className="md:w-[80%] w-full">
        <Header />
        <Bio />
        <Working/>
      </div>
    </div>
  );
}

export default Profile;
