import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ModalWindow = () => {
  return (
    <div className="">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Выйти</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[340px] rounded-lg lg:w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Вы точно хотите выйти?</AlertDialogTitle>
            <AlertDialogDescription>
              Если выйдите, то ваши клиенты не смогут к вам обратится
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-none">
              Отмена
            </AlertDialogCancel>
            <AlertDialogAction>Выйти</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ModalWindow;
