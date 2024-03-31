import AvatarProfile from "@/ui/avatar/AvatarProfile";
import Link from "next/link";

const HeaderClient = () => {
  return (
    <nav className="shadow-md p-2 flex items-center justify-between">
      <Link href="/admin">
        <AvatarProfile />
      </Link>

      <div className="flex gap-x-6"></div>
    </nav>
  );
};

export default HeaderClient;
