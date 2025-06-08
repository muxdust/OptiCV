import React from "react";
import {
  ArrowRight,
  Sparkle,
  Download,
  Brain,
  FileText,
  CheckCircle,
} from "lucide-react";

import FadeInOnScroll from "@/utils/FadeInScroll";

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative flex items-center justify-center">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: "transparent",
          backgroundImage: `
        linear-gradient(to right, rgba(100,116,139,0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100,116,139,0.1) 1px, transparent 1px)
      `,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="grid grid-cols-1 items-center justify-center w-full lg:container px-3 pt-36 pb-20 gap-10">
        <FadeInOnScroll>
          <div className="flex flex-col items-center justify-center w-full gap-4 max-w-2xl mx-auto">
            <p className="text-md font-normal px-4 py-0.5 rounded-full border border-orange-500 dark:border-orange-500 text-neutral-800 dark:text-neutral-300 bg-orange-500/20 flex items-center gap-2">
              <Sparkle size={24} className="text-orange-500" />
              In Development
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-center text-neutral-800 dark:text-neutral-100">
              Optimise your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Overleaf
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Resume
              </span>{" "}
              with AI
            </h1>
            <p className="text-md font-normal text-center text-neutral-800 dark:text-neutral-300">
              Upload your Overleaf resume and get a job-ready version in seconds
            </p>
            <button className="px-4 py-2 rounded-md text-white bg-orange-500 dark:bg-orange-500 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors duration-300 text-md font-normal flex items-center gap-2">
              Get Started <ArrowRight size={24} />
            </button>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="bg-white dark:bg-neutral-900 backdrop-blur-sm rounded-2xl border border-neutral-200 dark:border-neutral-700/50 p-6 max-w-5xl w-full mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-orange-500 font-medium">
                      LaTeX Resume Code
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-3/4"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-1/2"></div>
                    <div className="h-2 bg-gradient-to-r from-orange-500 to-pink-500 opacity-30 rounded w-2/3"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-5/6"></div>
                  </div>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Brain className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-orange-500 font-medium">
                      Job Description
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-full"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-4/5"></div>
                    <div className="h-2 bg-gradient-to-r from-orange-500 to-pink-500 opacity-30 rounded w-3/5"></div>
                    <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded w-2/3"></div>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-md text-white bg-orange-500 dark:bg-orange-500 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors duration-300 text-md font-normal flex items-center gap-2">
                  Download <Download size={24} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-500/10 via-pink-500/5 to-rose-500/10 rounded-lg p-4 border border-orange-500/20">
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
                        <div className="h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded w-1/4"></div>
                        <div className="space-y-1">
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded w-full"></div>
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded w-5/6"></div>
                          <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded w-3/4"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded w-1/3"></div>
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
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-bold text-lg">
                      98%
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-xs">
                      ATS Score
                    </div>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-bold text-lg">
                      2.3s
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-xs">
                      Process Time
                    </div>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-bold text-lg">
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
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Hero;
