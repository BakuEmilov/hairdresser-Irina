import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingPage = () => {
  return (
    <div className="">
      <h1 className="font-medium text-[18px] text-center">Настройки</h1>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Имя или название Вашей парикмахерской</Label>
          <Input id="name" value="Baiyr" className="w-[400px]" />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Email</Label>
          <Input
            id="email"
            className="w-[400px]"
            value="eb@gmail.com"
            disabled
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Ваш пароль</Label>
          <Input
            id="password"
            className="w-[400px]"
            value="11022006"
            disabled
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Ваш адрес</Label>
          <div className="grid grid-cols-8 lg:grid-cols-12 gap-x-4 ">
            <Input className="col-span-5 lg:col-span-8" id="address" />
            <Input
              className="col-span-3 lg:col-span-4"
              id="address"
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
