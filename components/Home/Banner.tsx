import React from "react";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full lg:container mx-3 px-3 gap-4 py-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl">
        <h2 className="text-4xl font-semibold text-center text-neutral-50">
          Optimize Your Resume Effortlessly with AI
        </h2>
        <p className="text-md font-normal text-center text-neutral-200">
          Upload your Overleaf resume and receive a job-specific, AI-enhanced
          version instantly.
        </p>
        <button className="flex items-center gap-2 px-6 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 text-orange-500 cursor-pointer transition-colors duration-200 ease-in-out">
          Get Started
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Banner;
