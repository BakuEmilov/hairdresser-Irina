import MenuDropdown from "../menu/Menu";
import ModalWindow from "@/ui/modal/ModalWindow";
import AvatarProfile from "@/ui/avatar/AvatarProfile";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="shadow-md p-2 flex items-center justify-between">
      <Link href="/admin">
        <AvatarProfile />
      </Link>

      <div className="flex gap-x-6">
        <ModalWindow />

        <MenuDropdown className="mt-[9px]" />
      </div>
    </nav>
  );
};

export default Header;
