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
import InputOtp from "@/ui/input/InputOtp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const weeks = [
  { value: "monday", label: "Понедельник" },
  { value: "tuesday", label: "Вторник" },
  { value: "wednesday", label: "Среда" },
  { value: "thursday", label: "Четверг" },
  { value: "friday", label: "Пятница" },
  { value: "saturday", label: "Суббота" },
  { value: "sunday", label: "Воскресение" },
];

const HairdresserDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <Card className="w-[350px] lg:w-[500px]">
          <CardHeader className="text-center">
            <CardTitle>О вас</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
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
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Выходной день</Label>
                  <Select>
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
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">График работы</Label>
                  <InputOtp />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/admin/login">
              <Button variant="outline">Отмена</Button>
            </Link>
            <Link href="/admin">
              <Button>Дальше</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HairdresserDetails;
