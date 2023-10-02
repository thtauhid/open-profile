// import { useParams } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";
import TopRepos from "./TopRepos";


function Profile() {
  // const { username } = useParams();
  return (
    <div className="flex justify-center my-10">
      <div className="w-1/2">
        <Header />
        <Bio />
        <TopRepos />
      </div>
    </div>
  );
}

export default Profile;
