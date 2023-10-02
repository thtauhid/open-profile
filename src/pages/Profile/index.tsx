// import { useParams } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";

function Profile() {
  return (
    <div className="flex justify-center my-10">
      <div className="w-1/2">
        <Header />
        <Bio />
      </div>
    </div>
  );
}

export default Profile;
