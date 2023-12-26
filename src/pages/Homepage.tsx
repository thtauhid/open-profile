import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// context
import PageDetailContext, { PageDetail } from "@/context/PageDetailContext";

function Homepage() {
  const navigate = useNavigate();

  // State to store entered username
  const [username, setUsername] = useState("");
  // Initialize the state with usernames from localStorage
  const [storedUsernames, setStoredUsernames] = useState<string[]>(() => {
    const storedUsernamesJSON = localStorage.getItem("Usernames");
    return JSON.parse(storedUsernamesJSON || "[]");
  });

  const { pageDetails, setPageDetails } = useContext(PageDetailContext);

  useEffect(() => {
    if (pageDetails && setPageDetails) {
      setPageDetails({
        ...pageDetails,
        profilePage: { title: `${username} | Open Profile` } as PageDetail,
      });
    }

    document.title = pageDetails?.homePage.title || "Open Profile";
  }, [username]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const githubUrlRegex = /https:\/\/github\.com\/([a-zA-Z0-9_-]+)/;
    const match = input.match(githubUrlRegex);

    if (match) {
      const usernameFromUrl = match[1];
      setUsername(usernameFromUrl);
    } else {
      setUsername(input);
    }
  };

  //Handle the search functionality and add username to Localstorage if it is a valid name/string
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username.trim()) {
      return;
    }

    // Add the new username to the beginning of the array
    const updatedUsernames = [username, ...storedUsernames.slice(0, 3)];

    // Update the state with the new username
    setStoredUsernames(updatedUsernames);

    // Save the updated usernames to localStorage
    localStorage.setItem("Usernames", JSON.stringify(updatedUsernames));

    navigate(`profile/${username}`);
  };

  // Used to navigate a a user profile which is entered
  const handleButtonClick = (clickedUsername: string) => {
    // Set the clicked username in the input field
    navigate(`profile/${clickedUsername}`);
  };

  const initialUsernames = storedUsernames.slice(0, 4);

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
          <div className="flex mt-[-13px] mb-2">
            {initialUsernames.map((user) => (
              <button
                onClick={() => handleButtonClick(user)}
                className="text-[12px] text-gray-600 border-[1px] border-gray-600 hover:bg-gray-300 p-1 mb-1 mr-2 rounded-sm text-center"
                type="button"
                key={user}
              >
                {user}
              </button>
            ))}
          </div>
          <hr />
          <p className="mt-5 text-center text-gray-600">
            Enter a GitHub handle to get started
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
