import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarProfile = () => {
  return (
    <div className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1>Baku.</h1>
    </div>
  );
};

export default AvatarProfile;
