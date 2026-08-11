import { useEffect, useState } from "react";
import Icon from "./Icon";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((previous) => !previous)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition duration-300 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-400"
    >
      {isDark ? (
        <Icon
          name="sun.svg"
          className="h-5 w-5"
        />
      ) : (
        <Icon
          name="moon.svg"
          className="h-5 w-5"
        />
      )}
    </button>
  );
}

export default ThemeToggle;