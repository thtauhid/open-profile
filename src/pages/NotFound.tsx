import { useEffect, useContext } from "react";

// context
import PageDetailContext from "@/context/PageDetailContext";

const NotFound = () => {
  const { pageDetails } = useContext(PageDetailContext);

  useEffect(() => {
    document.title = pageDetails.notFoundPage.title;
  }, []);

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl text-center">404 - Page Not Found</h1>
    </div>
  );
};

export default NotFound;
