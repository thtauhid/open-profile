import { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";

// context
import PageDetailContext from "@/context/PageDetailContext";

function Profile() {
  const { pageDetails } = useContext(PageDetailContext);

  useEffect(() => {
    document.title = pageDetails.profilePage.title;
  });

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
