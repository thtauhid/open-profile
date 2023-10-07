import { useEffect, useContext } from "react";

// context
import PageDetailContext from "@/context/PageDetailContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { pageDetails } = useContext(PageDetailContext);

  useEffect(() => {
    document.title =
      pageDetails?.notFoundPage.title || "Page Not Found | Open Profile";
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div className="  sm:text-[12rem] text-[10rem] font-bold px-2 border-none boxshadow flex items-end bg-transparent ">
        404
      </div>
      <div className="text-2xl mb-5 font-semibold">PAGE NOT FOUND</div>
      <Button className="text-xl">
        <Link to={"/"}>Go Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
