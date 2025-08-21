"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const getSystemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export default function ThemeToggler() {
  const [theme, setTheme] = useState("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored && stored !== "system") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      setTheme("system");
      const sys = getSystemTheme();
      document.documentElement.classList.toggle("dark", sys === "dark");
    }
    // Listen for system theme changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", mq.matches);
      }
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
    // eslint-disable-next-line
  }, [theme]);

  const setAndStoreTheme = (val: "light" | "dark" | "system") => {
    setTheme(val);
    localStorage.setItem("theme", val);
    if (val === "system") {
      const sys = getSystemTheme();
      document.documentElement.classList.toggle("dark", sys === "dark");
    } else {
      document.documentElement.classList.toggle("dark", val === "dark");
    }
  };

  // Indicator left: 0% (light), 33.33% (system), 66.66% (dark)
  const indicatorIndex = theme === "light" ? 0 : theme === "system" ? 1 : 2;
  const pastel = [
    "bg-yellow-100/80 dark:bg-yellow-300/20",
    "bg-blue-100/80 dark:bg-blue-300/20",
    "bg-zinc-200/80 dark:bg-zinc-700/80"
  ];
  const iconColors = [
    "text-yellow-400", // light
    "text-blue-400 dark:text-blue-300", // system
    "text-zinc-500 dark:text-zinc-200" // dark
  ];

  if (!mounted) return null;

  return (
    <div className="relative flex items-center w-28 h-11 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md shadow-md transition-colors duration-300 select-none overflow-hidden">
      <span
        className={`absolute top-1/2 left-0 transition-all duration-300 w-8 h-8 rounded-full shadow-md ${pastel[indicatorIndex]} z-0`}
        style={{ left: `calc(${indicatorIndex} * 33.33% + 16.66%)`, transform: 'translate(-50%, -50%)' }}
      />
      <form className="flex flex-1 w-full h-full z-10" aria-label="Theme selector">
        <label className="w-1/3 h-full flex items-center justify-center cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={() => setAndStoreTheme("light")}
            className="sr-only"
            aria-label="Light theme"
          />
          <SunIcon className={`h-5 w-5 transition-colors duration-300 ${theme === "light" ? iconColors[0] : "text-gray-400 dark:text-gray-500"}`} />
        </label>
        <label className="w-1/3 h-full flex items-center justify-center cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="system"
            checked={theme === "system"}
            onChange={() => setAndStoreTheme("system")}
            className="sr-only"
            aria-label="System theme"
          />
          <ComputerDesktopIcon className={`h-5 w-5 transition-colors duration-300 ${theme === "system" ? iconColors[1] : "text-gray-400 dark:text-gray-500"}`} />
        </label>
        <label className="w-1/3 h-full flex items-center justify-center cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={() => setAndStoreTheme("dark")}
            className="sr-only"
            aria-label="Dark theme"
          />
          <MoonIcon className={`h-5 w-5 transition-colors duration-300 ${theme === "dark" ? iconColors[2] : "text-gray-400 dark:text-gray-500"}`} />
        </label>
      </form>
    </div>
  );
}
