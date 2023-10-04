import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";
import Working from "./Working";
import Testimonial from "./Testimonial";
import { Projects } from "./Projects";
import Experience from "@/pages/Profile/Experience";

// context
import PageDetailContext from "@/context/PageDetailContext";

function Profile() {
  const location = useLocation();
  const currentURL: string = location.pathname;
  const currentUsername: string = currentURL.split("/")[2];

  const { pageDetails } = useContext(PageDetailContext);

  useEffect(() => {
    if (currentUsername) {
      document.title = `${currentUsername} | Open Profile`;
    } else {
      document.title = pageDetails?.profilePage.title || "Open Profile";
    }
  });

  return (
    <div className="flex justify-center my-10 px-10">
      <div className="md:w-[80%] w-full">
        <Header />
        <Bio />
        <Working />
        <Experience />
        <Testimonial />
        <Projects />
      </div>
    </div>
  );
}

export default Profile;
