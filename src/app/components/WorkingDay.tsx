import * as fns from "date-fns";
import { ru } from "date-fns/locale";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Period } from "./WorkingDayCarousel";
fns.setDefaultOptions({ locale: ru });

interface IProps {
  timetable: Period[];
}

const WorkingDay: FC<IProps> = ({ timetable }) => {
  return (
    <div className="flex items-center justify-center mt-[50px] mb-[70px]">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-lg">
            {fns.isToday(timetable[0].start) ? "Cегодня, " : ""}
            {fns.isTomorrow(timetable[1].start) ? "Завтра, " : ""}
            {fns.formatDate(timetable[0].start, "c MMMM")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <>
              {timetable.map((item, index) => (
                <div key={index} className={item.occupied ? "opacity-50" : ""}>
                  <div className="flex items-center justify-between my-3">
                    <p className="text-sm font-semibold">
                      {fns.format(item.start, "hh:mm")}
                      {" – "}
                      {fns.format(item.end, "hh:mm")}
                    </p>
                    <Link href={`${item.occupied ? "" : "/recording"}`}>
                      <Button
                        className={
                          item.occupied
                            ? " text-black text-xs"
                            : "border-green-600 text-black text-xs"
                        }
                        variant="outline"
                      >
                        {item.occupied ? "Занято" : "Записаться"}
                      </Button>
                    </Link>
                  </div>
                  <div className="w-full h-[1px] bg-[#D9DDDC]" />
                </div>
              ))}
            </>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkingDay;
