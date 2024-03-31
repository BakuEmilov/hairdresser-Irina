import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";

interface IProps {
  day: {
    id: number;
    time: string;
    link: string;
  }[];
  date: string;
}

const WorkingDay: FC<IProps> = ({ day, date }) => {
  return (
    <div className="flex items-center justify-center mt-[50px] mb-[70px]">
      <Card className="w-[300px]">
        <CardHeader className="text-center">
          <CardTitle className="text-lg">График рабочего дня</CardTitle>
          <h2>Сегодня {date}</h2>
        </CardHeader>
        <CardContent>
          <form>
            <div>
              {day.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between my-3">
                    <p className="text-sm font-medium">{item.time}</p>
                    <Link
                      href={`${item.link === "Занято" ? "" : "/recording"}`}
                    >
                      <Button
                        className={
                          item.link === "Занято"
                            ? "bg-red-500 text-white text-xs"
                            : "bg-green-500 text-white text-xs"
                        }
                        variant="outline"
                      >
                        {item.link}
                      </Button>
                    </Link>
                  </div>
                  <div className="w-full h-[1px] bg-[#D9DDDC]" />
                </div>
              ))}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkingDay;
