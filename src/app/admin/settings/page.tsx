import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

const weeks = [
  { value: "monday", label: "Понедельник" },
  { value: "tuesday", label: "Вторник" },
  { value: "wednesday", label: "Среда" },
  { value: "thursday", label: "Четверг" },
  { value: "friday", label: "Пятница" },
  { value: "saturday", label: "Суббота" },
  { value: "sunday", label: "Воскресение" },
];

const SettingPage = () => {
  return (
    <div className="ml-8">
      <h1 className="font-medium text-[18px] mt-6 mb-10">Профиль</h1>
      <div className="w-[350px] lg:w-[500px] flex flex-col gap-6">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Имя или название Вашей парикмахерской</Label>
          <Input id="name" defaultValue="Baiyr" />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Email</Label>
          <Input id="email" defaultValue="eb@gmail.com" />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Ваш пароль</Label>
          <Input id="password" defaultValue="11022006" />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Ваш адрес</Label>
          <div className="grid grid-cols-8 lg:grid-cols-12 gap-x-4 ">
            <Input
              className="col-span-5 lg:col-span-8"
              id="address"
              defaultValue="Абдрахманова"
            />
            <Input
              className="col-span-3 lg:col-span-4"
              id="address"
              type="number"
              defaultValue={142}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Выходной день</Label>
          <Select defaultValue="sunday">
            <SelectTrigger id="framework">
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper">
              {weeks.map((week) => (
                <SelectItem key={week.value} value={week.value}>
                  {week.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <InputOTP maxLength={8}>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <span className="text-[14px] font-medium">От</span>
                <InputOTPGroup className="w-[58px] lg:w-full ">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <span className="font-medium">:</span>
                <InputOTPGroup className="w-[58px] lg:w-full ">
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </div>
              <InputOTPSeparator className="mx-0 lg:mx-[30px]"/>
              <div className="flex items-center space-x-2 lg:mt-0">
                <span className="text-[14px] font-medium">До</span>
                <InputOTPGroup className="w-[58px] lg:w-full">
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
                <span className="font-medium">:</span>
                <InputOTPGroup className="w-[58px] lg:w-full">
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </div>
            </div>
          </InputOTP>
        </div>
        <div className="flex justify-end">
          <Button>Изменить</Button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
