import React from "react";

import { Brain, Shield, Zap, Download, Clock, Target } from "lucide-react";

import SwipeUpOnScroll from "@/utils/SwipeUpOnScroll";

const data = [
  {
    id: 1,
    name: "AI-Powered Analysis",
    description:
      "Advanced algorithms analyze your resume structure, content, and formatting for maximum impact.",
    icon: <Brain size={36} />,
  },
  {
    id: 2,
    name: "Role-Specific Optimization",
    description:
      "Tailors your resume to match specific job descriptions and industry requirements.",
    icon: <Target size={36} />,
  },
  {
    id: 3,
    name: "Lightning Fast",
    description:
      "Get your optimized resume in under 30 seconds with our high-performance AI engine.",
    icon: <Zap size={36} />,
  },
  {
    id: 4,
    name: "Privacy First",
    description:
      "Your data is encrypted and never stored. Complete privacy and security guaranteed.",
    icon: <Shield size={36} />,
  },
  {
    id: 5,
    name: "Multiple Formats",
    description:
      "Download in PDF, LaTeX, or Word format. Compatible with all major platforms.",
    icon: <Download size={36} />,
  },
  {
    id: 6,
    name: "Real-time Preview",
    description:
      "See changes instantly with our live preview feature before downloading.",
    icon: <Clock size={36} />,
  },
];

const Features = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full lg:container px-3 gap-2">
        <SwipeUpOnScroll>
          <h2 className="text-4xl font-semibold text-center text-neutral-800 dark:text-neutral-100">
            Powerful Features
          </h2>
          <p className="text-md font-normal text-center">
            Everything you need to create a professional resume in minutes to
            get noticed by recruiters and hiring managers.
          </p>
        </SwipeUpOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-start items-stretch mt-7">
          {data.map((item) => (
            <SwipeUpOnScroll key={item.id} className="w-full">
              <div className="flex flex-col justify-start items-start w-full gap-4 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700/50">
                <span className="bg-gradient-to-r from-violet-500 to-rose-500 rounded-lg p-2 text-white">
                  {item.icon}
                </span>
                <span className="text-2xl text-neutral-800 dark:text-neutral-100 font-semibold">
                  {item.name}
                </span>
                <p className="text-md font-normal text-start">
                  {item.description}
                </p>
              </div>
            </SwipeUpOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
