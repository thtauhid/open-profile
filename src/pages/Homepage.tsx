import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/${username}`);
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl text-center">Open Profile</h1>
      <span className="text-gray-500 mt-2">Unified opensource profile</span>
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
