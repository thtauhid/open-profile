import { createBrowserRouter } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";
import Explore from "@/pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "profile/:username",
    element: <Profile />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "*", 
    element: <NotFound />,
  }
]);
export default router;
