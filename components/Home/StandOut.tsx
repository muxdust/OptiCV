import React from "react";
import { CheckCircle, FileText, Brain } from "lucide-react";
import SwipeUpOnScroll from "@/utils/SwipeUpOnScroll";

const StandOut = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-stretch w-full lg:container px-3 gap-5">
        <SwipeUpOnScroll className="w-full">
          <div className="flex flex-col justify-start items-start w-full gap-2">
            <h2 className="text-4xl font-semibold text-start text-neutral-800 dark:text-neutral-100">
              Stand Out from the Competition
            </h2>
            <p className="text-md font-normal text-start">
              Our AI ensures your resume gets noticed by both ATS systems and
              hiring managers with intelligent optimization.
            </p>
            <ul className="flex flex-col justify-start items-start w-full gap-3 mt-5">
              <li className="flex items-center gap-2">
                <CheckCircle size={20} className="text-violet-500" />
                <p className="text-md font-normal text-start">
                  ATS-optimized formatting and keywords
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={20} className="text-violet-500" />
                <p className="text-md font-normal text-start">
                  Industry-specific customization
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={20} className="text-violet-500" />
                <p className="text-md font-normal text-start">
                  Improved readability and structure
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={20} className="text-violet-500" />
                <p className="text-md font-normal text-start">
                  Relevant skill highlighting
                </p>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={20} className="text-violet-500" />
                <p className="text-md font-normal text-start">
                  Professional LaTeX output
                </p>
              </li>
            </ul>
          </div>
        </SwipeUpOnScroll>

        <SwipeUpOnScroll className="w-full">
          <div className="backdrop-blur-sm rounded-2xl border border-neutral-200 dark:border-neutral-700/50 p-6 w-full">
            <div className="space-y-4">
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="h-4 w-4 text-violet-500" />
                  <span className="text-sm text-violet-500 font-medium">
                    Resume Template
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-300 dark:bg-neutral-600 rounded w-1/2"></div>
                  <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-5/6"></div>
                  <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-2/3"></div>
                  <div className="h-2 bg-gradient-to-r from-violet-500 to-rose-500 opacity-30 rounded w-3/4"></div>
                  <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-full"></div>
                </div>
              </div>

              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Brain className="h-4 w-4 text-violet-500" />
                  <span className="text-sm text-violet-500 font-medium">
                    AI-Powered Enhancements
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-violet-500 to-rose-500 rounded w-1/3"></div>
                  <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-2/3"></div>
                  <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-4/5"></div>
                  <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </SwipeUpOnScroll>
      </div>
    </section>
  );
};

export default StandOut;
