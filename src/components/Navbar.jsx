import React from "react";
import userDarkMode from "../hooks/userDarkMode";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [enabled, setEnabled] = userDarkMode();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-zinc-900 shadow-md dark:shadow-zinc-800 transition-all duration-300">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">
        Snapshot Challenge
      </h1>

      <button
        onClick={() => setEnabled(!enabled)}
        className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-white hover:scale-105 transition-transform"
      >
        {enabled ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
