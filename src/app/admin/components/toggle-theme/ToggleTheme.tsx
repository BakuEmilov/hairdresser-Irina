"use client";

import { useEffect, useState } from "react";

import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-[#E2E2E2] shadow-md bg-[#042A38] cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <Moon className="text-white" size={19} />
      <div
        className="absolute bg-white w-6 h-6 rounded-full shadow-xl transform transition-transform duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <Sun className="ml-auto" size={19}/>
    </div>
  );
};

export default ToggleTheme;
