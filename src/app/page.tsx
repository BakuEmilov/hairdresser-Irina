import React from "react";

import About from "./components/About";
import WorkingDayCarousel from "./components/WorkingDayCarousel";
import HeaderClient from "./components/HeaderClient";
import AnotherEntry from "./components/AnotherEntry";

const Home = () => {
  return (
    <>
      <HeaderClient />
      <About />
      <h1 className="text-center text-3xl font-bold mt-20">Запись на прием</h1>
      <WorkingDayCarousel />
      <AnotherEntry />
    </>
  );
};

export default Home;
