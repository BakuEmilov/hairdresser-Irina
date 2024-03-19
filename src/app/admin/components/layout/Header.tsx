import { Bell } from "lucide-react";
import Image from "next/image";
import Profile from "../../../../../public/assets/profile.jpg";
import MenuDropdown from "../menu/Menu";
import ToggleTheme from "../toggle-theme/ToggleTheme";

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between border-b border-black p-2">
        <ToggleTheme />

        <div className="flex gap-x-6">
          <Bell />
          <MenuDropdown />
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-2 border-b border-black">
        <Image
          src={Profile}
          alt="profile"
          className="border border-black w-[80px] h-[80px]"
        />
        <h1 className="dark:text-[red]">Парикмахер Ирина</h1>
      </div>
    </nav>
  );
};

export default Header;
