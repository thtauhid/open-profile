import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bio from "./Bio";
import Header from "./Header";
import Working from "./Working";
import Testimonial from "./Testimonial";
import { Projects } from "./Projects";
import TopRepo from "./TopRepo";
import Experience from "@/pages/Profile/Experience";

// context
import PageDetailContext from "@/context/PageDetailContext";
import RecentActivity from "./RecentActivity";

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
        <div className="flex md:flex-row w-full flex-col mb-3">
          <div className=" md:w-1/2 w-full flex  border my-2 mr-3">
            <TopRepo />
          </div>
          <div className=" md:w-1/2 w-full flex border my-2">
             <RecentActivity/>
          </div>
        </div>
        
        <Working />
        <Experience />
        <Testimonial />
        <Projects />
    
  
      </div>
    </div>
  );
}

export default Profile;
