"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

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

  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const renderProfileIcon = () => {
    if (session) {
      return (
        <div className="relative group">
          <img
            src={session.user.profileImage}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
          <div className="absolute right-[50%] lg:right-0 transform translate-x-1/2 lg:translate-x-0 mt-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 flex flex-col items-start p-3 space-y-2">
            <p className="text-md font-medium text-neutral-700 dark:text-neutral-200 text-left">
              {session.user.name}
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-200 text-left">
              {session.user.email}
            </p>
            <button
              onClick={handleSignOut}
              className="text-sm font-medium px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer w-full"
            >
              Logout
            </button>
          </div>
        </div>
      );
    }
    return null;
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
                className="fill-violet-500 w-full h-8 object-contain"
              />
              <span>OptiCV</span>
            </h1>
          </Link>
          <ul className="flex items-center gap-5">
            <li className="hidden lg:flex text-md font-normal">
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
              {session ? (
                <div className="hidden lg:block">
                  {renderProfileIcon()}
                </div>
              ) : (
                <Link
                  href="/sign-in"
                  className="hidden lg:flex px-4 py-2 rounded-md text-white bg-violet-500 dark:bg-violet-500 cursor-pointer hover:bg-violet-600 dark:hover:bg-violet-600 text-md font-normal"
                >
                  Login
                </Link>
              )}
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
              {session ? (
                renderProfileIcon()
              ) : (
                <li>
                  <Link
                    href="/sign-in"
                    className="px-4 py-1.5 rounded-md text-white bg-violet-500 dark:bg-violet-500 cursor-pointer hover:bg-violet-600 dark:hover:bg-violet-600 text-md font-normal"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
