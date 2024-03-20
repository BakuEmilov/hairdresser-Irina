"use client";

import Modal from "@/ui/modal-window/ModalWindow";
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
          <AlignJustify color="#042A38"/>
        </MenuButton>
        <MenuList className="bg-white shadow-md rounded-lg px-4 py-2 leading-loose">
          <MenuItem className="text-[14px]">
            <Link href="/admin/settings">Настройки</Link>
          </MenuItem>
          <MenuItem onClick={handleLogout} className="text-[14px]">
            Выйти
          </MenuItem>
        </MenuList>
      </Menu>
      <Modal isOpen={openModal} onClose={closeModal} />
    </div>
  );
};

export default MenuDropdown;
