import { Bell } from "lucide-react";
import Image from "next/image";
import Profile from "../../../../../public/assets/profile.jpg";
import MenuDropdown from "../menu/Menu";
import ToggleTheme from "../toggle-theme/ToggleTheme";
import Link from "next/link";

const Header = () => {
  return (
    <nav className=" bg-[#E2E2E2] shadow-md">
      <div className="flex justify-between p-2 ">
        <ToggleTheme />

        <div className="flex gap-x-6">
          <Link href="/admin/orders">
            <Bell color="#042A38"/>
          </Link>
          <MenuDropdown />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg m-4 py-4">
        <Image
          src={Profile}
          alt="profile"
          className="shadow-md rounded-lg w-[80px] h-[80px]"
        />
        <h1 className="dark:text-[red]">Парикмахер Ирина</h1>
      </div>
    </nav>
  );
};

export default Header;
