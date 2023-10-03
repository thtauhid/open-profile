import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// context
import PageDetailContext, { PageDetail } from "@/context/PageDetailContext";

function Homepage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const { pageDetails, setPageDetails } = useContext(PageDetailContext);

  useEffect(() => {
    setPageDetails({
      ...pageDetails,
      profilePage: { title: `${username} | Open Profile` } as PageDetail,
    });

    document.title = pageDetails.homePage.title;
  }, [username]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`profile/${username}`);
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl text-center">Open Profile</h1>
      <span className="text-gray-500 mt-2">Unified profile</span>
      <div className="flex items-center m-10 justify-center">
        <div>
          <form onSubmit={handleSubmit} className="space-x-2 flex mb-5">
            <Input
              type="text"
              placeholder="Github handle"
              value={username}
              onChange={handleChange}
            />
            <Button type="submit">Search</Button>
          </form>
          <hr />
          <p className="mt-5 text-center text-gray-600">
            Enter a github handle to get started
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
