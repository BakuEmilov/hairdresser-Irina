import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import WorkingDay from "@/app/components/WorkingDay";
import * as fns from "date-fns";

export type Period = {
  start: Date;
  end: Date;
  occupied?: boolean;
};

function generateTimetable(
  startTime: Date,
  endTime: Date,
  intervalMinutes: number
): Period[] {
  const timetable: Period[] = [];

  let currentDate = startTime;

  while (currentDate <= endTime) {
    timetable.push({
      start: currentDate,
      end: fns.addMinutes(currentDate, intervalMinutes),
      occupied: Boolean(Math.random() > 0.5),
    });

    currentDate = fns.addMinutes(currentDate, intervalMinutes);
  }

  return timetable;
}

const generatePeriodsFor = ({
  workingHours = 8,
  days = 14,
  interval = 60,
}: {
  workingHours: number;
  days: number;
  interval: number;
}) => {
  const start = new Date();
  start.setHours(9);
  start.setMinutes(0);
  start.setSeconds(0);

  const startingtimes = Array.from({ length: days }, (_, i) => {
    return fns.addDays(start, i);
  });

  console.log("asdasd", start, fns.addHours(start, workingHours));

  const fullDay = startingtimes.map((start) => {
    return generateTimetable(
      start,
      fns.addHours(start, workingHours),
      interval
    );
  });

  return fullDay;
};

const twoWeeks = generatePeriodsFor({
  days: 14,
  workingHours: 8,
  interval: 60,
});

const WorkingDayCarousel = () => {
  return (
    <Carousel className="contents mx-auto w-max">
      <CarouselContent className="flex items-center">
        {twoWeeks.map((day, index) => {
          return (
            <CarouselItem className="basis-[400px] ">
              <WorkingDay key={index} timetable={day} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0" />
      <CarouselNext className="absolute right-0" />
    </Carousel>
  );
};

export default WorkingDayCarousel;
