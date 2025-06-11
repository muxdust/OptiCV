import React from "react";
import {
  ArrowRight,
  Sparkle,
  CopyIcon,
  DownloadIcon,
  UploadIcon,
  Brain,
  FileText,
  CheckCircle,
} from "lucide-react";

import SwipeUpOnScroll from "@/utils/SwipeUpOnScroll";

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative flex items-center justify-center">
      <div className="grid grid-cols-1 items-center justify-center w-full lg:container px-3 pt-36 pb-20 gap-10">
        <SwipeUpOnScroll>
          <div className="flex flex-col items-center justify-center w-full gap-4 max-w-2xl mx-auto">
            <p className="text-md font-normal px-4 py-0.5 rounded-full border border-violet-500 dark:border-violet-500 bg-violet-500/20 flex items-center gap-2">
              <Sparkle size={24} className="text-violet-500" />
              Beta Version
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-center text-neutral-800 dark:text-neutral-100">
              Optimise your{" "}
              <span className="bg-gradient-to-r from-violet-500 to-rose-500 bg-clip-text text-transparent">
                Overleaf
              </span>{" "}
              <span className="bg-gradient-to-r from-violet-500 to-rose-500 bg-clip-text text-transparent">
                Resume
              </span>{" "}
              with AI
            </h1>
            <p className="text-md font-normal text-center">
              Upload your Overleaf resume and get a job-ready version in seconds
            </p>
            <button className="px-4 py-2 rounded-md text-white bg-violet-500 dark:bg-violet-500 cursor-pointer hover:bg-violet-600 dark:hover:bg-violet-600 text-md font-normal flex items-center gap-2">
              Get Started <ArrowRight size={24} />
            </button>
          </div>
        </SwipeUpOnScroll>
        <SwipeUpOnScroll className="w-full">
          <div className="backdrop-blur-sm rounded-2xl border border-neutral-200 dark:border-neutral-700/50 p-6 max-w-5xl w-full mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 w-full">
              <div className="space-y-4">
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="h-4 w-4 text-violet-500" />
                    <span className="text-sm text-violet-500 font-medium">
                      LaTeX Resume Code
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-3/4"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-1/2"></div>
                    <div className="h-2 bg-gradient-to-r from-violet-500 to-rose-500 opacity-30 rounded w-2/3"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-5/6"></div>
                  </div>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Brain className="h-4 w-4 text-violet-500" />
                    <span className="text-sm text-violet-500 font-medium">
                      Job Description
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-full"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-4/5"></div>
                    <div className="h-2 bg-gradient-to-r from-violet-500 to-rose-500 opacity-30 rounded w-3/5"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <button className="flex justify-center items-center gap-2 px-2 py-1 text-sm font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer">
                    <CopyIcon size={16} className="text-violet-500" />
                    Copy
                  </button>
                  <button className="flex justify-center items-center gap-2 px-2 py-1 text-sm font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer">
                    <DownloadIcon size={16} className="text-violet-500" />
                    Download
                  </button>
                  <button className="flex justify-center items-center gap-2 px-2 py-1 text-sm font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer">
                    <UploadIcon size={16} className="text-violet-500" />
                    Upload
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-violet-500/10 via-rose-500/5 to-rose-500/10 rounded-lg p-4 border border-violet-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-500 font-medium">
                      Optimized Resume
                    </span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 text-xs border border-neutral-200 dark:border-neutral-700">
                    <div className="space-y-3">
                      <div className="border-b border-neutral-200 dark:border-neutral-700 pb-2">
                        <div className="h-3 bg-neutral-800 dark:bg-neutral-200 rounded w-1/2 mb-1"></div>
                        <div className="h-2 bg-neutral-400 dark:bg-neutral-500 rounded w-1/3"></div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-violet-500 to-rose-500 rounded w-1/4"></div>
                        <div className="space-y-1">
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded w-full"></div>
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded w-5/6"></div>
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded w-3/4"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-violet-500 to-rose-500 rounded w-1/3"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <div className="bg-gradient-to-r from-violet-500 to-rose-500 bg-clip-text text-transparent font-bold text-lg">
                      98%
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-xs">
                      ATS Score
                    </div>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <div className="bg-gradient-to-r from-violet-500 to-rose-500 bg-clip-text text-transparent font-bold text-lg">
                      2.3s
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-xs">
                      Process Time
                    </div>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <div className="bg-gradient-to-r from-violet-500 to-rose-500 bg-clip-text text-transparent font-bold text-lg">
                      47
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-xs">
                      Keywords
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwipeUpOnScroll>
      </div>
    </section>
  );
};

export default Hero;
