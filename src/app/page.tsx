import React from "react";

import About from "./components/About";
import WorkingDayCarousel from "./components/WorkingDayCarousel";
import HeaderClient from "./components/HeaderClient";
import AnotherEntry from "./components/AnotherEntry";

const Home = () => {
  return (
    <div>
      <HeaderClient />
      <div>
      <About />
      <WorkingDayCarousel />
      <AnotherEntry />
      </div>
    </div>
  );
};

export default Home;
