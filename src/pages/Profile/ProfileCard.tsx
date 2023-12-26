import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Profile {
  name: string;
  initials: string;
  username: string;
  bio: string;
}

function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="h-[450px] max-w-[400px] grow border-2 flex flex-col p-5 gap-5 overflow-hidden pb-5">
      <div className="flex gap-5 items-center">
        <Avatar className="w-20 h-20">
          <AvatarImage src={`https://github.com/${profile.username}.png`} />
          <AvatarFallback>{profile.initials}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold text-2xl">{profile.name}</h1>
          <Link to={`https://github.com/${profile.username}`} target="_blank">
            @{profile.username}
          </Link>
        </div>
      </div>
      <div className="overflow-hidden text-ellipsis">{profile.bio}</div>
      <Button>View</Button>
    </div>
  );
}

export default ProfileCard;
