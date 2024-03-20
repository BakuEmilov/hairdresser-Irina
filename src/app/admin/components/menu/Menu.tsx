"use client";

import Modal from "@/ui/modal-window/Modal";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MenuDropdown = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Menu>
        <MenuButton>
          <AlignJustify />
        </MenuButton>
        <MenuList className="bg-white border border-black px-4 py-2 leading-loose">
          <MenuItem className="text-[14px]">
            <Link href="/admin/settings">Настройки</Link>
          </MenuItem>
          <MenuItem onClick={handleLogout} className="text-[14px]">
            Выйти
          </MenuItem>
        </MenuList>
      </Menu>
      <Modal open={openModal} onClose={closeModal} />
    </div>
  );
};

export default MenuDropdown;
