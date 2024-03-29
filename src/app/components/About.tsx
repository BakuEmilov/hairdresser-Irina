import Image from "next/image";
import React from "react";
import HeroImg from "../../../public/assets/hero-img.png";

const About = () => {
  return (
    <div className="flex items-center justify-between max-w-[1100px] mx-auto mt-[10px] lg:mt-[60px] px-4">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-[50px] font-semibold">
          Привет, я парикмахер <span>Байыр</span>
        </h1>
        <p className="text-[22px] font-medium">
          Адрес: <span className="mr-2 text-[#4D5E72]">Абдрахманова</span>
          <span className="text-[#4D5E72]">142</span>
        </p>
        <p className="text-[22px] font-medium">
          Выходной день: <span className="text-[#4D5E72]">Воскресение</span>
        </p>
        <p className="text-[22px] font-medium">
          График работы:{" "}
          <span className="text-[#4D5E72]">
            От: <span>11:00</span> До <span>23:00</span>
          </span>
        </p>
      </div>
      <div>
        <Image src={HeroImg} alt="" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default About;
