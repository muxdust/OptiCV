import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full border-t border-neutral-200 dark:border-neutral-700/50">
      <div className="flex flex-col justify-center items-center w-full lg:container px-3 py-3 gap-2">
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
      </div>
    </footer>
  );
};

export default Footer;
