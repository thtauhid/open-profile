import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl text-center">Open Profile</h1>
      <span className="text-gray-500 mt-2">Unified opensource profile</span>
      <div className="flex items-center m-10 justify-center">
        <div>
          <div className="space-x-2 flex mb-5">
            <Input type="text" placeholder="Github handle" />
            <Button type="submit">Search</Button>
          </div>
          <hr />
          <p className="mt-5 text-center text-gray-600">
            Enter a github handle to get started
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

// w-full max-w-sm items-center
