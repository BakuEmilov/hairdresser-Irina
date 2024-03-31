import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import WorkingDay from "@/app/components/WorkingDay";

const WorkingDayCarousel = () => {
  return (
    <div className="mt-20">
      <Carousel className="w-full max-w-[90%] mx-auto">
        <CarouselContent className="flex items-center">
          <CarouselItem className="lg:basis-1/3">
            <WorkingDay
              key="1"
              day={[
                { id: 11, time: "9:00 - 10:00", link: "Записаться" },
                { id: 12, time: "10:00 - 11:00", link: "Записаться" },
                { id: 13, time: "11:00 - 12:00", link: "Занято" },
                { id: 14, time: "13:00 - 14:00", link: "Записаться" },
                { id: 15, time: "15:00 - 16:00", link: "Записаться" },
              ]}
              date="28 марта"
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <WorkingDay
              key="1"
              day={[
                { id: 11, time: "9:00 - 10:00", link: "Записаться" },
                { id: 12, time: "10:00 - 11:00", link: "Записаться" },
                { id: 13, time: "11:00 - 12:00", link: "Занято" },
                { id: 14, time: "13:00 - 14:00", link: "Записаться" },
                { id: 15, time: "15:00 - 16:00", link: "Записаться" },
              ]}
              date="28 марта"
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <WorkingDay
              key="1"
              day={[
                { id: 11, time: "9:00 - 10:00", link: "Записаться" },
                { id: 12, time: "10:00 - 11:00", link: "Записаться" },
                { id: 13, time: "11:00 - 12:00", link: "Занято" },
                { id: 14, time: "13:00 - 14:00", link: "Записаться" },
                { id: 15, time: "15:00 - 16:00", link: "Записаться" },
              ]}
              date="28 марта"
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <WorkingDay
              key="1"
              day={[
                { id: 11, time: "9:00 - 10:00", link: "Записаться" },
                { id: 12, time: "10:00 - 11:00", link: "Записаться" },
                { id: 13, time: "11:00 - 12:00", link: "Занято" },
                { id: 14, time: "13:00 - 14:00", link: "Записаться" },
                { id: 15, time: "15:00 - 16:00", link: "Записаться" },
              ]}
              date="28 марта"
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <WorkingDay
              key="1"
              day={[
                { id: 11, time: "9:00 - 10:00", link: "Записаться" },
                { id: 12, time: "10:00 - 11:00", link: "Записаться" },
                { id: 13, time: "11:00 - 12:00", link: "Занято" },
                { id: 14, time: "13:00 - 14:00", link: "Записаться" },
                { id: 15, time: "15:00 - 16:00", link: "Записаться" },
              ]}
              date="28 марта"
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <WorkingDay
              key="1"
              day={[
                { id: 11, time: "9:00 - 10:00", link: "Записаться" },
                { id: 12, time: "10:00 - 11:00", link: "Записаться" },
                { id: 13, time: "11:00 - 12:00", link: "Занято" },
                { id: 14, time: "13:00 - 14:00", link: "Записаться" },
                { id: 15, time: "15:00 - 16:00", link: "Записаться" },
              ]}
              date="28 марта"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </Carousel>
    </div>
  );
};

export default WorkingDayCarousel;
