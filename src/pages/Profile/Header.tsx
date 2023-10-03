import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import {
  getFullName,
  getInitials,
  getSociaLinks,
  isAvailableForHire,
} from "@/api";

function Header() {
  const { username } = useParams();
  const name = getFullName();
  const initials = getInitials();
  const isUserAvailableForHire = isAvailableForHire();
  const sociaLinks = getSociaLinks();

  const facebookLink = sociaLinks.find(({ name }) => name === "facebook");
  const twitterLink = sociaLinks.find(({ name }) => name === "twitter");
  const linkedinLink = sociaLinks.find(({ name }) => name === "linkedin");

  return (
    <div className="border-2 flex justify-between items-center p-2">
      <div className="flex items-center">
        <Avatar className="w-20 h-20">
          <AvatarImage src={`https://github.com/${username}.png`} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="m-2">
          <h1 className="font-bold text-2xl">{name}</h1>
          <Link to={`https://github.com/${username}`} target="_blank">
            @{username}
          </Link>
        </div>
        {isUserAvailableForHire && (
          <div className="m-2">
            <p className="bg-green-500 text-white text-sm p-2 rounded-full">
              Available for hire
            </p>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <Link to={`https://github.com/${username}`} target="_blank">
          <AiFillGithub size={30} />
        </Link>
        {facebookLink && (
          <Link to={facebookLink.url} target="_blank">
            <AiFillFacebook size={30} />
          </Link>
        )}
        {twitterLink && (
          <Link to={twitterLink.url} target="_blank">
            <RiTwitterXFill size={30} />
          </Link>
        )}
        {linkedinLink && (
          <Link to={linkedinLink.url} target="_blank">
            <AiFillLinkedin size={30} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
