import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  return (
    <div className="border-2 flex justify-between items-center p-2">
      <div className="flex items-center">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/thtauhid.png" />
          <AvatarFallback>OP</AvatarFallback>
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
        <p>GH</p>
        <p>FB</p>
        <p>X</p>
        <p>IN</p>
      </div>
    </div>
  );
}

export default Header;
