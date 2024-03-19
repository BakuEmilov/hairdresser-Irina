import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AlignJustify } from "lucide-react";

const MenuDropdown = () => {
  return (
    <div>
      <Menu>
        <MenuButton>
          <AlignJustify/>
        </MenuButton>
        <MenuList className="bg-white border border-black px-4 py-2 leading-loose">
          <MenuItem className="text-[14px]">Настройки</MenuItem>
          <MenuItem className="text-[14px]">Выйти</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default MenuDropdown;
