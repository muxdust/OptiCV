"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ListFilterPlus } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex justify-center items-center w-full border-b border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-900 fixed top-0 z-10">
      <div className="flex flex-col justify-center items-center w-full py-2 px-3 lg:container">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-2xl font-semibold flex items-center">
              <ListFilterPlus size={24} className="text-orange-500" />
              <span>OptiCV</span>
            </h1>
          </Link>
          <ul className="hidden lg:flex items-center gap-5">
            <li className="text-md font-normal">
              <Link href="/about">About</Link>
            </li>
            <li className="text-md font-normal">
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md border border-neutral-200 dark:border-neutral-700/50 text-neutral-800 dark:text-neutral-300 cursor-pointer"
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            )}
            <Link
              href="/login"
              className="hidden lg:flex px-4 py-1.5 rounded-md text-white bg-orange-500 dark:bg-orange-500 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors duration-300 text-md font-normal"
            >
              Login
            </Link>
            <button
              onClick={toggleMenu}
              className="block lg:hidden p-2 rounded-md border border-neutral-200 dark:border-neutral-700/50 text-neutral-800 dark:text-neutral-300 cursor-pointer"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="flex flex-col items-center w-full mt-5 lg:hidden">
            <ul className="flex flex-col items-center gap-5">
              <li className="text-md font-normal">
                <Link href="/about">About</Link>
              </li>
              <li className="text-md font-normal">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="px-4 py-1.5 rounded-md text-white bg-orange-500 dark:bg-orange-500 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors duration-300 text-md font-normal"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
