import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { useParams } from "react-router-dom";

function Header() {
  const { username } = useParams();

  return (
    <div className="border-2 flex justify-between items-center p-2">
      <div className="flex items-center">
        <Avatar className="w-20 h-20">
          <AvatarImage src={`https://github.com/${username}.png`} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="m-2">
          <h1 className="font-bold text-2xl">John Doe</h1>
          <span>@john.doe</span>
        </div>
        <div className="m-2">
          <p className="bg-green-500 text-white text-sm p-2 rounded-full">
            Available for hire
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <p>
          <AiFillGithub size={30} />
        </p>
        <p>
          <AiFillFacebook size={30} />
        </p>
        <p>
          <RiTwitterXFill size={30} />
        </p>
        <p>
          <AiFillLinkedin size={30} />
        </p>
      </div>
    </div>
  );
}

export default Header;
