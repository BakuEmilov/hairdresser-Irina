import React from "react";
import Header from "./components/Header";
import WorkingDay from "@/app/components/WorkingDay/WorkingDay";
import About from "./components/About";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div>
      <About />
      <div className="flex justify-center mt-10">
        <Carousel className="w-full max-w-[90%]">
          <CarouselContent className="flex items-center">
            <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2">
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
            <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2">
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
            <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2">
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
            <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2">
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
            <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2">
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
            <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-2">
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
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
