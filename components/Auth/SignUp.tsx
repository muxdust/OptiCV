"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Mail, LockKeyhole, User } from "lucide-react";
import SwipeUpOnScroll from "@/utils/SwipeUpOnScroll";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const signupMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok)
        throw new Error((await res.json()).error || "Sign up failed");
      return res.json();
    },
    onSuccess: async () => {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      toast.success("Sign up successful");
      router.push("/");
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signupMutation.mutate();
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
              {`Sign Up`}
            </h2>
            <p className="text-md font-normal text-center self-center">
              Create an account to continue
            </p>

            <button
              type="button"
              onClick={() => signIn("google")}
              className="px-4 py-2 rounded-md text-neutral-100 dark:text-neutral-800 bg-neutral-800 dark:bg-white cursor-pointer hover:bg-neutral-900 dark:hover:bg-neutral-100 text-md font-normal flex justify-center items-center gap-2 w-full"
            >
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              Sign Up with Google
            </button>

            <p className="text-md font-normal text-center text-neutral-600 dark:text-neutral-400 self-center">
              or continue with email
            </p>

            <div className="flex flex-col justify-start items-start w-full gap-2 mt-5">
              <label
                htmlFor="name"
                className="text-lg font-normal flex items-center gap-2"
              >
                <User size={20} />
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-start items-start w-full gap-2">
              <label
                htmlFor="email"
                className="text-lg font-normal flex items-center gap-2"
              >
                <Mail size={20} />
                Email
              </label>
              <input
                type="text"
                placeholder="Your Email address"
                className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-start items-start w-full gap-2">
              <label
                htmlFor="password"
                className="text-lg font-normal flex items-center gap-2"
              >
                <LockKeyhole size={20} />
                Password
              </label>
              <div className="flex items-center gap-2 w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 group focus-within:ring-2 focus-within:ring-indigo-500">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  className="w-full focus:outline-none bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <p className="text-sm font-normal">
                By creating an account, you agree to our terms and conditions.
              </p>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 rounded-md text-white bg-indigo-500 dark:bg-indigo-500 cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-600 text-md font-normal flex justify-center items-center gap-2 w-full mt-3"
            >
              Sign Up
            </button>

            <p className="text-md font-normal text-center text-neutral-600 dark:text-neutral-400 self-center">
              {`Already have an account?`}{" "}
              <Link href="/sign-in" className="text-indigo-500 underline">
                Sign In
              </Link>
            </p>
          </form>
        </SwipeUpOnScroll>
      </div>
    </section>
  );
};

export default SignUp;
