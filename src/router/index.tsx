import { createBrowserRouter } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";

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
    path: "*", 
    element: <NotFound />,
  }
]);
export default router;
