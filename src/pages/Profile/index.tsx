// import { useParams } from "react-router-dom";
import Header from "./Header";

function Profile() {
  // const { username } = useParams();
  return (
    <div className="flex justify-center my-10">
      <div className="w-1/2">
        <Header />
      </div>
    </div>
  );
}

export default Profile;
