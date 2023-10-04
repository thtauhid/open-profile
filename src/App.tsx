import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// context
import PageDetailContext from "./context/PageDetailContext";

function App() {
  const [pageDetails, setPageDetails] = useState({
    homePage: { title: "Open Profile" },
    profilePage: { title: "Open Profile" },
    notFoundPage: { title: "Page Not Found | Open Profile" },
  });

  return (
    <PageDetailContext.Provider value={{ pageDetails, setPageDetails }}>
      <RouterProvider router={router} />
    </PageDetailContext.Provider>
  );
}

export default App;
