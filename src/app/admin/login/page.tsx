import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginAdmin = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader className="text-center">
          <CardTitle>Регистрация</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  Имя или название Вашей парикмахерской
                </Label>
                <Input id="name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Введите новый пароль</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Повторите пароль</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Отмена</Button>
          <Link href="/admin/login/hairdresser-details">
            <Button>Дальше</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginAdmin;
