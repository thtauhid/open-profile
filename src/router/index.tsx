import { createBrowserRouter } from "react-router-dom";
import Homepage from "@/pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);
export default router;
