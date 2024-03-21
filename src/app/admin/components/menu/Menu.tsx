import { AlignJustify } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type IMenuDropdown = {
  className?: string;
};

const MenuDropdown = ({ className }: IMenuDropdown) => {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignJustify />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white mr-2">
          <DropdownMenuItem>
            <Link href="/admin/settings" className="font-medium">
              Профиль
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuDropdown;
