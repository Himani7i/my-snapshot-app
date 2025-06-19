// src/hooks/useDarkMode.js
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [enabled, setEnabled] = useState(
    () => localStorage.theme === "dark" || 
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [enabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
