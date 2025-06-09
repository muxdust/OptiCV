"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Mail, LockKeyhole } from "lucide-react";
import FadeInOnScroll from "@/utils/FadeInScroll";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex justify-center items-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-full lg:container px-3">
        <FadeInOnScroll className="w-full">
          <form
            action=""
            className="flex flex-col justify-start items-start w-full gap-4 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700/50 max-w-lg mx-auto"
          >
            <h2 className="text-4xl font-semibold text-center text-neutral-800 dark:text-neutral-100 self-center">
              Welcome Back!
            </h2>
            <p className="text-md font-normal text-center text-neutral-700 dark:text-neutral-300 self-center">
              Login to your account to continue
            </p>
            <button className="px-4 py-2 rounded-md text-neutral-100 dark:text-neutral-800 bg-neutral-800 dark:bg-white cursor-pointer hover:bg-neutral-900 dark:hover:bg-neutral-100 text-md font-normal flex justify-center items-center gap-2 w-full">
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              Login with Google
            </button>
            <p className="text-md font-normal text-center text-neutral-600 dark:text-neutral-400 self-center ">
              or continue with email
            </p>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <label
                htmlFor="email"
                className="text-md font-normal text-neutral-700 dark:text-neutral-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Email
              </label>
              <input
                type="text"
                placeholder="Your Email address"
                className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <label
                htmlFor="password"
                className="text-md font-normal text-neutral-700 dark:text-neutral-300 flex items-center gap-2"
              >
                <LockKeyhole size={20} />
                Password
              </label>
              <div className="flex items-center gap-2 w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 group focus-within:ring-2 focus-within:ring-orange-500">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  className="w-full focus:outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="inline-block"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button className="px-4 py-2 rounded-md text-white bg-orange-500 dark:bg-orange-500 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-600 text-md font-normal flex justify-center items-center gap-2 w-full mt-3">
              Login
            </button>

            <p className="text-md font-normal text-center text-neutral-600 dark:text-neutral-400 self-center">
              Don't have an account?{" "}
              <Link href="/register" className="text-orange-500 underline">
                Register
              </Link>
            </p>
          </form>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Login;
