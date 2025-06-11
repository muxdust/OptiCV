"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Mail, LockKeyhole } from "lucide-react";
import SwipeUpOnScroll from "@/utils/SwipeUpOnScroll";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full lg:container px-3">
        <SwipeUpOnScroll className="w-full">
          <form
            action=""
            className="flex flex-col justify-start items-start w-full gap-4 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700/50 max-w-lg mx-auto"
          >
            <h2 className="text-4xl font-semibold text-center text-neutral-800 dark:text-neutral-100 self-center">
              {`Welcome Back!`}
            </h2>
            <p className="text-md font-normal text-center self-center">
              Login to your account to continue
            </p>
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 rounded-md text-neutral-100 dark:text-neutral-800 bg-neutral-800 dark:bg-white cursor-pointer hover:bg-neutral-900 dark:hover:bg-neutral-100 text-md font-normal flex justify-center items-center gap-2 w-full"
            >
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              Login with Google
            </button>
            <p className="text-md font-normal text-center text-neutral-600 dark:text-neutral-400 self-center ">
              or continue with email
            </p>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <label
                htmlFor="email"
                className="text-md font-normal flex items-center gap-2"
              >
                <Mail size={20} />
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email address"
                className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <label
                htmlFor="password"
                className="text-md font-normal flex items-center gap-2"
              >
                <LockKeyhole size={20} />
                Password
              </label>
              <div className="flex items-center gap-2 w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 group focus-within:ring-2 focus-within:ring-indigo-500">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-indigo-500 checked:text-white"
              />
              <p className="text-sm font-normal">Remember me</p>
            </div>

            <button
              onClick={handleLogin}
              className="px-4 py-2 rounded-md text-white bg-indigo-500 dark:bg-indigo-500 cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-600 text-md font-normal flex justify-center items-center gap-2 w-full mt-3"
            >
              Login
            </button>

            <p className="text-md font-normal text-center text-neutral-600 dark:text-neutral-400 self-center">
              {`Don't have an account?`}{" "}
              <Link href="/sign-up" className="text-indigo-500 underline">
                Register
              </Link>
            </p>
          </form>
        </SwipeUpOnScroll>
      </div>
    </section>
  );
};

export default Login;
