import React from "react";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full border-t border-neutral-200 dark:border-neutral-700/50">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:container px-3 py-3 gap-2">
        <p className="text-md font-normal text-center text-neutral-700 dark:text-neutral-300">
          In development by{" "}
          <Link
            target="_blank"
            href="https://priyanxhu.me"
            className="text-orange-500 hover:underline cursor-pointer transition-all duration-200 ease-in-out"
          >
            Priyanshu
          </Link>
        </p>
        <div className="flex justify-center items-center gap-2">
          <p className="text-md font-normal text-center text-neutral-700 dark:text-neutral-300">
            Want to contribute?{" "}
          </p>
          <Link href="https://github.com/muxdust/opticv">
            <button className="px-4 py-2 rounded-md text-white bg-orange-500 dark:bg-orange-500 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors duration-300 text-md font-normal flex items-center gap-2">
              GitHub
              <GithubIcon size={20} />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
