"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="fill-indigo-500 w-full h-8 object-contain"
              />
              <span>OptiCV</span>
            </h1>
          </Link>
          <ul className="hidden lg:flex items-center gap-5">
            <li className="text-md font-normal">
              <Link href="/editor">Editor</Link>
            </li>
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
                className="hidden lg:flex px-4 py-1.5 rounded-md text-white bg-indigo-500 dark:bg-indigo-500 cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors duration-300 text-md font-normal"
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
          </ul>
        </div>
        {open && (
          <div className="flex flex-col items-center w-full mt-5 lg:hidden pb-5">
            <ul className="flex flex-col items-center gap-5">
              <li className="text-md font-normal">
                <Link href="/editor">Editor</Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="px-4 py-1.5 rounded-md text-white bg-indigo-500 dark:bg-indigo-500 cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors duration-300 text-md font-normal"
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
